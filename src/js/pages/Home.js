import React from "react";

import Article from "../components/Article";

export default class Home extends React.Component {
	constructor(){
		super();
	}

	render() {
		const Articles = [
			"Man must explore, and this is exploration at its greatest",
			"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
			"Science has not yet mastered prophecy",
			"Failure is not an option"
		].map((title, i) => <Article key={i}  title={title} />);
		return (
			<div>
			    <div class="container">
			        <div class="row">
			            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			                {Articles}
			                
			                <ul class="pager">
			                    <li class="next">
			                        <a href="#">Older Posts &rarr;</a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </div>

			    <hr/>
			</div>
		)
	}
}