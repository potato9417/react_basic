import React, { Component, Fragment } from 'react';
import './App.css';
import MyName from './MyName';

class App extends Component {
  render() {
    const name = 'hi';
    const value = 1;
    const style = {
      backgroundColor: '#000',
      padding: '16px',
      color: '#fff',
      fontSize: '30px'
    };
    return (
      <Fragment>
        <div>
          {name === 'hi' && '이름이 같다!'}
          {1 + 1 === 2 ? '맞다' : '틀리다'}
        </div>
        <div>
          {(() => {
            if (value === 1) {
              return <h2>1이다!</h2>;
            }
            if (value === 2) {
              return <h2>2이다!</h2>;
            }
            if (value === 3) {
              return <h2>3이다!</h2>;
            }
            return <h2>없다</h2>;
          })()}
          {/* 함수를 바로 실행하려면 (function(){})() */}
        </div>
        <div>
          <p style={style}>안녕 스타일을 넣었어!</p>
          <p className="text">안녕 className을 이용해서 css를 넣었어!</p>
        </div>
        <MyName />
      </Fragment>
    );
  }
}

export default App;
