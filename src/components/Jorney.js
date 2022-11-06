import React from "react";


export default function Jorney(props){
    return(
        
        <section className="jorney">
            <div className="image">
                <img src={`../images/${props.item.image}`}  />
            </div>

            <div className="detail">
                <p className="location">{props.item.location}</p>
                <p className="title">{props.item.title}</p>
                <p className="date"><span>{props.item.startDate}</span> - <span >{props.item.endDate}</span></p>
                <p className="discription">{props.item.description}</p>
            </div>
        </section>
        
    )
}