import React from 'react'

export default function FunctionProps(props) {
    return (
        <div>
            <h2>StateLess Component</h2>
            <div className="card text-center w-25">
                <img className="card-img-top" src={props.demo.image} alt />
                <div className="card-body">
    <h4 className="card-title">{props.demo.title}</h4>
                    <p className="card-text">{props.demo.content}</p>
                </div>
            </div>

        </div>
    )
}
