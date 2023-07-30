import React from "react";
import memesData from "../memeData"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes;
        const randNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randNum].url;
        setMemeImage(url)
    }

    console.log(memesData);
    console.log(memeImage);


    return (
        <main>
            <div className="form">
                <input className="form--inputs" type="text" placeholder="top image" />
                <input className="form--inputs" type="text"  placeholder="bottom image"/>
                <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme--image" alt="meme"/>
        </main>
    )
}

// export default function App(){
//     const [isImportant, setIsImportant] = React.useState("Yes");

//     function handleClick(){
//         setIsImportant(isImportant === "No" ? "Yes" : "No")
//     }


//     return(
//         <div>
//             <h1>Is state important to know in react</h1>
//             <div onClick={handleClick}>
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }