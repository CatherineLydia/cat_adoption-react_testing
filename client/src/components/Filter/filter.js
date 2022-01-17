const Filter = ({filters,setFilters}) => <div className="pet-filter-container">
    <div className="filter-container">
        <label htmlFor="favourite">Favourite</label>
        <select name="favourite" id="favourite" className="form-selct" onChange={(e) => {
            setFilters({
                ...filters,
                favoured: e.target.value ,
            })
        }}>
            <option value="any">Any</option>
            <option value="favourite">Favourite</option>
            <option value="not favourite">Not Favourite</option>
        </select>
    </div>
    <div className="filter-container">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" className="form-selct" onChange={(e) => {
            setFilters({
                ...filters,
                gender: e.target.value,
            })
            // console.log(e.target.value)
        }}>
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
</div>;

export default Filter;