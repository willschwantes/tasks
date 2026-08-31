import React from "react";
import "./App.css";
import pups from "./assets/images/pups.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App" style={{ padding: "75px 0px 75px 0px" }}>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                <h1 style={{ backgroundColor: "#f00" }}>Hello World!</h1>
                <br></br>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <p>This is Will Schwantes&apos;s fork!</p>
            </p>
            <img
                src={pups}
                alt="My dogs at the beach. Leo is lunging at the camera while Remi and Lily are sitting down."
                style={{ width: "50%", padding: "1em" }}
            />
            <p>
                These are my dogs, (from left to right):
                <ul>
                    <li>Remi, an English Golden Retriever</li>
                    <li>Leo, a Bernese Mountain Dog</li>
                    <li>Lily, a Leonberger</li>
                </ul>
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
                style={{ marginBottom: "25px" }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Remi is 7 years old. You will never see her tail
                        immobile, she will always smile, and she will bark at
                        you incessantly if you stop petting her.
                        <div
                            style={{
                                marginTop: "15px",
                                margin: "auto",
                                width: "70px",
                                height: "35px",
                                backgroundColor: "#f00",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Leo is 9 years old. He&apos;s a bit crotchety, and does{" "}
                        <em>NOT</em> like when you touch his feet.
                        <div
                            style={{
                                marginTop: "15px",
                                margin: "auto",
                                width: "70px",
                                height: "35px",
                                backgroundColor: "#f00",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Lily is 5 years old. Nickname, &ldquo;Rip Rip.&rdquo;
                        This is because that&apos;s how she sounds when she
                        barks.
                        <div
                            style={{
                                marginTop: "15px",
                                margin: "auto",
                                width: "70px",
                                height: "35px",
                                backgroundColor: "#f00",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
