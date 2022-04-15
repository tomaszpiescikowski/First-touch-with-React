import React from "react";

export default function Main() {
    return (
        <div className="main">
            <h1 className="main--text">Fun facts about React</h1>
            <ul className="main--list">
                <li className="main--list--item">Was first released in 2013</li>
                <li className="main--list--item">Was originally created by Jordan Walke</li>
                <li className="main--list--item">Has well over 100k stars on GitHub</li>
                <li className="main--list--item">Is maintained by Facebook</li>
                <li className="main--list--item">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}