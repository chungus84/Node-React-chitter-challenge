const NewPeepForm = () => {
    return (
        <form action="/" className="form-group" method="post">
            <label htmlFor="peepTextArea">What is on your mind?</label>
            <textarea className="form-control" id="peepTextArea" rows="3" name="peepText"></textarea>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    )
}

export default NewPeepForm
