import React, { useContext, useState } from 'react';
import context from '../context/Notecontext';

const Addnote = (props) => {
    const Context = useContext(context);
    const { addnote } = Context;

    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const handleclick = (e) => {
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" });
        props.showalert("Added Successfully", "success");
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container mt-2'>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Add a Note</h2>
                <div className="mb-3 my-1">
                    <label style={{ color: props.mode === "dark" ? "white" : "black" }} htmlFor="title">Title</label>
                    <input style={{ width: "300px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} />
                </div>
                <div className="col-auto my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' style={{ width: "300px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} value={note.description} onChange={onChange} />
                </div>
                <div className="col-auto my-2" >
                    <label style={{ color: props.mode === "dark" ? "white" : "black" }} htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' style={{ width: "300px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} value={note.tag} onChange={onChange} />
                </div>
                <div className="col-auto mt-3" >
                    <button style={{ color: props.mode === "dark" ? "white" : "black" }} disabled={note.title.length < 5 || note.description.length < 5} type="submit" className={`btn btn-${props.mode === "dark" ? "primary" : "info"} mb-3`} onClick={handleclick}>Add Note</button>
                </div>
            </div>

        </div>
    )
}

export default Addnote
