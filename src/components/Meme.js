import React from "react";
import memesData from "../memeData"
import memeData from "../memeData";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImage] = React.useState(memeData);

    function getMeme(){
        const memesArray = allMemeImages.data.memes;
        const randNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    console.log(allMemeImages);
    console.log(meme.randomImage);


    return (
        <main>
            <div className="form">
                <input className="form--inputs" type="text" placeholder="top text" />
                <input className="form--inputs" type="text"  placeholder="bottom text"/>
                <button onClick={getMeme} className="form--btn">Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
        </main>
    )
}

// export default function App(){

//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

//     function addItem(){
//         setThingsArray(prevArray => [...prevArray, `Thing ${prevArray.length + 1}`])
//     }

//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)


//     return(
//         <div>
//             <button onClick={addItem}>Add item</button>
//             {thingsElements}
//         </div>
//     )
// }