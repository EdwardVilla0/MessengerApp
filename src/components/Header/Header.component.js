import React from 'react';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'


function Header() {
    return <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar
            />
            <AccessTimeIcon />
        </HeaderLeft>

        <HeaderSearch>
            <SearchIcon />
            <input placeholder='search messeages' />
        </HeaderSearch>

        {/* header right */}
    </HeaderContainer>
}

export default Header;

const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
text-align: center;
display:flex;
padding: 0 50px;
color: grey;
border: 1px grey solid;

> input{
    background: transparent;
    border: none;
    text-align:center;
    min-width: 30vw;
}
`

const HeaderContainer = styled.h1`
display:flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;
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

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8;
}
`;

