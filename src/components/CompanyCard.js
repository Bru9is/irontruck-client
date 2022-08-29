function CompanyCard(props) {
    return (
        <>
            <p><b>Name:</b> {props.date}</p>
            <p><b>E-mail: </b>{props.origin}</p>
            <p><b>Phone: </b>{props.destination}</p>
            <p><b>Truck type: </b>{props.truckType}</p>
            <p><b>Boxing: </b>{props.boxing}</p>
            <p><b>Unboxing: </b>{props.unboxing}</p>
            <p><b>Material: </b>{props.material}</p>
        </>
    )
}
export default CompanyCard;