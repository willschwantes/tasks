import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setActivity] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    
    function startQuiz(): void {
        setActivity(true);
        setAttempts(attempts - 1);
    }

    return (
    <div>
        <Button onClick={startQuiz} disabled={inProgress || attempts <= 0}>Start Quiz</Button>
        <Button onClick={() => {setActivity(false)}} disabled={!inProgress}>Stop Quiz</Button>
        <Button onClick={() => {setAttempts(attempts + 1)}} disabled={inProgress}>Mulligan</Button>
        <br></br><span>Attempts: {attempts}</span>
    </div>
);
}
