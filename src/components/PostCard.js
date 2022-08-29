function PostCard(props) {

    return (
        <div>
            <p> <span style = {{color: '#9a0414'}}> Date: </span><span> {props.date}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Origin: </span><span>{props.origin}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Destination: </span><span>{props.destination}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Truck Type: </span><span>{props.truckType}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Boxing: </span><span>{ props.boxing ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Unboxing: </span><span>{props.unboxing ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Material: </span><span>{props.material ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Floor: </span><span>{props.floors}</span> </p>
        </div>
    )
}
export default PostCard;