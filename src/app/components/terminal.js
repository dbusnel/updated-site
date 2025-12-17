'use client';
import "./terminal.css"
import React from 'react';

const avgCharWidth = .6; // Approximate average character width as a fraction of font size
const fontSize = 12; // in pixels
const lineHeight = 1.2;

export default function Terminal() 
{
    const [text, setText] = React.useState("");
    const refContainer = React.useRef();

    //let terminalWidth = window.innerWidth * .5; // 50vw
    //let terminalHeight = window.innerHeight * .5; // 50vh

    console.log("Parent container size: " + refContainer.current + "x" + refContainer.current);


    return (
        <div style={{backgroundColor : "black", height : "50vh", width : "50vw", id:"terminal-box"}}
            onClick={() => 
            {
                //let numLines = getNumberOfLines(document.getElementById("terminal-box").getAttribute("height") , fontSize, lineHeight); 
                setText("\n".repeat(19 /*num lines - 1 here instead of 20*/) + " > ");
                console.log(text);
            }}>
            <pre className='terminal-text'>{text}</pre>
        </div>
    )
}

function getNumberOfLines(height, fontSize, lineHeight) 
{
    return Math.floor(height / (fontSize * lineHeight));
}

function getLineWidth(width, fontSize) 
{
    return Math.floor(width / (fontSize * avgCharWidth));
}