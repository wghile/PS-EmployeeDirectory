import Header from "./Header"
import EmployeeInfo from "./EmployeeInfo"

export default ({employee}) => {

    return (
        <div className="EP">
            <Header title = 'Contact'/>
            <EmployeeInfo employee = {employee}/>
        </div>
    )
}