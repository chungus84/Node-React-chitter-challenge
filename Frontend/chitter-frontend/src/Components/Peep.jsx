const Peep = ({ peepData: { message } }) => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Peep
