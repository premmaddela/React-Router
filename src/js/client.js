import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about(/:aboutus)" component={About} >
			</Route>
			<Route path="contact" component={Contact} >
			</Route>
			<Route path="post(/:postname)" component={Post} >
			</Route>
		</Route>
	</Router>, 
	app);
