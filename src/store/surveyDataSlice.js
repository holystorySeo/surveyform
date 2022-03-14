import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxID: 1,
  data: [
    {
      title: '테스트1',
      formId: 1,
      formData: [
        {
          id: 'name',
          type: 'text',
          required: true,
          label: '이름',
          placeholder: '주민등록상 이름 입력',
        },
        {
          id: 'phone',
          type: 'phone',
          required: true,
          label: '휴대폰 번호',
        },
        {
          id: 'address',
          type: 'address',
          required: true,
          label: '배송지',
        },
        {
          id: 'input_0',
          type: 'select',
          label: '옵션1',
          options: ['남성', '여성'],
          required: true,
        },
        {
          id: 'input_1',
          type: 'file',
          label: '첨부파일',
          required: false,
          description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
        },
        {
          id: 'agreement_0',
          type: 'agreement',
          label: '개인정보 수집 약관 동의',
          required: true,
          contents: '<p>(개인정보 수집 및 약관 내용)</p>',
        },
      ],
      resultData: [
        {
          useId: 1,
          name: '홍길동',
          phone: '010-1234-0000',
          address: '서울시 강남구 서초동',
          input_0: '남성',
          input_1: '',
          agreement_0: true,
        },
        {
          useId: 2,
          name: '박동길',
          phone: '010-2423-0000',
          address: '서울시 성북구 길음동',
          input_0: '남성',
          input_1: '',
          agreement_0: true,
        },
      ],
    },
  ],
};

const surveyDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    makeForm(state, action) {
      console.log(action.payload);
      state.maxID = action.payload.maxID;
      state.data = [...state.data, action.payload.newForm];
    },
  },
});

export const { makeForm } = surveyDataSlice.actions;
export default surveyDataSlice.reducer;
