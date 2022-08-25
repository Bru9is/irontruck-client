function PostCard(props) {
    return (
        <>
            <p><b>"Date":</b> {props.date}</p>
            "Origin": {props.origin}
            "Destination": {props.destination}
            "Truck Type": {props.truckType}
            "Boxing": {props.boxing}
            "Unboxing": {props.unboxing}
            "Material": {props.material}
            "Floors": {props.floors}
        </>
    )
}
export default PostCard;