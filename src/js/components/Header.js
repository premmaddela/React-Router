import React from "react";

import Title from "./Header/Title.js";

import { Link } from "react-router";

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			collapsed: true
		};
	}
	toggleCollapse(){
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}
	render() {
		const containerStyle = {
			backgroundImage : 'url(assets/img/home-bg.jpg)'
		}
			const {location } = this.props;
			const { collapsed } = this.state;
			const homeClass = location.pathname === "/" ? "active" : "";
			const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
			const postClass = location.pathname.match(/^\/post/) ? "active" : "";
			const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
			const navClass = collapsed ? "collapse" : "";
		return (

			<div>
			    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
			        <div class="container-fluid">
			            <div class="navbar-header page-scroll">
			                <button type="button" onClick={this.toggleCollapse.bind(this)} class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                    <span class="sr-only">Toggle navigation</span>
			                    Menu <i class="fa fa-bars"></i>
			                </button>
			                <a class="navbar-brand" href="index.html">Start Bootstrap</a>
			            </div>

			            <div class={navClass  + " navbar-collapse"} id="bs-example-navbar-collapse-1">
			                <ul class="nav navbar-nav navbar-right">

			                    <li class={homeClass} onClick={this.toggleCollapse.bind(this)} >
			                        <Link to="/">Home</Link>
			                    </li>
			                    <li class={aboutClass} onClick={this.toggleCollapse.bind(this)}>
			                        <Link to="about">About</Link>
			                    </li>
			                    <li class={postClass} onClick={this.toggleCollapse.bind(this)}>
			                        <Link to="post">Sample Post</Link>
			                    </li>
			                    <li class={contactClass} onClick={this.toggleCollapse.bind(this)}>
			                        <Link to="contact">Contact</Link>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </nav>
				<header class="intro-header" style={containerStyle}>
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			                    <div class="site-heading">
			                        <h1>Clean Blog</h1>
			                        <hr class="small" />
			                        <span class="subheading">A Clean Blog Theme by Start Bootstrap</span>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </header>
			</div>
		)
	}
}