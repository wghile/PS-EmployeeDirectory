import EmployeeListItem from "./EmployeeListItem"
import { useState } from "react"
import ava from '../images/ava.png'
import barbara from '../images/barbara.png'
import gregory from '../images/gregory.png'
import jacob from '../images/jacob.png'
import janine from '../images/janine.png'
import mrJ from '../images/mrJ.png'
import schemmenti from '../images/schemmenti.png'
import photo from '../images/photoplaceholder.png'

export default (props) => {

    const [officeNum, setOfficeNum] = useState('XXX-YYY-ZZZZ')
    const [mobileNum, setMobileNum] = useState('XXX-YYY-ZZZZ')
    const [SMS, setSMS] = useState('XXX-YYY-ZZZZ')
    const [email, setEmail] = useState('abcdef@abbott.edu')

    const [pic, setPic] = useState(photo)
    const [name, setName] = useState('Name')
    const [role, setRole] = useState('Job Title')

    return (
        <div className="EI">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <EmployeeListItem img = {pic} name = {name} role = {role}/> 
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