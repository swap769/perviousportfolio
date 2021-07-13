import React from 'react';
import "../App.css";
import { Card } from "react-bootstrap";
import React1 from "../images/react1.png";
import Mongo from "../images/mongo.png";
import Css from "../images/css.png";
import gcloud from "../images/gcloud.png";
import Html from "../images/html.png";
import Js from "../images/js.png";
import Node from "../images/node.png";
import Sql from "../images/sql.png";
import exp1 from "../images/exp1.png";
import Firebase from "../images/firebase.png";


function List() {
    return (
        <div className="listdiv">
            <section id="list">
                <p className="list-para">Technology i'm Work on </p>
                <div className="row">
                    <Card className="card" style={{ width: '10rem', height: "9rem" }}>
                        <img src={React1} className="imgcard" alt="react" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Mongo} className="imgcard" alt="mongo" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Css} className="imgcard" alt="css" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Html} className="imgcard" alt="html" />
                    </Card>
                    <Card style={{ width: '10rem' }}>
                        <img src={gcloud} className="imgcard" alt="gcp" height="100px" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Js} className="imgcard" alt="js" />
                    </Card>
                    <Card className="card" style={{ width: '10rem', height: "9rem" }}>
                        <img src={Node} className="imgcard" alt="node" height="100px" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Sql} className="imgcard" alt="sql" height="100px" />
                    </Card>
                    <Card className="card" style={{ width: '10rem', height: "9rem" }}>
                        <img src={exp1} className="imgcard" alt="express" />
                    </Card>
                    <Card className="card" style={{ width: '10rem' }}>
                        <img src={Firebase} className="imgcard" alt="firebase" />
                    </Card>
                </div>
                <p className="p-container">I am extremely selective about the software, platform, database,
                    and framework choices we make for our products, and for our client systems.Our Key solutions include domain-specific solutions, consulting, design, development, and support.</p>
            </section>
        </div>
    )
}
export default List;