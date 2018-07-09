import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { Link } from "react-router";

export default class Layout extends React.Component {
	constructor(){
		super();
	}

	render() {
		const { location } = this.props;

		return (
			<div>
				<Header location={location}/>
				{this.props.children}
				<Footer />
			</div>
		)
	}
}