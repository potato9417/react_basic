import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
  state = {
    counter: 1,
    error: false
  };

  componentDidCatch(error, info) {
    console.log('error : ', error);
    console.log('info : ', info);
    this.setState({ error: true });
  }
  // 에러가 발생할수 있는 component의 부모 component에 입력!!!
  // 추후에 API를 통해서 서버로 오류내용 날리기 하면서 오류 분석

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

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <p>에러가 났어요ㅠㅠ</p>
        </div>
      );
    }
    return (
      <div>
        <h1>LifeCycle!</h1>
        {this.state.counter < 6 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default App;
