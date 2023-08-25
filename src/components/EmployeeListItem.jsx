export default (props) => {

    return (
        <div className="ELI">
            <img src={props.img}/>
            <ul>
                <li>
                    {props.name}    {/*reading the data provided by EL */}
                </li>
                <li>
                    {props.role}
                </li>
            </ul>
        </div>
    )
}