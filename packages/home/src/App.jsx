import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import './app.css';

const App = () => {

    return (
        <div className="app">
            <h1>Container</h1>
            <div className="app-content">
                <section>
                    <span>...</span>
                </section>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
