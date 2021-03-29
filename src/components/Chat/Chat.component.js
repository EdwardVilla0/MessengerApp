import styled from 'styled-components'
import React from 'react'

function Chat() {
    return (
        <ChatContainer>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
            <h1>I am the chat screen</h1>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
`
