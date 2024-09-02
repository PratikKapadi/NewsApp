import React, { Component } from "react";
import NewItem from "./NewItem";
import articles from "./news_list";

export default class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: articles,
		};
	}
	render() {
		return (
			<div className="container my-3">
				<h2>News App - Top Headline</h2>
				<div className="row">
						{this.state.articles.map((element) => (
					<div className="col-4" key={element.url}>
							<NewItem
								title={element.title}
								description={element.description}
								imageUrl={element.urlToImage}
								newsURL={element.url}
							/>
					</div>
						))}
				</div>
			</div>
		);
	}
}
