import React, { Component } from 'react';
import {GridLayout} from "../src/index";

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "none",
			unmount: false,
		};
	}
	render() {
		return this.state.unmount ? <div></div> : (
			<GridLayout ref={r => this.grid = r} className="1" size={0} style={{display: this.state.display}}>
				<div style={{width: "100px", height: "100px"}}><img src="https://naver.github.io/egjs-infinitegrid/assets/image/4.jpg" /></div>
				<div style={{width: "100px", height: "100px"}}></div>
				<div style={{width: "100px", height: "400px"}}></div>
				<div style={{width: "100px", height: "100px"}}></div>
				<div style={{width: "100px", height: "200px"}}></div>
				<div style={{width: "100px", height: "300px"}}></div>
				<div style={{width: "100px", height: "100px"}}></div>
				<div style={{width: "100px", height: "100px"}}></div>
			</GridLayout>
		);
	}
	componentDidMount() {
		console.log("mount");
	}
}

export default Example;