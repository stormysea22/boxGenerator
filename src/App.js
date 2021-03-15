import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import './App.css';
import Box from './components/Box';

function App() {

  const initialForm = {
    color: "",
    height: 0,
    width: 0
  }

  const [form, setForm] = useState(initialForm);
  const [boxes, setBoxes] = useState([]);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBoxes(oldBoxes => [...oldBoxes, form]);
    setForm(initialForm);
  }

  const handleDeleteBox = (idx) => {
    setBoxes(oldBoxes => [...oldBoxes.slice(0,idx), ...oldBoxes.slice(idx+ 1)])
  }


  return (
    <div className="App">
      < Form
        inputs={form}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
      />
      <div className="d-flex flex-wrap justify-content-evenly">
        {
          boxes.map((b, i) => <Box
            backgroundColor={b.color}
            height={`${b.height}px`}
            width={`${b.width}px`}
            key={i}
            idx={i}
            handleDelete={handleDeleteBox}
          />)
        }
      </div>
    </div>
  );
};

export default App;
