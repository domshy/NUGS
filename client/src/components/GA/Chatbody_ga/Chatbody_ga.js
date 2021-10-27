import React from 'react'
import './Chatbody_ga.css'
import ChatList_ga from '../Chatlist_ga/ChatList_ga'
import ChatContent_ga from '../ChatContent_ga/ChatContent_ga'


function Chatbody_ga() {
    return (
        <div className="ga_chatbody">
            <ChatList_ga />
            <ChatContent_ga />
        </div>
    )
}

export default Chatbody_ga
