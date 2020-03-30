import React from 'react'
import { } from "module";
import './Contact.css';

const isOnline = true

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/36.jpg" alt="" />
            <div>
                <h4 className="name">John Doe</h4>
                <div className="status">
                    <p className="status-text"><span className="status-online"></span>{isOnline ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
