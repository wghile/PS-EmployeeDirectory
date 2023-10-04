export default ({setDisplay, employees}) => {

    const handleChange = (evt) => {
        if(evt.target.value === ''){
            setDisplay(employees)
        }else{
            const filteredList = employees.filter((el) => el.name.toLowerCase().includes(evt.target.value.toLowerCase()))
            setDisplay(filteredList)
        }
    }

    return (
        <div className="SearchBar">
            <input onChange={handleChange}/>
        </div>
    )
}