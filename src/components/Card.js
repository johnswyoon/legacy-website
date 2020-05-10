import React from "react";
import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        <div className="d-inline-block home-card" onClick={(e) => props.click(props.item)}>
            <img className="home-card-image" src={props.item.link} alt={props.item.link} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;