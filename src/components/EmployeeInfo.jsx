import EmployeeListItem from "./EmployeeListItem"
import { useState } from "react"

export default ({employee}) => {

    const [officeNum, setOfficeNum] = useState('XXX-YYY-ZZZZ')
    const [mobileNum, setMobileNum] = useState('XXX-YYY-ZZZZ')
    const [SMS, setSMS] = useState('XXX-YYY-ZZZZ')
    const [email, setEmail] = useState('abcdef@abbott.edu')

    // const [pic, setPic] = useState(photo)
    // const [name, setName] = useState('Name')
    // const [role, setRole] = useState('Job Title')

    return (
        <div className="EI">
            <table>
                <tbody>
                    <tr>
                        <td>
                                <img src = {employee.img}/>
                                <text>
                                  <strong>{employee.name}</strong>
                                  <br />
                                    {employee.role}  
                                </text>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Call Office
                            <div className="employee">
                                {officeNum}  
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Call Mobile  
                            <div className="employee">
                                {mobileNum}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SMS
                            <div className="employee">
                                {SMS}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                            <div className="employee">
                                {email}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}