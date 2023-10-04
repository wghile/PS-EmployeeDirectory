import EmployeeList from "./EmployeeList"
import Header from "./Header"
import Searchbar from "./SearchBar"

import ava from '/images/ava.png'
import barbara from '/images/barbara.png'
import gregory from '/images/gregory.png'
import jacob from '/images/jacob.png'
import janine from '/images/janine.png'
import mrJ from '/images/mrJ.png'
import mrMorton from '/images/mrMorton.png'
import schemmenti from '/images/schemmenti.png'
import superintendent from '/images/superintendent.png'
import { useState } from 'react'

export default ({handleUserClick}) => {

    const employees = [
        {name: "Ava Coleman", role: 'Abbott Elementary Principal', img: ava},
        {name: "Barbara Howard", role: 'Kindergarten Teacher', img: barbara},
        {name: "Melissa Schemmenti", role: '2nd/3rd Grade Teacher', img: schemmenti},
        {name: "Mr. Johnson", role: 'Janitor/Substitute Teacher', img: mrJ},
        {name: "Janine Teagues", role: '2nd Grade Teacher', img: janine},
        {name: "Gregory Eddie", role: '1st Grade Teacher', img: gregory},
        {name: "Jacob Hill", role: '5th Grade Teacher', img: jacob},
        {name: "Mr. Morton", role: '8th Grade Teacher', img: mrMorton},
        {name: "Superintendent Collins", role: 'Superintendent', img: superintendent},
    ]
   
    employees.sort((a, b) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB){
            return -1
        }else if(nameA > nameB){
            return 1
        }else{
            return 0
        }
    })

    const [display, setDisplay] = useState(employees)

    return (
        <div className="Homepage">
            <Header title = 'Employee Directory'/>
            <Searchbar setDisplay = {setDisplay} employees = {employees}/>
            <EmployeeList employees = {display} handleUserClick = {handleUserClick}/>
        </div>
    )
}