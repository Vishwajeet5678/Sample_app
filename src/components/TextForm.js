import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter Text");

  // 🔹 Convert text to uppercase
  const onClickUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Uppercase","Success")
  };

  // 🔹 Convert text to lowercase
  const onClickLower = () => {
    setText(text.toLowerCase());
    props.showAlert("LowerCase","Success")
  };

  // 🔹 Clear text
  const onClickClear = () => {
    setText("");
    props.showAlert("Text cleared Removed","Success")
  };

  // 🔹 Remove numbers from text
  const onClickRemoveNumbers = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (!(text[i] >= "0" && text[i] <= "9")) {
        newText += text[i];
      }
    }
    setText(newText);
    props.showAlert("Number Removed","Success")
  };

  // 🔹 Copy text to clipboard
  const onClickCopyText = () => {
    const textArea = document.getElementById("myBox");
    if (textArea) {
      textArea.select();
      navigator.clipboard
        .writeText(textArea.value)
        .then(() => {
          console.log("Text copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("Element with id 'myBox' not found.");
    }
    props.showAlert("TextCopied","Success")
  };

  // 🔹 Handle typing
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{
            color: props.mode === "dark" ? "white" : "black",
          }}>
    
      <h1>{props.heading}</h1>

      <div className="mt-3">
        <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"style={{backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
</div>
          <button type="button"  className="btn btn-primary me-2" onClick={onClickUpper}>
            Uppercase
          </button>
          <button type="button" className="btn btn-primary me-2" onClick={onClickLower}>
            Lowercase
          </button>
          <button type="button" className="btn btn-primary me-2" onClick={onClickClear}>
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary me-2"
            onClick={onClickRemoveNumbers}
          >
            Remove Numbers
          </button>
          <button type="button" className="btn btn-primary" onClick={onClickCopyText}>
            Copy Text
          </button>
        </div>

      <div className="mt-4" style={{
            color: props.mode === "dark" ? "white" : "black",
          }}>
        <h2>Text Summary</h2>
        <p>
         {
  text.trim().length === 0
    ? 0
    : text.trim().split(/\s+/).length
} words and {text.trim().length} characters

        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((word) => word.length > 0).length}{" "}
          minutes read
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
      </>
  );
}
