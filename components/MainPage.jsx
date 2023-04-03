import React from "react";

export default function MainPage(props) {
    console.log(props)
    return (
        <div className="main-page">
            <img src={`${props.items.imageUrl}`} className="page-image" />
            <div className="main-page1">
                <div className="main-page2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="location-country">{props.items.location}</span>
                    <span><a href={`${props.items.googleMapsUrl}`} target="_blank">View on Google Maps</a></span>
                </div>
                <div className="main-page3">
                    <h1 className="title">{props.items.title}</h1>
                    <h3 className="date">{props.items.startDate} - {props.items.endDate}</h3>
                    <p className="description">{props.items.description}</p>
                </div>
            </div> 
        </div>
    )
}