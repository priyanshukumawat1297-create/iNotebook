import React, { useContext } from 'react'
import context from '../context/Notecontext'

const Noteitem = (props) => {
    const { note, updatenote } = props;
    const Context = useContext(context);
    const { deletenote } = Context

    const handledelete = () => {
        deletenote(note._id);
        props.showalert("Deleted Successfully", "success");
    }
    const handleupdate = () => {
        updatenote(note)
    }

    return (
        <div className='col-md-3'>
            <div className="card my-2">
                <div className="card-body" style={{ backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2 pointer" onClick={handledelete}></i>
                    <i className="fa-regular fa-pen-to-square mx-2 pointer" onClick={handleupdate}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
