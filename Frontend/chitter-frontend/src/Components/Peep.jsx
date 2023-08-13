const Peep = ({ peepData: { message } }) => {
    return (
        <div className="card my-3 peep-card" data-testid="peeping">
            <div className="card-body">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Peep
