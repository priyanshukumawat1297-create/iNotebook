import React from 'react'
import Notes from './Notes'

const Home = (props) => {

    return (
        <>
            <Notes showalert={props.showalert} mode={props.mode}/>
        </>
    )
}

export default Home