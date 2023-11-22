import React, { useState, useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

export default function Form(props) {
    const [text, settext] = useState("")
    // text="new text" wrong way to change state
    // settext("new text") //correct way to change state 

    // Convert uppercase
    const convertuper = () => {
        // console.log("click ho gya"+text)
        let uppercase = text.toUpperCase()
        settext(uppercase)
    }

    // Convert lowerCase 
    const convertlower = () => {
        // console.log("click ho gya"+text)
        let uppercase = text.toLowerCase()
        settext(uppercase)
    }

    const handleOnChange = (event) => {
        // changetext
        const newtext = event.target.value;
        settext(newtext);
    }
    // clear textarea
    const clear = () => {
        // console.log("onchange")
        settext("")
    }

    // Remov Extra Space
    const removextraspace = () => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.showalert("Text has been removed", "success")

    }

    //copy
    const textAreaRef = useRef(null);
    const copy = () => {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            props.showalert("Text has been copied", "success")
        }
    };
    // undo 
    const Undo = () => {
        document.execCommand('undo');
    }
    // redo 
    const Redo = () => {
        document.execCommand('redo')
    }
    return (
        <div>
            <div className='container my-2' style={{ backgroundColor: props.mode === 'dark' ? '#042745' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea ref={textAreaRef} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={convertuper}>convert uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={convertlower}>convert Lowercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-2 py-1" onClick={clear}><MdDelete className='fa-2x' /></button>
                <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-2 py-1" onClick={copy}><IoCopy className='fa-2x' /></button>
                <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-2 py-1" onClick={Undo}><FaUndo className='fa-2x' /></button>
                <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-2 py-1" onClick={Redo}><FaRedo className='fa-2x' /></button>

                <button disabled={text.length===0} onClick={removextraspace} type="button" className="btn btn-dark mx-1 my-2">Remove Extra space</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>your text summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>words {text.split(" ").filter((e) => { return e.length !== 0 }).length}  and {text.length} character</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>words {0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} Minutes Read</p>
            </div>

        </div>
    )
}
