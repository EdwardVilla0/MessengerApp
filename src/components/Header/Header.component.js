import React from 'react';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function Header() {
    return <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar
            />
            <AccessTimeIcon />
        </HeaderLeft>

        {/* header search */}

        {/* header right */}
    </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.h1`
display:flex;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)``