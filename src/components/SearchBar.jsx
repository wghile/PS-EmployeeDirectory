export default ({setDisplay, employees}) => {

    const handleChange = (evt) => {
        console.log(evt.target.value)
        if(evt.target.value === ''){
            console.log(employees)
            setDisplay(employees)
        }else{
            const filteredList = employees.filter((el) => el.name.includes(evt.target.value))
            setDisplay(filteredList)
        }
    }

    return (
        <div className="SearchBar">
            <input onChange={handleChange}/>
        </div>
    )
}