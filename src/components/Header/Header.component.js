import React from 'react';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import { AccessTimeIcon } from '@material-ui/icons';

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

const HeaderContainer = styled.h1``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``