import React from 'react';

const MyName = ({ value }) => {
  return (
    <div>
      안녕하세요. 제이름은 <b>{value}</b>입니다.
    </div>
  );
};

MyName.defaultProps = {
  value: '기본 이름'
};

export default MyName;
