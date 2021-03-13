import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


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

`

const SidebarInfo = styled.div`

`