import Header from "./Header"
import EmployeeInfo from "./EmployeeInfo"

export default ({employee}) => {

    return (
        <div className="EP">
            <Header title = 'Employee'/>
            <EmployeeInfo employee = {employee}/>
        </div>
    )
}