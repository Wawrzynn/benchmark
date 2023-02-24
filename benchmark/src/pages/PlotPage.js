import React from 'react';
import { db } from "../firebase/firebase";
import { Chart } from "react-google-charts";
import {
    collection,
    query,
    onSnapshot,
    doc
  } from "firebase/firestore";
import {Line} from 'react-chartjs-2';
import "../styles/plot.css";


 function refreshPage() {
    window.location.reload(false);
  }

export default function PlotPage() {

    const [benchmarkValues, setBenchmarkValues] = React.useState([]);
    let datesArray = [];
    let valuesArray = [];

    //read data
    React.useEffect(() => {
        const q = query(collection(db, "benchmark"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let benchmarkArray = [];
          querySnapshot.forEach((doc) => {
            benchmarkArray.push({ ...doc.data(), id: doc.id });
          });
          setBenchmarkValues(benchmarkArray);
          benchmarkArray.map((benchmark) => {
            datesArray.push(benchmark.date)
          })
          benchmarkArray.map((benchmark) => {
            valuesArray.push(benchmark.benchmarkValue)
          })
        });
        return () => unsub();
      }, []);

      const data = [
        ["ID", "Benchmark Value"],
        ["1", 9200],
        ["2", 9700],
        ["3", 10300],
        ["4", 9800],
        ["5", 9400],
        ["6", 9700],
        ["7", 9800],
        ["8", 9800],
        ["9", 9200],
        ["10", 9700],
        ["11", 10300],
        ["12", 9800],
      ];
      
      const options = {
        title: "CPU benchmark",
        curveType: "function",
        legend: { position: "bottom" },
      };

    return (
        <div className='plotPage'>
                <button className='testBtn' onClick={refreshPage}>Generate Plot</button>
       <Chart
          chartType="LineChart"
          width="600px"
          height="400px"
          data={data}
          options={options}
        />

        </div>
    )
}