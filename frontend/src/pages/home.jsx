import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/navBar";
import "./styles/page.css";


const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{`Home`}</title>
            </Helmet>
            <NavBar active="home" />
            <div className="page-content">
                <div className="content-wrapper">
                    <div className="projects-container">
                        To view the project, please select a nav item from the navbar
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;