export default ({img, name, role, email, handleUserClick}) => {

    return (
        <div onClick={() => {handleUserClick({name: name, role: role, img: img, email: email})}} className="ELI">
            <img src={img}/>
            <ul>
                <li>
                    {name}    {/*reading the data provided by EL */}
                </li>
                <li>
                    {role}
                </li>
            </ul>
        </div>
    )
}