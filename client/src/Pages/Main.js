import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import '../css/Main.css';
import Navbar from '../components/Navbar';
import { BiLike } from 'react-icons/bi';
import chat_icon from '../images/chat_icon.png'
import { FiSend } from 'react-icons/fi';
import ChatBot from 'react-simple-chatbot';

function Main() {

  const [chatbot, setChatbot] = useState(false);

  const [announcement_title, setAnnouncementTitle] = useState("");
  const [announcement_description, setAnnouncementDescription] = useState("");
  const [announcementList, setAnnouncementList] = useState([]);

  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
      console.log(sessionStorage.getItem('token'));
    Axios.get('http://localhost:3001/announcement/get').then((response) => {
      setAnnouncementList(response.data);

    } )
  }, [])

  return (
    <div className="main-wrapper">
      <Header />
      <Navbar />
      <div className="home-body">
        <div className="main-username">
          <h1>Welcome, Arriane!</h1>
        </div>
        <div className="announcement-label">
          <h1>Announcements</h1>
        </div>
        {announcementList.map((val) => {
          return (
            <div className="announcement-contents">
              <div className="announcement-container">
                <div className="announcement-header">
                  <h1>{val.announcement_title} </h1>
                </div>
                <div className="annoucement-body">
                  <div className="announcement-description">
                    <p>{val.announcement_description}</p>
                    <div className="announcement-space">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* chatbot start */}
      <div className="chatbot_icon">
      
         
      </div>
      {/* <div className="chatbot-box">
        <div id="chatbotList">
          <ul>
            <li className="admin-message">chatbot</li>
            <li className="client-message">client</li>
          </ul>
        </div>
        <div className="message-box-wrap">
          <div className="message-box">
            <input type="text" name="" />
          </div>
          <button id="send"><FiSend size="1.2rem" /> </button>
        </div>

        <div className="admin-client-message-wrap">
          <select name="service" data-question="Good day! What can i do for you?">
            <select>How to request a Certificate of Good Moral</select>
            <select>What are your Services</select>
            <select>I want to do a Smart Chat</select>
            <select>I want to talk with someone</select>
            <select>How can i request for Interviews?</select>
          </select>
          <input type="text" name="gm" data-question="What is the purpose of your request?" />
          <input type="text" name="gm" data-question="Click the services button on the left side of the screen to see our offered services!" />
          <input type="text" name="gm" data-question="Click the Smart Chat button icon on the left side to proceed." />
          <input type="text" name="gm" data-question="You can talk to me, how's your day?" />
          <input type="text" name="gm" data-question="You can request an interview by clicking the Services on the left side." />
          <div data-question="Are you sure?">
            <button id="confirm">Yes</button>
            <button id="notconfirm">No</button>
          </div>
        </div>
        <form id="submit_info_form">
          <div className="submit_info"></div>
          <input type="submit" value="Send" id="submit" name="" />
        </form> 


      </div> */}

    </div>
  )
}

export default Main;