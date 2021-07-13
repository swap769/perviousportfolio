import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "React Developer 💻",
                    "MERN Stack Developer 💻",
                    "Full Stack Developer 💻",
                    "Open Source Contributor 💻",
                    "Developer 💻",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;