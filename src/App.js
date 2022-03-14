import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import CreateFormPage from './components/pages/CreateFormPage';

function App() {
  return (
    <WholeContainer>
      <ToastContainer />
      <Routes>
        <Route path="/create" element={<CreateFormPage />} />
      </Routes>
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;
  //   overflow-y: scroll;
  //   position: relative;
  //   ::-webkit-scrollbar {
  //     /* Chrome, Safari, Opera*/
  //     display: none;
  //   }
  //   -ms-overflow-style: none; /* IE and Edge */
  //   .Toastify__toast-container {
  //     position: absolute;
  //     right: 0;
  //   }
`;
