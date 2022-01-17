import "./pets.css";
import Filter from "../Filter/filter";
import Cards from "../Cards/cards";
import { useEffect, useState } from "react";
import axios from "axios";

const Pets = () => {

    const [cats, setcats] = useState([]);
    const [filteredCats,setFilteredCats]=useState([])
    const [filters, setFilters] = useState({
        gender:"any"
    })

    // console.log(filters);

    const fetchCats = async () => {
        const response = await axios.get("http://localhost:4000/cats");
        setcats(response.data);
        setFilteredCats(response.data);
    }
    // initial render of component
    useEffect(() => {
        fetchCats()
    }, [])
    
    useEffect(() => {
        let catsFiltered = [...cats];
        if (filters.gender !== "any") {
            catsFiltered = catsFiltered.filter(cat => cat.gender === filters.gender)
        }
        setFilteredCats(catsFiltered)
    }, [filters])

    // console.log(cats);

    return (
        <div className="container">
    
            <div className="app-container">
                <Filter filters={filters} setFilters={setFilters}/>
                
                <Cards cats={filteredCats} />
            </div>
        </div>
    );
}

export default Pets;