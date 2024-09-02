import React, { Component } from "react";

export default class NewItem extends Component {
	render() {
		let { title, description, imageUrl, newsURL } = this.props;
		return (
			<div>
				<div className="card" style={{ width: "18rem" }}>
					<img src={imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title.slice(0,45)}...</h5>
						<p className="card-text">{description.slice(0,88)}...</p>
						<a href={newsURL} target="_blank" className="btn btn-dark">
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
