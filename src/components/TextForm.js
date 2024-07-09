import React, {useState} from 'react'

export default function TextForm(props) {
    //Change to upper case
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    //change to lower case
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case!", "success");
    }

    //clear text
    const handleClearClick = () => {
      setText('');
      props.showAlert("Text Clear!!", "warning");
    }

    //paragraphs count
    const paraCount = (text) => {
      const paragraphs = text.split('\n').filter(paragraph =>paragraph.trim() !== '')
      return paragraphs.length;
    }

  

    const handleOnChange = (event) => {
        console.log("On Change ");
        setText(event.target.value);
    }

    //copy text to clipboard
    const handleCopy = () => {
      console.log("I am Copy ");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to clipboard!", "success");
    }

    //remove extra spaces
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove extra Spaces successfully!", "success");
    }
  
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to change the state
    // setText("new text"); correct way to change the state 
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        {/* <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button> */}
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      <h2>Sentence Count</h2>
      <p>{text.split(".").length}</p>
      <h2>Paragraphs</h2>
      <p>{paraCount(text)}</p>
    </div>
    
    </>
  )
}
