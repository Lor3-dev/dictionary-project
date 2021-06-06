import React from "react";
export default function Phonetics (props) {

    console.log(props.phonetics);
    return (<div className="Phonetics">
                {props.phonetics[0].text}
                <br />
                <a href={props.phonetics[0].audio} target="_blank">Listen</a>
        </div>)
}