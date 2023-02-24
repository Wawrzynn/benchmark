import React from 'react';
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/measurement.css";


export default function MeasurementPage() {
    let [benchmarkValue, setBenchmarkValue] = React.useState("");

    function benchmarkEvaluation() {
        let outcomeTextElement = document.getElementById("outcomeText")
        let outcomeInfoElement = document.getElementById("outcomeInfo")
        let outcome = Math.trunc(calculateBenchmarkValue());
        outcomeTextElement.innerText = `Your benchmark score is: ${outcome}`;
        outcomeInfoElement.innerText = `To run benchmark once more simply click the button once again.`;
        console.log(outcome);
        return outcome;
    }
    
    function calculateBenchmarkValue(){
        benchmarkValue = 0;
        let startTime = performance.now();
        executeBenchmark();
        let endTime = performance.now();
        let elapsedTime = endTime - startTime;
        return elapsedTime;
    
    }
    
    function executeBenchmark(){
        let i = 0;
        while (i < 1000000000) {
            i++
        }
    }

   const addData = async function() {
    // if (benchmarkValue !== 0) {
        await addDoc(collection(db,'benchmark'), {
            benchmarkValue: benchmarkEvaluation(),
            date: Date.now(),
        });
        setBenchmarkValue(0);
    // }
   }

    return (
        <div className='measurementPage'>
            <button className='testBtn'  onClick={() => {
                  benchmarkEvaluation();
                  addData();
                }}>Begin test</button>
            <p id='outcomeText'></p>
            <p id='outcomeInfo'></p>
        </div>
    )
}