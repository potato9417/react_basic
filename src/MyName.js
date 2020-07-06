import React from 'react';

class MyName extends React.Component {
  static defaultProps = {
    value: '기본 이름'
  };
  // props값을 지정하지 않았을 경우 static함수를 이용하여 기본설정값을 입력해줘야한다
  render() {
    return (
      <div>
        안녕하세요 제이름은 <b>{this.props.value}</b> 입니다.
      </div>
    );
  }
}

// MyName.defaultProps = {
//   value: '기본 이름'
// };
// props값을 지정하지 않았을 경우 하단에 따로 기본값을 입력할수도 있다.

export default MyName;
