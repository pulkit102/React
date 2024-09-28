import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props){
    const handleupClick =()=>{
       // console.log('clicked for uppercase');
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleloclick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleonChange=(event)=>{
        //console.log('on Change');
        setText(event.target.value)
        //setText(target.value);//now i can enter anything in the text area 
    }
    const handleclrchnge=()=>{
        let newText=" ";
        setText(newText);
    }
    const handlecopy =()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
  
    const [text /*default value*/ ,setText/*use to update any default value*/]=useState('');
    return(
        <>
        <div  style={{color: props.mode==='dark'?'white':'black'}}>
    <div>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,
        color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1  my-1' onClick={handleloclick}>Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1  my-1' onClick={handleclrchnge}>clear all</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1  my-1 ' onClick={handlecopy}>copy text</button>
    </div>
    <div className="container my-3">
        <h3>My text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0 }).length} words and {text.length} letters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes to read</p>
        <h4>Preview</h4>
        <div className="container">
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </div>
    </div>
    </>
    );}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading:'enter thoughts'
}