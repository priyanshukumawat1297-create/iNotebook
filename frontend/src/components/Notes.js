import React, { useContext, useEffect, useRef, useState } from 'react';
import context from '../context/Notecontext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useHistory } from 'react-router-dom';

const Notes = (props) => {
    let history = useHistory();
    const ref = useRef(null);
    const refclose = useRef(null);
    const Context = useContext(context);
    const { notes, getnotes, editnote } = Context;
    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getnotes();
        } else {
            history.push("/login");
        }
        // eslint-disable-next-line
    }, [])

    const updatenote = (currentnote) => {
        ref.current.click();
        setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    }

    const handleclick = (e) => {
        console.log("updation");
        editnote(note.id, note.etitle, note.edescription, note.etag);
        refclose.current.click();
        document.activeElement.blur(); //Update Note button par focus
        // ↓
        // editnote()
        // ↓
        // modal close
        // ↓
        // focus hata diya
        // ↓
        // aria-hidden warning nahi aayegi

        props.showalert("Updated Successfully", "success");
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value }) // (...) Array ki copy bana tha hai lekin andar ke objects ki nhi
    }
    return (
        <>
            <Addnote mode={props.mode} showalert={props.showalert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                            <div className='container mt-2'>
                                <div className="mb-3 my-1" >
                                    <label  htmlFor="title" className="form-label">Title</label>
                                    <input style={{"width": "300px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }}  type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' onChange={onChange} />
                                </div>
                                <div className="col-auto my-2">
                                    <label htmlFor="description">Description</label>
                                    <input  type="text" className="form-control" value={note.edescription} id="edescription" name='edescription' style={{ "width": "300px",backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={onChange} />
                                </div>
                                <div className="col-auto my-2">
                                    <label htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control" value={note.etag} id="etag" name='etag' style={{ "width": "300px" ,backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black"}} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black"}}>
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleclick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Notes</h2>
            </div>
            <div className='row'>
                <div className='container mx-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <Noteitem mode={props.mode} showalert={props.showalert} key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
