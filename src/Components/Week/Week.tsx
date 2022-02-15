import React, {useState} from 'react';
import './Week.css';

const Week: React.FC<{ year: number, week: number }> = ({year, week}) => {
    const [selected, setSelected] = useState(localStorage.getItem(`_${year}_${week}`) !== null);

    const containerClass = () => selected ? "WeekContainerFilled" : "WeekContainerEmpty"

    const markWeek = (year: number, week: number) => {
        for (let i = 1; i < 100; i++) {
            for (let j = 1; j <= 52; j++) {
                if(i<year){
                    localStorage.setItem(`_${i}_${j}`, '1');
                }
                else if(i<=year && j<week){
                    localStorage.setItem(`_${i}_${j}`, '1');
                }else if(i<=year && j<=week && !selected){
                    localStorage.setItem(`_${i}_${j}`, '1');
                }
                else{
                    localStorage.removeItem(`_${i}_${j}`);
                }
            }
        }
        window.location.reload();
    }

    const onPressMe = () => {
        //TODO Logic
        markWeek(year, week);
        setSelected(!selected);
    }

    return (
        <div className={containerClass()} onClick={onPressMe}>

        </div>
    );
}

export default Week;
