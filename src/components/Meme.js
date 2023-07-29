import React from "react";

export default function Meme(){
    return (
        <main>
            <form className="form">
                <input className="form--inputs" type="text" placeholder="top image" />
                <input className="form--inputs" type="text"  placeholder="bottom image"/>
                <button className="form--btn">Genrate a new meme image</button>
            </form>
        </main>
    )
}