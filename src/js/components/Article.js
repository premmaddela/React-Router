import React from "react";

export default class Footer extends React.Component {
	constructor(){
		super();
		this.name = "nag"
	}
	render() {
		const {title} = this.props;
		return (
			<div>
			    <div class="post-preview">
                    <a href="post.html">
                        <h2 class="post-title">
                            {title}
                        </h2>
                        <h3 class="post-subtitle">
                            Problems look mighty small from 150 miles up
                        </h3>
                    </a>
                    <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
                </div>
                <hr />
			</div>
		)
	}
}