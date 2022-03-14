import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  min-width: 448px;
  min-height: 40px;
  font-size: 1rem;
  line-height: 40px;
  ::after {
    color: gray;
    font-size: 18px;
    font-weight: 700;
    content: '제목 *';
  }
`;
function HeadLine() {
  return (
    <div>
      <Title />
    </div>
  );
}

export default HeadLine;
