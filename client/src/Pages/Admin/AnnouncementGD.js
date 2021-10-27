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


function AnnouncementGD() {

    // const [delTask, setDelTask] = useState(false)

    // const handleConfirmationBox = () => {
    //     if (!delTask) {
    //         document.querySelector(".confirm-bg").style.display = "flex"
    //         document.querySelector(".container").style.display = "flex"
    //         setDelTask(true)
    //         submitAnnouncement()
    //     } else {
    //         document.querySelector(".confirm-bg").style.display = "none"
    //         document.querySelector(".container").style.display = "none"
    //         setDelTask(false)
    //         history.push('/mainhome');
    //     }
    // }

    // const isAnnouncementgdValid = () => {
    //     if (!announcementgd_title || announcementgd_title.trim() === "") {
    //         setAnnouncementgdTitleErrors("*This field cannot be empty!");
    //     } else if (!announcementgd_description || announcementgd_description.trim() === "") {
    //         setAnnouncementgdDescriptionErrors("*This field cannot be empty!");
    //     } else {
    //         setAnnouncementgdTitleErrors("");
    //         setAnnouncementgdDescriptionErrors("")
    //         handleConfirmationBox();
    //     }

    // }

    // let history = useHistory();
    // const [announcementgd_title, setAnnouncementgdTitle] = useState("");
    // const [announcementgd_description, setAnnouncementgdDescription] = useState("");
    // const [announcementgd_title_errors, setAnnouncementgdTitleErrors] = useState("");
    // const [announcementgd_description_errors, setAnnouncementgdDescriptionErrors] = useState("");
    // const [announcementList, setAnnouncementList] = useState([]);


    // useEffect(() => {
    //     Axios.get('http://localhost:3001/announcement/get').then((response) => {
    //         setAnnouncementList(response.data)
    //     })
    // }, [])



    // const submitAnnouncement = () => {
    //     Axios.post("http://localhost:3001/announcement/create", {
    //         announcementgd_title: announcementgd_title,
    //         announcementgd_description: announcementgd_description,

    //     });

    //     <Link to="/mainhome" />
    //     setAnnouncementList([...announcementList, {
    //         announcementgd_title: announcementgd_title,
    //         announcementgd_description: announcementgd_description
    //     }]);
    // };

    return (
        <div className="announcementgd-wrapper">
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
                                name="announcementgd_title"
                                // value={announcementgd_title}
                                id="announcementgd_title"
                            // onChange={(e) => {
                            //     setAnnouncementgdTitle(e.target.value)
                            // }}
                            />
                        </div>
                        {/* <span className="announcementgd-error">{announcementgd_title_errors}</span> */}
                        <div className="announcementgd-desc">
                            <h3>Description</h3>
                            <textarea
                                name="announcementgd_description"
                            // value={announcementgd_description}
                            id="announcementgd_description"
                            // placeholder="Description"
                            // onChange={(e) => {
                            //     setAnnouncementgdDescription(e.target.value)
                            // }}
                            />/
                        </div>
                        {/* <span className="announcementgd-error">{announcementgd_description_errors}</span> */}

                        {/* pop up */}
                        {/* <div className="container">
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
                        </div> */}
                        <button
                            className="delete-button">
                            Publish
                        </button>

                    </div>
                    <div className="view-announcements">
                        <div className="view-announcement-cards">
                            <div className="view-announcement1">
                                <div className="view-announcement1-header">
                                    <h1>Happy Father's Day!</h1>
                                </div>
                                <div className="view-announcement1-body">
                                    <img src={father} />
                                    <br />
                                    To our number one supporters who come in different names –
                                    we may call them tatay, papa, dad, daddy and even our lolos,
                                    titos, and moms who are also dads – Happy Father's Day!
                                    The world is a better place because you are all in it. 💙
                                </div>
                            </div>
                            <div className="view-announcement2">
                                <div className="view-announcement2-header">
                                    <h1>Maligayang Araw ng Kalayaan!</h1>
                                </div>
                                <div className="view-announcement2-body">
                                    <img src={kalayaan} />
                                    <br />
                                    Maligayang Araw ng Kalayaan!
                                </div>
                            </div>
                            <div className="view-announcement3">
                                <div className="view-announcement3-header">
                                    <h1>NU OK: Online kamustahan</h1>
                                </div>
                                <div className="view-announcement3-body">
                                    <img src={nuok} />
                                    <br />
                                    This coming week we will have our Online Kumustahan sessions where we can openly share our thoughts and concerns during our classes!
                                    Let us use this time to reflect on the things we think we need to address, so that we can have a better learning experience during the rest of the term.
                                </div>
                            </div>
                            <div className="view-announcement2">
                                <div className="view-announcement4-header">
                                    <h1>Happy Pride Month!</h1>
                                </div>
                                <div className="view-announcement4-body">
                                    <img src={pride} />
                                    <br />
                                    Hope will never be silent again. Together we stand! Happy Pride, mga mahal! 🌈✨
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AnnouncementGD
