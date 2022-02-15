import React from 'react';
import './App.css';
import Year from "./Components/Year/Year";

const FiveYears: React.FC<{ years: Array<number> }> = (years) =>
    <div style={{
        marginTop: '0.5vh',
        backgroundColor: 'transparent'
    }}>
        <div style={{
            position: "absolute",
            color: '#b4b4b4',
            fontSize: '7.2vw',
            zIndex: 0,
            textAlign: "center",
            width: '100vw',
        }}>{years.years[4]}</div>
        <Year year={years.years[0]}/>
        <Year year={years.years[1]}/>
        <Year year={years.years[2]}/>
        <Year year={years.years[3]}/>
        <Year year={years.years[4]}/>
    </div>

function App() {
    const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div className="App">
            <div className="App-header">
                <FiveYears years={[1, 2, 3, 4, 5]}/>
                <FiveYears years={[6, 7, 8, 9, 10]}/>
                <FiveYears years={[11, 12, 13, 14, 15]}/>
                <FiveYears years={[16, 17, 18, 19, 20]}/>
                <FiveYears years={[21, 22, 23, 24, 25]}/>
                <FiveYears years={[26, 27, 28, 29, 30]}/>
                <FiveYears years={[31, 32, 33, 34, 35]}/>
                <FiveYears years={[36, 37, 38, 39, 40]}/>
                <FiveYears years={[41, 42, 43, 44, 45]}/>
                <FiveYears years={[46, 47, 48, 49, 50]}/>
                <FiveYears years={[51, 52, 53, 54, 55]}/>
                <FiveYears years={[56, 57, 58, 59, 60]}/>
                <FiveYears years={[61, 62, 63, 64, 65]}/>
                <FiveYears years={[66, 67, 68, 69, 70]}/>
                <FiveYears years={[71, 72, 73, 74, 75]}/>
                <FiveYears years={[76, 77, 78, 79, 80]}/>
                <FiveYears years={[81, 82, 83, 84, 85]}/>
                <FiveYears years={[86, 87, 88, 89, 90]}/>
                <FiveYears years={[91, 92, 93, 94, 95]}/>
                <FiveYears years={[96, 97, 98, 99, 100]}/>
            </div>
        </div>
    );
}

export default App;
