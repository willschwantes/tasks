import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, changeType] = useState<QuestionType>("short_answer_question");

    function cycleQuestionType(): void {
        changeType(
            questionType === "multiple_choice_question"
                ? "short_answer_question" : "multiple_choice_question"
        )
    }


    return (
    <div>
        <Button onClick={cycleQuestionType}>Change Type</Button>
        {questionType === "multiple_choice_question" ? (
            <span>Multiple Choice</span>
        ) : (
            <span>Short Answer</span>
        )}
    </div>
);
}
