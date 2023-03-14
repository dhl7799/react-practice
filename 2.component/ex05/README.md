## Class Component Lifecycle
1.  LifeCycle I: Mount 
   - constructor
   - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [react v16.3]
   - render
   - *componentDidMount: 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후

2.  LifeCycle II: Update 
   - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [react v16.3]
   - shouldComponentUpdate: props state을 변경 했을 때, 리렌더링 여부를 결정한다.
   - render
   - getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
   - *componentDidUpdate: DOM 업데이트가 끝난 직후 호출된다. DOM 작업이 가능하다.

3.  LifeCycle III: Unmount
   - *componentWillUnmount: 컴포넌트를 DOM에서 제거할 때
   
## Alternative of Functional Component LifeCycle: useEffect Hook
1. src/02:
    - Alternative of getDerivedStateFromProps
    - After Rendering(Combination componentDidUpdate and componentDidMount)
    - Calling Depend on State Changed: Seperation of Concern
    - Alternative of componentWillUnmount and componentWillUnmount

## Practices
1. src/03: Clock Component Based on Class Component LifeCycle
2. src/04: Clock Component Based on useEffect Hook

## Run Examples
```bash
$ npm run dev src=[no]
```


ex05: Component - Lifecycle

01. Class Component
   01) LifecycleI : Mount
       - 1. constructor
       - 2. getDerivedStateFromProps
       - 3. render***
       - 4. componentDidMount***
   02) LifecycleII : update
       - 1. getDerivedStateFromProps
       - 2. shouldComponentUpdate*
       - 3. render***
       - 4. getSnapshotBeforeUpdate
       - 5. componentDidUpdate***

   03) LifecycleII : Unmount
       componentWillUnmount***

02. Functional Component : Alternative(대체) - useEffect
   - getDerivedStateFromProps 대체
   - After Rendering(componentDidMount, componentDidUpdate) 대체
   - 바낀 상태에 의존적으로 코드 실행 가능
   - componentWillUnmount 대체

==============================================================================================

1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
       $ npm i react react-dom prop-types styled-components

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04)