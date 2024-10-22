import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        } // Check if interval is not null
       
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => stopTimer()
    }, [])

    return (
        <div className="mt-8 ml-4">
            
            <h1 className="font-bold txt-lg">useRef in typescript</h1>
            <p>Current timer: {timer}</p>
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}