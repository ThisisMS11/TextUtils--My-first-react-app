import React, { useState } from 'react'

export default function Textform(props) {

    // these are called  state variables which returns a pair of variables where one represents the current value of the variable and the other one represents a function that helps us to update the content of that variable.

    const [text, setText] = useState('Enter your text here 2');

    const [whateffect, telleffect] = useState('No button clicked yet');

    const [count, updatecount] = useState('10px');

    // for counting the words in the text
    const [wordcount, setWordcount] = useState(5);

    let n = 10;


    // ! setText is not working why i don't know what to do 
    const handleupperclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        telleffect('Uppercase');
    }

    const handleonchange = (event) => {
        setText(event.target.value);
        let n = 0;
        let newtext = text.split(/[ ]+/);
        newtext.forEach(e => {
            if (e != " ") {
                ++n;
            }
        });
        setWordcount(n);
    }

    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handlelowerclick = () => {
        let newtext = text.toLowerCase();
        telleffect('Lowercase');
        setText(newtext);
    }

    const increaseletterspacing = () => {
        n = n + 1;
        console.log('the value of n is ' + n);

        let spacingvalue = n.toString();
        spacingvalue += 'px';

        var root = document.querySelector(':root');

        updatecount(spacingvalue)
        root.style.setProperty('--n', count);

        console.log('the value of var(--n) is ', count);
        const mybox = document.getElementById('mybox');
        mybox.classList.add("ils");
    }

    const cleartext = () => {
        setText('');
    }

    return (
        <>
            <div className="container " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.message}-{whateffect}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }}> </textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupperclick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-4" onClick={handlelowerclick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-4" onClick={increaseletterspacing}>
                    increase letter spacing
                </button>
                <button className="btn btn-primary mx-4" onClick={removeextraspaces}>
                    remove extra spaces
                </button>
                <button className="btn btn-primary mx-4" onClick={handlecopy}>
                    copy text
                </button>
                <button className="btn btn-primary mx-4" onClick={cleartext}>
                    Clear Text
                </button>

                <div className="my-4">
                    <h1 >Text summary</h1>
                    <p>{wordcount} words {text.length} Characters</p>
                </div>

                <div className="preview-box">
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}
