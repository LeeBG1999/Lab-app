const promptDirectory = require('inquirer-directory');
module.exports = function(plop) {
    // create your generators here
    plop.setHelper('module', function(text){
        return text
    })
    plop.setHelper('controller', function(text) {
        return text.concat('Controller');
    });
    plop.setHelper('component', function(text) {
        return text.concat('Component');
    });
    // Suffix to View Component
    plop.setHelper('view', function(text) {
        return text.concat('View');
    });
    plop.setHelper('setDir', function(dir, name) {
        return `./src/${dir}/${name}`;
    });

    plop.setPrompt('directory', promptDirectory);

    plop.setGenerator('Modules', {
        description: 'Tự động tạo module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nhập tên module',
            },
            {
                type: 'directory',
                name: 'dir',
                basePath: './src',
                message: 'Chọn thư mục để tạo module',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{setDir dir name}}/{{controller (pascalCase name)}}.tsx',
                templateFile: 'templates/ControllerComponent.js.hbs',
            },
            {
                type: 'add',
                path: '{{setDir dir name}}/{{view (pascalCase name)}}.tsx',
                templateFile: 'templates/PresentationalComponent.js.hbs',
            },
            {
                type: 'add',
                path: '{{setDir dir name}}/index.tsx',
                templateFile: 'templates/index.js.hbs',
            },
        ],
    });
};
