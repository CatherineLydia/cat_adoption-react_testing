import "./pets.css";
import Filter from "../Filter/filter";
import Cards from "../Cards/cards";
import { useEffect, useState } from "react";
import axios from "axios";

const Pets = () => {

    const [cats, setcats] = useState([])
    
    const fetchCats = async () => {
        const response = await axios.get("http://localhost:4000/cats");
        setcats(response.data);
    }
    // initial render of component
    useEffect(() => {
        fetchCats()
    }, [])
    
    console.log(cats);

    return (
        <div className="container">
    
            <div className="app-container">
                <Filter />
                
                <Cards cats={cats} />
            </div>
        </div>
    );
}

export default Pets;