import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'hi';
    const value = 1;
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
        </div>
      </Fragment>
    );
  }
}

export default App;
