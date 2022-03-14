import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  min-width: 600px;
  min-height: 40px;
  font-size: 1rem;
  line-height: 40px;
  border-radius: 10px;
  border: 2px solid blue;
  text-align: center;
  ::after {
    content: '필드 추가하기';
    color: blue;
    font-weight: 700;
  }

  &:hover {
    background: gray;
    border: 2px solid gray;
    ::after {
      color: white;
    }
  }

  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

function AddFieldButton({ addField }) {
  return (
    <div>
      <ButtonWrap onClick={addField} />
    </div>
  );
}

export default AddFieldButton;
