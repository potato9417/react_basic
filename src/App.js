import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
  // 컴포넌트 초기 생성
  constructor(props) {
    super(props);
    console.log('constructor');
    // 컴포넌트가 원래 가지고 있던 생성함수를 호출하는것
    // super하지않으면 this를 인식하지 못함
    // https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트 업데이트

  render() {
    return (
      <div>
        <h1>안뇽!</h1>
        <MyComponent value={5} />
      </div>
    );
  }
}

export default App;
