import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const {image, title, content} = this.props.prop;
        return (
            <div>
                <h2>StateFul Component</h2>
                <div className="card text-center w-25">
                    <img className="card-img-top img-fluid" src={image} width="100" alt />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
        <p className="card-text">{content}</p>
                    </div>
                </div>

            </div>
        )
    }
}
