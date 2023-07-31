import React from "react";
// import memeData from "../memeData";

export default function Meme(){
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "//i.imgflip.com/2hgfw.jpg"
    })

    const [allMeme, setAllMeme] = React.useState(memeData);

    const memeDat = fetch("https://api.imgflip.com/get_memes")
                    .then(res => res.json())
                    .then(data => JSON.stringify(data));

    function getMeme(){
        const memesArray = allMeme.data.memes;
        const randNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }
    console.log(meme);

    function setText(event){
        const {name, value} = event.target;
        setMeme(val => {
            return{
                ...val,
                [name]: value
            }
        })
    }

    // console.log(allMeme);
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

