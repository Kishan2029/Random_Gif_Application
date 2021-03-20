import React from 'react'
import useGif from '../useGif'
const Tag= ()=>{
    const{gif,fetchGif}=useGif();

    

    return(
        <div className="container">
            <h1>Random gif</h1>
            <img width="500" height="500" src={gif} alt="Random Gif"/>
            <button onClick={fetchGif()}>Click for New</button>
        </div>
    )
}

export default Tag
