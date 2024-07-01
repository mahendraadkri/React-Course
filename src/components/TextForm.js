import React, {useState} from 'react'

export default function TextForm(props) {
    //Change to upper case
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    //change to lower case
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    }

    //clear text
    const handleClearClick = () => {
      setText('');
    }

    //paragraphs count
    const paraCount = (text) => {
      const paragraphs = text.split('\n').filter(paragraph =>paragraph.trim() !== '')
      // const paragraphsCount = paragraphs.length;
      return paragraphs.length;
    }

  

    const handleOnChange = (event) => {
        console.log("On Change ");
        setText(event.target.value);
    }
  
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to change the state
    // setText("new text"); correct way to change the state 
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words & {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h2>Sentence Count</h2>
      <p>{text.split(".").length}</p>
      <h2>Paragraphs</h2>
      <p>{paraCount(text)}</p>
    </div>
    
    </>
  )
}
