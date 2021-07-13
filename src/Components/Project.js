import React from 'react';
import "../App.css";
// import form from "../images/form.jpg";
// import Ecommerce1 from "../images/ecommerce1.jpg"
import temp1 from "../images/temp1.jpg";
import temp2 from "../images/temp2.png";


function Project() {
    return (
        <div className="projectdiv">
            <section id="project">
                <p className="projectpara">Projects</p>
                <div className="row">
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp1} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Website</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp2} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Mobile Web</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp1} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Ecommerce website</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp2} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Flutter Web</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp1} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Library Web</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                    <div className="card-container" style={{ backgroundImage: "linear-gradient(to right, #A770EF 0%, #CF8BF3  51%, #A770EF  100%)" }}>
                        <div className="card-title">
                            <h3>Web Development</h3>
                        </div>
                        <div className="image-container">
                            <img src={temp2} alt="development" />
                        </div>

                        <div className="card-body">
                            <h4>Tic Tac Toe</h4>
                        </div>
                        <button className="btn">See this</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;


