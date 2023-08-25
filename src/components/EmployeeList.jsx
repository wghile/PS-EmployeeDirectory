import EmployeeListItem from "./EmployeeListItem"
import ava from '../images/ava.png'
import barbara from '../images/barbara.png'
import gregory from '../images/gregory.png'
import jacob from '../images/jacob.png'
import janine from '../images/janine.png'
import mrJ from '../images/mrJ.png'
import schemmenti from '../images/schemmenti.png'

export default (props) => {

    return (
        <div className="EL">
            <EmployeeListItem img = {ava} name = 'Ava Coleman' role = 'Principal of Abbott Elementary' /> {/*here EL provides the data by writing 'name =' to the ELI component*/}
            <EmployeeListItem img = {barbara} name = 'Barbara Howard' role = 'Kindergarten Teacher'/>
            <EmployeeListItem img = {schemmenti} name = 'Melissa Schemmenti' role = '2nd/3rd Grade Teacher'/>
            <EmployeeListItem img = {mrJ} name = 'Mr. Johnson' role = 'Janitor/Substitute Teacher'/>
            <EmployeeListItem img = {janine} name = 'Janine Teagues' role = '2nd Grade Teacher'/>
            <EmployeeListItem img = {gregory} name = 'Gregory Eddie' role = '1st Grade Teacher'/>
            <EmployeeListItem img = {jacob} name = 'Jacob Hill' role = '5th Grade Teacher'/>
        </div>
    )
}