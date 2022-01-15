import { useState } from "react";
import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";
import "./card.css";

const Card = ({ name, phone, email, image, favorite }) => {

    const [isFavorite, setIsFavorite] = useState(favorite);
    
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return <div data-testid="cardComponent" className="card">
        <div className="card-header">
            <img src={image.url} alt={image.alt} className="card-img"/>
            <button className="heart" onClick={toggleFavorite}>
                {isFavorite? <img src={heartFilled} alt="filled heart"/> :<img src={heartOutlined} alt="outlined heart"/> }
            </button>
        </div>
        <div className="card-content">
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div >
}

export default Card;