import React, { useState } from 'react';

export default function About() {
  const [text, setText] = useState('Enable Dark Mode');
  const [stateStyle, setStateStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const onClickDark = () => {
    if (stateStyle.color === 'white') {
      setStateStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setText('Enable Dark Mode');
    } else {
      setStateStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setText('Enable Light Mode');
    }
  };

  return (
    <div className="container" style={stateStyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={stateStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={stateStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item’s accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={stateStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={stateStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item’s accordion body.</strong> It is hidden by default.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={stateStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={stateStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item’s accordion body.</strong> It is hidden by default.
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={onClickDark} className="btn btn-primary mt-3">
        {text}
      </button>
    </div>
  );
}
