import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
    const host = "http://localhost:5001";
    const notesInitial = [
    ]

    const [notes, setnotes] = useState(notesInitial);

    // Get all note
    const getnotes = async () => {
        // TODO:API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        console.log(json)
        setnotes(json);
    }

    // Add a note
    const addnote = async (title, description, tag) => {
        // TODO:API Cal
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log("Backend response:", json);
        let newnote = JSON.parse(JSON.stringify(notes));
        newnote.push(json);
        setnotes(newnote);
        console.log("Status:", response.status);
    }
    // Delete a note
    const deletenote = async (id) => {
        // TODO:API Call
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        console.log(json);

        const newnote = notes.filter((note) => { return note._id !== id })
        setnotes(newnote);
        // console.log("deleting"+id);
    }
    // Edit a note
    const editnote = async (id, title, description, tag) => {
        // TODO:API Cal
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        let newnote = JSON.parse(JSON.stringify(notes));
        //Login to edit in client
        for (let index = 0; index < newnote.length; index++) {
            const element = newnote[index];
            if (element._id === id) {
                newnote[index].title = title;
                newnote[index].description = description;
                newnote[index].tag = tag;
            }
        }
        setnotes(newnote)
    }
    return (
        <Notecontext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate;