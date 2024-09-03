import React, { Component } from "react";
import NewItem from "./NewItem";
// import articles from "./news_list";

export default class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loding:false
		};
	}

	async componentDidMount(){
		let url="https://newsapi.org/v2/everything?q=tesla&from=2024-08-03&sortBy=publishedAt&apiKey=90094d3b2b3d49e88118baee6ace98c4";
		let data= await fetch(url);
		let parsedData=await data.json()
		console.log(parsedData);
		
		this.setState({articles:parsedData.articles})
	}
	render() {
		return (
			<div className="container my-3">
				<h1>News App - Top Headline</h1>
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
