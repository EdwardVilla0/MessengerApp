import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase/firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    console.log(channelId);

    const sendMeesage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection
            ('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: 'Edward',
                userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQGxhJKSQurNHw/profile-displayphoto-shrink_100_100/0/1604963079350?e=1620864000&v=beta&t=IQ8DUeRn1y8Qds2Qdnfz_bLV2wrQpGCv-QlNyG_alBU'
            });

        setInput('');



    }
    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #Room`} />
                <Button hidden type='submit' onClick={sendMeesage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
         position: fixed;
         bottom: 30px;
         width: 60%;
         border: 1px solid gray;
         border-radius: 3px;
         padding: 20px;
         outline: none;
    }

    > form > button{
        display: none !important;
    }
`