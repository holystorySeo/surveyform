import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../store/makeFormSlice';

const InputWrap = styled.input`
  min-width: 600px;
  min-height: 48px;
  font-size: 1rem;
  background: #e6e6e6;
  line-height: 48px;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

function HeadLine() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);

    dispatch(updateTitle(e.target.value));
  };

  return (
    <div>
      <InputWrap value={title} onChange={titleHandler} />
    </div>
  );
}

export default HeadLine;
