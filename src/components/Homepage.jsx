import EmployeeList from "./EmployeeList"
import Header from "./Header"
import Searchbar from "./Searchbar"

export default ({handleUserClick}) => {

    return (
        <div className="Homepage">
            <Header title = 'Employee Directory'/>
            <Searchbar />
            <EmployeeList handleUserClick = {handleUserClick}/>
        </div>
    )
}