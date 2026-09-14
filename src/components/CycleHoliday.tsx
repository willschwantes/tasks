import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        "❤️", // Valentine's Day
        "🎄", // Christmas
        "🥧", // Pi Day
        "🎃", // Halloween
        "🛡️"  // Leif Erikson Day
    ]

    const [currentHoliday, cycleHoliday] = useState<string>(holidays[0]);

    function cycleAlphabet(): void {
        cycleHoliday(
            currentHoliday === "🎄"
                ? "🎃"
                : currentHoliday === "🎃"
                    ? "🛡️"
                    : currentHoliday === "🛡️"
                        ? "🥧"
                        : currentHoliday === "🥧"
                            ? "❤️"
                            : currentHoliday === "❤️"
                                ? "🎄"
                                : "🎄"
        )
    }
    
    function cycleYear(): void {
        cycleHoliday(
            //❤️🥧🛡️🎃🎄
            currentHoliday === "❤️"
                ? "🥧"
                : currentHoliday === "🥧"
                    ? "🛡️"
                    : currentHoliday === "🛡️"
                        ? "🎃"
                        : currentHoliday === "🎃"
                            ? "🎄"
                            : currentHoliday === "🎄"
                                ? "❤️"
                                : "❤️"
        )
    }
    
    return (
    <div>
        <Button onClick={cycleAlphabet}>Advance By Alphabet</Button>
        <Button onClick={cycleYear}>Advance By Year</Button>
        <span>Holiday: {currentHoliday}</span>
    </div>
    );
}
