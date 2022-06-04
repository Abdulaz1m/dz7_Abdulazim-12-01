import { useNavigate } from "react-router-dom";



function Description () {

    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <p>Lorem ipsum dedfefef</p>
        </>
    )
}

export default Description;