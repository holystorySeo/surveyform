import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputTitle = ({ title }) => <Title>{title}</Title>;

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputTitle;

const Title = styled.p`
  margin: 4px 0;
  font-size: 12px;
  font-weight: 600;
`;
