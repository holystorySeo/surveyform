import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  min-width: 30px;
  min-height: 30px;
  font-size: 1rem;
  line-height: 30px;
  border-radius: 10px;
  border: 2px solid #848484;
  text-align: center;
  ::after {
    content: '폼 열기';
    color: #848484;
    font-weight: 700;
  }

  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

function OpenFormButton() {
  const openForm = () => {};
  return (
    <div>
      <ButtonWrap onClick={openForm} />
    </div>
  );
}

export default OpenFormButton;
