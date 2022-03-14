import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  min-width: 30px;
  min-height: 30px;
  font-size: 1rem;
  line-height: 30px;
  border-radius: 10px;
  border: ${(props) => (props.active ? '2px solid blue' : '2px solid gray')};
  background: ${(props) => (props.active ? 'blue' : 'white')};
  text-align: center;
  margin-left: 5px;

  ::after {
    content: '저장하기';
    /* color: gray; */
    color: ${(props) => (props.active ? 'white' : 'gray')};
    /* background: white; */
    background: ${(props) => (props.active ? 'blue' : 'white')};
    font-weight: 700;
  }

  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

function SaveFormButton({ active, saveForm }) {
  return (
    <div>
      <ButtonWrap onClick={saveForm} active={active} />
    </div>
  );
}

export default SaveFormButton;
