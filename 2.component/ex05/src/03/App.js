import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

/**
 * Class형
 * 1. Component 상속하고 render() 있어야함 ()
 * 2. constructor(props) 생성자 만들기, super(props) 해주기
 * 3. 생성자 안에 초기 state 만들고 초기값 부여
 * 4. getCurrentClockTime() 현재시간 가지고오는 함수 생성
 * 5. componentDidMount()으로 컴포넌트가 마운트된 직후부터 1초마다 수행
 */


/**
 * 클래스형 컴포넌트는 extends Component 해야함
 * 
 * super(...arguments) 대신 props해도 작동
 * ...은 전개 연산자
 * 
 * props는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 객체
 */
export default class App extends Component {
    constructor(props) {
        /**
         * this.state에 객체를 할당하여 지역 state를 초기화
            인스턴스에 이벤트 처리 메서드를 바인딩
            constructor() 내부에서 setState()를 호출하면 안 됩니다. 
            컴포넌트에 지역 state가 필요하다면 생성자 내에서 this.state에 초기 state 값을 할당하면 됩니다.
         */
        super(props)
        this.state = this.getCurrentClockTime();
    }

    getCurrentClockTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2); //마지막 2자리
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            //00시부터~24시까지
            hours: ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am",
            ticks: this.state ? this.state.ticks + 1 : 0
        };
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    <Clock
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    session={this.state.session} />
                    
                }
            </div>
        );
    }
    /**
     * componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다. 
     * DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다. 외부에서 데이터를 불러와야 한다면, 
     * 네트워크 요청을 보내기 적절한 위치입니다.

        이 메서드는 데이터 구독을 설정하기 좋은 위치입니다. 데이터 구독이 이루어졌다면, 
        componentWillUnmount()에서 구독 해제 작업을 반드시 수행하기 바랍니다.

        componentDidMount()에서 즉시 setState()를 호출하는 경우도 있습니다. 
        이로 인하여 추가적인 렌더링이 발생하지만, 브라우저가 화면을 갱신하기 전에 이루어질 것입니다. 
        이 경우 render()가 두 번 호출되지만, 사용자는 그 중간 과정을 볼 수 없을 것입니다. 
        이런 사용 방식은 성능 문제로 이어지기 쉬우므로 주의가 필요합니다. 
        대부분의 경우, 앞의 방식을 대신하여 constructor() 메서드에서 초기 state를 할당할 수 있습니다. 
        하지만 모달(Modal) 또는 툴팁과 같이 렌더링에 앞서 DOM 노드의 크기나 위치를 먼저 측정해야 하는 경우 이러한 방식이 필요할 수 있습니다.
     */
    componentDidMount() {
        this.interval = setInterval(function () {
            this.setState(this.getCurrentClockTime());
        }.bind(this), 1000);
    }
}


