import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MemberCard } from 'components/home/components/members/controller';
import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const MemberCardPresentational: React.FC<{ member: MemberCard }> = ({
    member,
}) => {
    return (
        <Styled.MemberCard>
            <Styled.Avt>
                <img src={member.avatar} />
            </Styled.Avt>
            <Styled.Info>
                <div className="name">{member.name}</div>
                <div className="course">Khóa {member.course}</div>
                <Styled.Icons>
                    <a href="">
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </a>
                </Styled.Icons>
            </Styled.Info>
        </Styled.MemberCard>
    );
};

export default MemberCardPresentational;
