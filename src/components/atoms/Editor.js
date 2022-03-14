/* eslint-disable no-unused-vars */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .ql-container {
    font-size: 16px;
    border: none;
    min-height: 50px;
    border-radius: 0 0 7px 7px;
    color: #6e6e6e;
  }
  .ql-toolbar {
    border: none;
  }
  .ql-editor strong {
    font-weight: bold;
  }
`;

function Editor({ value, onChange }) {
  const modules = {
    toolbar: {
      container: [
        [
          'bold',
          'underline',
          'blockquote',
          'strike',
          { list: 'ordered' },
          { list: 'bullet' },
          'link',
        ],
        [{ color: [] }, { background: [] }],
        [{ header: 1 }, { header: 2 }],
      ],
    },
  };

  return (
    <Container>
      <ReactQuill
        value={value || ''}
        modules={modules}
        theme="snow"
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
      />
    </Container>
  );
}
export default Editor;
