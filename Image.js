import React, { useState, useEffect, useRef } from 'react';

function CameraApp() {
  const videoElement = useRef(null);
  const captureButton = useRef(null);
  const saveButton = useRef(null);
  const canvasElement = useRef(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile device
    setIsMobileDevice(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    // Get user media and set up video stream
    navigator.mediaDevices.getUserMedia({ video: { facingMode: isMobileDevice ? 'environment' : 'user' } })
      .then((stream) => {
        if (videoElement.current) {
          videoElement.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }, [isMobileDevice]);

  const handleCaptureClick = () => {
    if (canvasElement.current && videoElement.current) {
      canvasElement.current.width = videoElement.current.videoWidth;
      canvasElement.current.height = videoElement.current.videoHeight;
      canvasElement.current.getContext('2d').drawImage(
        videoElement.current,
        0,
        0,
        canvasElement.current.width,
        canvasElement.current.height
      );
      canvasElement.current.style.display = 'block';
    }
  };

  const handleSaveClick = () => {
    if (canvasElement.current) {
      if (canvasElement.current.style.display === 'block') {
        const imageDataURL = canvasElement.current.toDataURL('image/png');
        localStorage.setItem('capturedPhoto', imageDataURL);
        alert('Photo saved to local storage.');
        canvasElement.current.style.display = 'none';
      } else {
        alert('No photo to save. Capture a photo first.');
      }
    }
  };

  return (
    <div>
      <div className='center row' style={{padding:'10px'}}>
        <div className='col'><video ref={videoElement} autoPlay playsInline></video></div>
        <div className='col'><canvas ref={canvasElement}></canvas></div></div>
      <button onClick={handleCaptureClick} ref={captureButton}>Capture</button>
      <button onClick={handleSaveClick} ref={saveButton}>Save</button>
    </div>
  );
}

export default CameraApp;
