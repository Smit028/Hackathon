import React from 'react';
import Navbar from '../src/Navbar';
import CameraApp from './Image';
import './App.css'
function App() {
  
  return (
    <div className="App main" >
      <Navbar/>
       <div className='splt'  style={{textAlign:'center',fontSize:'5em'}}>HIMS</div>
       <div className='splt'  style={{textAlign:'center',fontSize:'2em',fontWeight:'bolder'}}>Health Information Management System</div>
     
      <div style={{alignItems:'center'}}>
      <CameraApp/>
      </div>
      <br>
      </br>
      <br></br>
      <div className='splt'  style={{textAlign:'center',fontSize:'3em',fontWeight:'bolder'}}>Description About How App Works:</div>
      <div style={{padding:'12px',backgroundColor:'white'}}>
      <div className='splt'  style={{textAlign:'center',fontSize:'5em'}}>MODEL TRAINING</div>
<ol>
      <li>The app will take data from user in form of image and using<b>OCR</b> and <b>ML</b>
      we will decode the handwritten data
      </li>
      <li>We created our own API nad trained it to get accurate data
      </li>
      <li>WE will use <b>PAPER FORM</b> for collecting data scence given technical gadgets its tooo expensive so we come up weith the idea that we will give them PRE-PRINTED-PAPER so that cost will be minimum and also for <b>DOCTOR</b> it will be easy to adopt.
      </li>
      <li>They just hav eto write as they always did but now its on pre-printed-paper and why this bcz its easy to developer to collect data
      </li>
      </ol></div>
      <br></br>
      <br></br>
      <div style={{fontWeight:'2em',fontSize:'Bold',padding:'17px',backgroundColor:'white'}}>
      <b>1. Handwriting Recognition Model:</b>

Use machine learning frameworks like TensorFlow or PyTorch to train a handwriting recognition model. This involves collecting and preprocessing handwriting data, creating a neural network architecture, training the model, and evaluating its performance.
You might use Convolutional Neural Networks (CNNs) or Recurrent Neural Networks (RNNs) for this purpose.
<br></br><b>2. Backend Development:</b>

Develop a backend server using a language like Python (using frameworks like Flask or Django) or Node.js. This server will handle the communication between the frontend and the handwriting recognition model.
Implement API endpoints for receiving handwriting data from the frontend, passing it to the model, and returning the recognized text.
<br></br><b>3. Database (Optional):</b>

Set up a database to store user data, if required. This could include saving users' handwritten input and the corresponding recognized text.
<br></br><b>4. Frontend Development:</b>

Develop a user-friendly and responsive frontend using HTML, CSS, and JavaScript.
Implement a canvas for users to write on, and UI elements to submit and display the converted text.
<br></br><b>5. API Integration:</b>

Integrate your backend API with the frontend. When users submit their handwritten input, the frontend should send this data to the backend API for recognition.
<br></br><b>6. Deployment:</b>

Deploy the frontend and backend components. You might use platforms like AWS, Google Cloud, Heroku, or others.
<br></br><b>7. Testing and Optimization:</b>

Test the app extensively to ensure accurate handwriting recognition and a smooth user experience.
Optimize the model and app performance to handle multiple users and ensure fast response times.
<br></br><b>8. User Authentication and Security (Optional):</b>

Implement user authentication and authorization if the app requires user accounts.
Implement security measures to protect user data and prevent unauthorized access.
<br></br><b>9. Continuous Improvement:</b>

Collect user feedback and iterate on your app to improve accuracy and user satisfaction.
Consider integrating analytics</div>
      </div>
  );
}

export default App;
