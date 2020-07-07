import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    // 컴포넌트가 원래 가지고 있던 생성함수를 호출하는것
    // super하지않으면 this를 인식하지 못함
    // https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect());
  }

  render() {
    return (
      <div ref={ref => (this.myDiv = ref)}>
        {/* ref : 특정 돔에 작업을 하고 싶을때 사용 => 돔에 id를 붙여주는것과 비슷 / 돔에 refenence(참고)를 붙여주는것과 같음  */}
        <h1>안뇽!</h1>
      </div>
    );
  }
}

export default App;
