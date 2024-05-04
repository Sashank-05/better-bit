import React from "react";
import MainContentCSS from "./MainContent.module.css"

import Branches from "./branches/Branches";
import Navbar from "../navbar/Navbar.jsx";

export default function MainContent() {
    return (
        <div>
            <br></br>
            <Navbar/>
            <div className={MainContentCSS.mainContent}>
                <Branches/>
            </div>
        </div>
    )
}
