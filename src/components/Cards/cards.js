import Card from "../Card/card"
import "./cards.css";

const Cards = ({cats}) => {
    return (
        <div className="pet=cards-container">
            {cats.map((cat) => {
                return <Card
                    key={cat.id}
                    name={cat.name}
                    phone={cat.phone}
                    email={cat.email}
                    image={cat.image}
                    favorite={cat.favoured}
                />
            })}
        </div>
    )
}

export default Cards;