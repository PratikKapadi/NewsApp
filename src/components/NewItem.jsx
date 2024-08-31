import React, { Component } from "react";

export default class NewItem extends Component {
	render() {
        let {title,description,imageUrl,newsURL}=this.props
		return (
			<div>
				<div className="card" style={{width: "18rem"}}>
					<img src={imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							{description}
						</p>
						<a href="/" className="btn btn-primary">
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}