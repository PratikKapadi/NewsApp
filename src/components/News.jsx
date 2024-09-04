import React, { Component } from "react";
import NewItem from "./NewItem";
import Loding from "./Loding";
// import articles from "./news_list";

export default class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loding:false,
			page:1
		};
	}

	async componentDidMount(){
		let url=`https://newsapi.org/v2/top-headlines?category=business&apiKey=90094d3b2b3d49e88118baee6ace98c4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({loding: true});
		let data= await fetch(url);
		let parsedData=await data.json()
		console.log(parsedData);
		
		this.setState({articles:parsedData.articles,loding:false,totalResults:parsedData.totalResults})
	}
	handlePrev=async ()=>{
		console.log("prev");
		let url=`https://newsapi.org/v2/top-headlines?category=business&apiKey=90094d3b2b3d49e88118baee6ace98c4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
		this.setState({loding: true});
		let data= await fetch(url);
		let parsedData=await data.json()
		
		this.setState({articles:parsedData.articles,loding:false,page: this.state.page-1})
		
	}
	handleNext=async ()=>{
		console.log("next");
		let url=`https://newsapi.org/v2/top-headlines?category=business&apiKey=90094d3b2b3d49e88118baee6ace98c4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
		this.setState({loding: true});
		let data= await fetch(url);
		let parsedData=await data.json()
		
		this.setState({articles:parsedData.articles,loding:false,page: this.state.page+1})
	}
	
	render() {
		return (
			<div className="container my-3">
				<h1>News App - Top Headline</h1>
				{this.state.loding&&<Loding/>}
				<div className="row">
						{!this.state.loding && this.state.articles.map((element) => (
					<div className="col-4" key={element.url}>
							<NewItem
								title={element.title}
								description={element.description}
								imageUrl={element.urlToImage}
								newsURL={element.url}
							/>
					</div>
						))}
						<div className="d-flex justify-content-between my-3">
						<button disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-dark ">Previous</button>
						<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next</button>
						</div>
				</div>
			</div>
		);
	}
}
