import React from 'react';

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('Something went wrong!')
    }
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;