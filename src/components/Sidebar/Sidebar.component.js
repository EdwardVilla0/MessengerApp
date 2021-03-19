import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'


function Sidebar() {
    return (
        <div>
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>TESTING HEADER</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            testing
                        </h3>
                    </SidebarInfo>
                    <CreateIcon />
                </SidebarHeader>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
height: 100vh;
color: white;
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
`

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding-bottom: 10px;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`

const SidebarInfo = styled.div`

`