import React from "react";

export default function Card(props) {
    return (
        <div className="card--container">
            <img src={props.imageUrl}/>
            <br/>
            <h4>{props.location}</h4>
            <h1>{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <br/>
            <h4>{props.description}</h4>
        </div>
    )
}