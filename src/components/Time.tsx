import { useState } from "react";
import { TimeType } from "../context/types"

export default function Time({timeNumber, message}: TimeType) {
    
    const [time, setTime] = useState(0);

    const startTimer = () => {
        const intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        }, 1000); // Actualiza cada segundo

        return intervalId;
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const [intervalId, setIntervalId] = useState<number | null>(null); 

    return (
        <div>
            <div>Time: {formatTime(time)}</div>
            {!intervalId ? (
                <button onClick={() => setIntervalId(startTimer())}>Start</button>
            ) : (
                <button onClick={() => clearInterval(intervalId)}>Stop</button>
            )}
        </div>
    )
}
