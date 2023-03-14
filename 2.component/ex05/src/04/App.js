import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

/**
 * 1. useState로 currentTime, setCurrentTime 선언
 * 2. getCurrentTime 함수 생성해서 useState 초기화
 * 3. 함수 return으로 본문 생성
 * 4. useEffect, setInterval이용해서 1초마다 setCurrentTime(getCurrentTime)호출
 * 
 */

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
    //const [ticks, setTicks] = useState(0);
    //console.log(ticks);
    /**
     * 마운트, 언마운트등 일정시점에 작동하는 방법으로 useEffect씀
     * 
     */
    useEffect(() => {
        setInterval(function () {
            setCurrentTime(getCurrentTime());
            //setTicks(e=>e+1);
            
        }, 1000);
        
    }, []);

    return (
        <div>
            {
                <Clock
                message={'ex05: useEffect Hook example'}
                hours={currentTime.hours}
                minutes={currentTime.minutes}
                seconds={currentTime.seconds}/>
            }
        </div>
    );


}