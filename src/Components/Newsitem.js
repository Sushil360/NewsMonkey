import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        left:'0'
                    }}>
                        <span className="badge rounded-pill bg-danger">{source} </span>
                    </div>

                    <img src={!imgUrl ? "https://st2.depositphotos.com/2102215/46681/v/1600/depositphotos_466819550-stock-illustration-image-available-icon-missing-image.jpg" : imgUrl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
