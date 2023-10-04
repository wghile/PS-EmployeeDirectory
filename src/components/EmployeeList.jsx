import EmployeeListItem from "./EmployeeListItem"

export default ({handleUserClick, employees}) => {

    return (
        <div className="EL">
            {employees.map((item) => {
                return <EmployeeListItem handleUserClick = {handleUserClick} name = {item.name} role = {item.role} img = {item.img}/>
            })}
        </div>
    )
}