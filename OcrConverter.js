import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const OcrConverter = () => {
  const [convertedText, setConvertedText] = useState('');

  const handleDrop = async (acceptedFiles) => {
    const image = acceptedFiles[0];
    const { data: { text } } = await Tesseract.recognize(image);
    setConvertedText(text);
  };

  return (
    <Container>
      <h2>Handwriting to Text Converter</h2>
      <Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop an image of handwritten text here, or click to select a file.</p>
          </div>
        )}
      </Dropzone>
      <div>
        <h3>Converted Text:</h3>
        <p>{convertedText}</p>
      </div>
    </Container>
  );
};

export default OcrConverter;
