function PostCard(props) {
    console.log(props.unboxing, props.boxing, props.material, props.floors)
    return (
        <>
            <p><b>Date:</b> {props.date}</p>
            <p><b>Origin: </b>{props.origin}</p>
            <p><b>Destination: </b>{props.destination}</p>
            <p><b>Truck Type: </b>{props.truckType}</p>
            <p><b>Boxing: </b>{ props.boxing ? "Yes": "No"}</p>
            <p><b>Unboxing: </b>{props.unboxing ? "Yes": "No"}</p>
            <p><b>Material: </b>{props.material ? "Yes": "No"}</p>
            <p><b>Floors: </b>{props.floors}</p>
        </>
    )
}
export default PostCard;