import React from "react";
import memeData from "../memeData";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "//i.imgflip.com/2hgfw.jpg"
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
    console.log(meme);

    function setText(event){
        const {name, value} = event.target
        setMeme(val => {
            return{
                ...val,
                [name]: value
            }
        })
    }

    // console.log(allMemeImages);
    // console.log(meme.randomImage);


    return (
        <main>
            <div className="form">
                <input 
                    onChange={setText} 
                    className="form--inputs" 
                    type="text" 
                    placeholder="top text" 
                    name="topText" 
                    value={meme.topText}
                />
                <input  
                    onChange={setText} 
                    className="form--inputs" 
                    type="text"  
                    placeholder="bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    onClick={getMeme} 
                    className="form--btn"
                >
                        Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

