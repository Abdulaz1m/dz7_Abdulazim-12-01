import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


function AboutPage () {

    const navigate = useNavigate()

    console.log(navigate);

    return (
        <>
            <Header/>
            <button onClick={() => navigate(-1)}>back</button>
            <h2>AboutPage</h2>
            <NavLink to="/description">Description</NavLink>
            <Footer/>
        </>
    )

}

export default AboutPage;