//imrc
import React, { Component } from "react";
//cc
export default class Counter extends Component {
	state = {
		id: this.props.id,
		ArgClassi: this.props.counter.Arg_Classi,
	};

	styles = {
		fontSize: "30px",
		fontStyle: "italic",
		fontWeight: "bold",
		font: "italic",
		maxWidth: "800px",
	};

	handleMinimize = (event) => {
		let classi = this.state.ArgClassi;
		if (classi.includes("minimizzzato")) {
			classi = classi.replace("minimizzzato", "");
		} else {
			classi = classi + " minimizzzato";
		}

		this.setState({
			ArgClassi: classi,
		});
	};

	render() {
		return (
			<div className="col-xs-12">
				<div
					className={this.getArgClasses()}
					onDoubleClick={this.handleMinimize}
					//id={"txtCerca" + this.props.counter.id}
				>
					{this.props.counter.id})&nbsp;
					{this.props.counter.testo}
				</div>
			</div>
		);
	}
	getBadgesClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	getArgClasses() {
		let classes = "col-xs-12 errori ";

		classes += this.state.ArgClassi;
		return classes;
	}

	formatCount() {
		const { value: count } = this.state; //definisco tra graffe una variabile corrispondente
		return count === 0 ? "ZERO" : count;
	}
}
