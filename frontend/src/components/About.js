import React from 'react'

const About = (props) => {

    return (
        <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black', width: '1100px' }}>
            <h1>About Us</h1>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            What is iNotebook?
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            iNotebook is a simple and secure note-taking application that allows users to create, manage, update, and delete their personal notes in one place. It provides an easy-to-use interface for keeping important information organized and accessible.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            Secure Authentication
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            iNotebook provides secure user authentication using JWT. Users can create an account and log in securely. Each user can access and manage only their own notes, keeping their personal information protected.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            Manage Your Notes
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            With iNotebook, you can easily add new notes, view your existing notes, edit them whenever required, and delete notes that are no longer needed. The application makes managing your daily notes simple, organized, and convenient.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            Built With Modern Technologies
                        </button>
                    </h2>

                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            iNotebook is built using modern web technologies including React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for database management. JWT authentication is used to provide secure access to user accounts and personal notes.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About