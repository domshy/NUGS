import React, { useEffect, useState } from 'react'
import '../../css/Admin/AnnouncementGD.css'
import Axios from 'axios'
import PopUp from '../../components/PopUp';
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';

import kalayaan from '../../images/image1.png'
import nuok from '../../images/image2.png'
import father from '../../images/image3.jpg'
import pride from '../../images/pride.png'

import Header from '../../components/Admin/Header_admin'
import Navbar from '../../components/Admin/Navbar_admin'


function AnnouncementGD() {

    const [delTask, setDelTask] = useState(false)

    const handleConfirmationBox = () => {
        if (!delTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setDelTask(true);
            submitAnnouncement();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setDelTask(false);
            history.push('/dashboard');
        }
    }

    const isAnnouncementValid = () => {
        if (!announcement_title || announcement_title.trim() === "") {
            setAnnouncementTitleErrors("*This field cannot be empty!");
        } else if (!announcement_description || announcement_description.trim() === "") {
            setAnnouncementDescriptionErrors("*This field cannot be empty!");
        } else {
            setAnnouncementTitleErrors("");
            setAnnouncementDescriptionErrors("")
            handleConfirmationBox();
        }

    }

    let history = useHistory();
    const [announcement_title, setAnnouncementTitle] = useState("");
    const [announcement_description, setAnnouncementDescription] = useState("");

    const [announcement_title_errors, setAnnouncementTitleErrors] = useState("");
    const [announcement_description_errors, setAnnouncementDescriptionErrors] = useState("");

    const [announcementList, setAnnouncementList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/announcement/get').then((response) => {
            setAnnouncementList(response.data)
        })
    }, [])



    const submitAnnouncement = () => {
        Axios.post("http://localhost:3001/announcement/create", {
            announcement_title: announcement_title,
            announcement_description: announcement_description,

        });

        <Link to="/mainhome" />
        setAnnouncementList([...announcementList, {
            announcement_title: announcement_title,
            announcement_description: announcement_description
        }]);
    };

    return (
        <div className="announcementgd-wrapper">
            <Header />
            <Navbar />
            <div className="announcementgd-holder">
                <div className="announcementgd-name">
                    <h1>announcement</h1>
                </div>
                <div className="announcementgd-content">
                    <div className="announcementgd-form">
                        <div className="announcementgd-title">
                            <h3>Image:</h3>
                            <input type="file" />
                            <h3>Title: </h3>
                            <input
                                type="text"
                                placeholder="Title"
                                name="announcement_title"
                                value={announcement_title}
                                id="announcement_title"
                                onChange={(e) => {
                                    setAnnouncementTitle(e.target.value)
                                }}
                            />
                        </div>
                        <span className="announcementgd-error">{announcement_title_errors}</span>
                        <div className="announcementgd-desc">
                            <h3>Description</h3>
                            <textarea
                                name="announcement_description"
                                value={announcement_description}
                                id="announcement_description"
                                placeholder="Description"
                                onChange={(e) => {
                                    setAnnouncementDescription(e.target.value)
                                }}
                            />/
                        </div>
                        <span className="announcementgd-error">{announcement_description_errors}</span>

                        {/* pop up */}
                        <div className="container">
                            <div className="popup-announcementgd-header"></div>
                            <div className="confirmation-text">
                                <span id="announcementgd-check"><FaCheck color='green' size='3em' /></span>
                                <p id="announcementgd-context">Announcementgd was successfully Published!</p>
                            </div>
                            <div className="button-container">
                                <button
                                    className="cancel-button"
                                    onClick={() => handleConfirmationBox()}>
                                    Ok
                                </button>
                            </div>
                            <div id="announcementgd-spacer">&nbsp;</div>
                        </div>
                        <div
                            className="confirm-bg">
                            onClick={() => handleConfirmationBox()}
                        </div>
                        <button
                            onClick={() => { isAnnouncementValid() }}
                            className="delete-button">
                            Publish
                        </button>

                    </div>
                    <div className="view-announcements">
                        <div className="view-announcement-cards">

                            {announcementList.map((value) => {
                                return (
                                    <div className="view-announcement1">
                                        <div className="view-announcement1-header">
                                            <h1>{value.announcement_title}</h1>
                                        </div>
                                        
                                        <div className="view-announcement1-body">
                                            {value.announcement_description}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AnnouncementGD
