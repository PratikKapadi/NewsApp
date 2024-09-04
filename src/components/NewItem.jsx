import React, { Component } from "react";
import image from "./images.jpeg"

export default class NewItem extends Component {
	render() {
		let { title, description, imageUrl, newsURL } = this.props;
		return (
			<div className="my-2">
				<div className="card" style={{ width: "18rem" }}>
					<img src={!imageUrl ? image : imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<a rel="noreferrer noopener" href={newsURL} target="_blank" className="btn btn-dark">
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
