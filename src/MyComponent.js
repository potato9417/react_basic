import React from 'react';

class MyComponent extends React.Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
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

  render() {
    return (
      <div>
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
