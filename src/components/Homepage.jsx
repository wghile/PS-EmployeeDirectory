import EmployeeList from "./EmployeeList"
import Header from "./Header"
import Searchbar from "./Searchbar"

export default () => {

    return (
        <div className="Homepage">
            <Header title = 'Employee Directory'/>
            <Searchbar />
            <EmployeeList />
        </div>
    )
}