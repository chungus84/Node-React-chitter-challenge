
import NewPeepForm from "./Components/NewPeepForm.jsx";
import PeepFeed from "./Components/PeepFeed.jsx";

const PeepPage = ({ peepFunc, data }) => {

    // console.log(data);

    const { peeps, error } = data

    // console.log(peeps);


    return (
        <div className="container-fluid d-flex flex-column justify-content-center">
            <NewPeepForm addPeep={peepFunc} />
            <PeepFeed peeps={{ peeps, error }} />

        </div>
    )
}

export default PeepPage
