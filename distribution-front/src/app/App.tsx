import React from 'react';
import Routing from "../page";
import Header from "../widget/Header/Header";
import Footer from "../widget/Footer/Footer";
import {withProviders} from "./providers";
import "./styles/index.css"

function App() {
    return (
        <>
            <Header/>
            <div className={"routingContainer"}>
                <Routing/>
            </div>
            <Footer/>
        </>
    );
}

export default withProviders(App);
