import { useState } from "react"

export default ({employee}) => {

    const [officeNum, setOfficeNum] = useState('XXX-YYY-ZZZZ')
    const [mobileNum, setMobileNum] = useState('XXX-YYY-ZZZZ')

    return (
        <div className="EI">
            <table>
                <tbody>
                    <tr>
                        <td>
                                <img src = {employee.img}/>
                                <p>
                                  <strong>{employee.name}</strong>
                                  <br />
                                    {employee.role}  
                                </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Office
                            <div className="employee">
                                {officeNum}  
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mobile  
                            <div className="employee">
                                {mobileNum}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                            <div className="employee">
                                {employee.email}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}