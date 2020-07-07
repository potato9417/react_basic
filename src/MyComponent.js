import React from 'react';

class MyComponent extends React.Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }
  // static(정적)함수는 class에 대한 정적 매소드를 정의함 => 객체 생성,복제
  // nextProps : 다음으로 받아올 props 값
  // prevState : 현재 업데이트 되기전의 state 값

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextProps.value === 5) {
      return false;
    }
    return true;
  }
  // 특정 조건에 따라 랜더링을 막아 줄수 있는 함수(따로 최적화도 가능)

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (this.props.value !== prevProps.value) {
      console.log('value값이 바뀜!', this.props.value);
    }
  }
  // 컴포넌트의 값이 업데이트 될때 실행

  componentWillUnmount() {
    console.log('bye~');
  }
  // 컴포넌트가 사라지게 될떄 함수 호출

  render() {
    return (
      <div>
        {this.state.error.type}
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
