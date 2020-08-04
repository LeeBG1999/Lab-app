import rules, { IAction } from '../rbac-rules';

type Rules = typeof rules;

type Role = keyof typeof rules;

const check = (rules: Rules, role: Role, action: IAction, data: any) => {
    const permissions = rules[role];
    if (!permissions) {
        // role is not present in the rules
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && staticPermissions.includes(action)) {
        // static rule not provided for action
        return true;
    }

    const dynamicPermissions = permissions.dynamic;

    // if (dynamicPermissions) {
    // 	const permissionCondition = dynamicPermissions[action];
    // 	if (!permissionCondition) {
    // 		// dynamic rule not provided for action
    // 		return false;
    // 	}

    // 	return permissionCondition(data);
    // }
    return false;
};

interface Can {
    role: Role;
    perform: any;
    data?: any;
    yes: () => any;
    no?: () => any;
}
const Can: React.FC<Can> = ({ role, perform, data, no, yes }) => {
    return check(rules, role, perform, data) ? yes() : no ? no() : null;
};

const identity: <T>(arg: T) => T = arg => {
    return arg;
};

console.log('identity(5)', identity(5));

export default Can;
