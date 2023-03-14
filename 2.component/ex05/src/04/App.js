import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentTime = () =>{
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2); //마지막 두개 element만 출력
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }
    const [currentTime,setCurrentTime] = useState(getCurrentTime);
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        setInterval(function () {
            setCurrentTime(getCurrentTime());
            setTicks(ticks+1);
        }, 1000);
    }, []);

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currentTime.hours}
                    minutes={currentTime.minutes}
                    seconds={currentTime.seconds}/>
            }
        </div>
    );


}