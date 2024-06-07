import React, {useEffect} from 'react'
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";

function ABC({ component_name }) {
    useEffect(() => {
        // Focus on the element based on the component_name prop
        const element = document.getElementById(`${component_name}`);
        if (element) {
            element.focus();
        }
    }, [component_name]);

    return (
        <div>
            <main>
                <div id="home" tabIndex="-1">
                    <Home />
                </div>
                <div id="services" tabIndex="-1">
                    <Services />
                </div>
                <div id="contact" tabIndex="-1">
                    <Contact />
                </div>
            </main>
        </div>
    );
}

export default ABC
