/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateSelectField } from '../../store/makeFormSlice';

const OptionSelect = ({ optionValue, index, id, type, label, required }) => {
  const dispatch = useDispatch();
  const [optionVal, setOptionVal] = useState('');
  const [options, setOptions] = useState(optionValue);

  const onChange = (e) => {
    setOptionVal(e.target.value.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!optionVal.trim()) {
      return;
    }
    setOptionVal('');

    const newOptions = [...options, optionVal];
    setOptions([...newOptions]);

    dispatch(
      updateSelectField({
        index,
        id,
        type,
        label,
        required,
        options: [...newOptions],
      }),
    );
  };

  const deleteBtn = (e) => {
    const listId = e.target.parentNode.id;
    const newOption = [];
    options.map((e, idx) => {
      if (idx !== Number(listId)) {
        newOption.push(e);
      }
    });
    setOptions([...newOption]);

    dispatch(
      updateSelectField({
        index,
        id,
        type,
        label,
        required,
        options: [...newOption],
      }),
    );
  };

  const pushTag = options.map((item, index) => (
    <Menubox className="tag" key={index} id={index}>
      {item}
      <button type="button" className="delete_btn" onClick={deleteBtn}>
        X
      </button>
    </Menubox>
  ));

  return (
    <DropDownBox onSubmit={onSubmit} className="tagBox">
      <div>{pushTag}</div>
      <input
        onChange={onChange}
        value={optionVal}
        placeholder="Enter를 누르면 옵션을 추가 할 수 있습니다."
        type="text"
        className="inputBox"
      />
    </DropDownBox>
  );
};

export default OptionSelect;

const DropDownBox = styled.form`
  div {
    width: 90%;
    margin: 0 auto;
  }
  input {
    margin: 10px 5px;
    padding-left: 8px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Menubox = styled.span`
  margin: 5px;
  padding: 0 5px 5px 5px;
  display: inline-block;
  justify-content: flex-start;
  background-color: #cccccc;
  border-radius: 10%;

  button {
    background-color: #cccccc;
    color: #ffffff;
  }
`;
