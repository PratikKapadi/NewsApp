import React, { Component } from "react";
import NewItem from "./NewItem";

export default class News extends Component {
	render() {
		return (
			<div className="container my-3">
				<h2>News App - Top Headline</h2>
				<div className="row">
					<div className="col-4">
						<NewItem
							title="myTitle"
							description="This is news"
							imageUrl="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"
						/>
					</div>
					<div className="col-4">
						<NewItem title="mytitle" description="mydescription"/>
					</div>
					<div className="col-4">
						<NewItem title="mytitle" description="mydescription" />
					</div>
				</div>
			</div>
		);
	}
}
