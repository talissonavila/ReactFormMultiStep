// Components
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import { useState } from "react";
import Steps from './components/Steps';

import './App.css'

const formTemplate = {
  name: '',
  email: '',
  review: 'neutral',
  comment: '',
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((previousState) => {
      return { ...previousState, [key]: value };
    });
  };

  const formComponents = [
    <UserForm key={uuidv4()} data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm key={uuidv4()} data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks key={uuidv4()} data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents)


  return (
    <div className="app">
      <div className="header">
        <h2>Submit your review</h2>
        <p>We are happy with your purchase. Use the form below to review your product.</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Previous</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Next</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Send</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
