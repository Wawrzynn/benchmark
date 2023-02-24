import React from 'react';
import "../styles/home.css";

export default function Home() {
    return (
        <div className='home'>
            <h1>What is CPU Benchmark?</h1>
            <p>CPU benchmark is a project created specifically for OESK laboratories. It is a benchmark created specifically to measure the performance of CPU (central processing unit) also known as the processor. Its performance is evaluated by conducting several mathematical operations on the processor so that its performance can be evaluated. It also provides data from the past that is presented on the server side and can be displayed in form of plot. This can provide essential data to analyze processor performance and help in optimizing its performance and data usage.
            </p>
            <h2>If you want to use the benchmark simply click the "Make a measure" button and begin the test. In order to see data analysis click the "Show plot" button.</h2>
       </div>
    )
}