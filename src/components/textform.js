import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !","success");
        
    }

    const handleLowClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success");
    }

    const handleClear= ()=>{
        console.log("Clear Text Was Clicked"+ text);
        let newText= ("");
        setText(newText);
        props.showAlert("Textarea Cleared","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    }

    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
    }


    let [text, setText] = useState("");
    // setText("Enter your text");
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Enter the text below</label> */}
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="7"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <input type="file" className="btn btn-primary my-1 mx-2" accept="text/plain" onChange = {readTxt}/>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
