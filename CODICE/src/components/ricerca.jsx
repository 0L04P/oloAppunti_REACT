import React, { Component } from "react";
import Counters from "./counters";

class Ricerca extends Component {
	state = {
		testoRicerca1: "sql",
		testoRicerca2: "",
		value: "",
	};

	handleInput = (event) => {
		if (event.target.value != "") {
			this.setState({ testoRicerca1: event.target.value });
		}
		alert("STATO=" + this.state.testoRicerca1);
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12 divFisso">
						<div className="col-xs-6 bbb">
							<div className="col-xs-12 aaa">
								<div className="col-xs-2">
									<input
										onChange={this.handleChange}
										id="txtCerca"
										className="form-control customInput"
										onInput={this.handleInput}
									></input>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="col-xs-3">
									<input
										id="txtCerca2"
										className="form-control customInput"
									></input>
								</div>
								<span
									className="glyphicon glyphicon-erase pulisci"
									id="btPulisci"
								></span>
								&nbsp;
								<label id="btnJS" className="colorwhite14">
									JS
								</label>
								&nbsp;
								<label id="btnVB" className="colorwhite14">
									VB
								</label>
								&nbsp;
								<label id="btnSQL" className="colorwhite14">
									SQL
								</label>
							</div>
						</div>

						<div className="col-xs-9 ccc">
							<b className="btn-titolo wait">Errori comuni</b>
						</div>
					</div>
					<div className="col-xs-12 empty100"></div>
				</div>

				<div className="col-xs-12  dacanc">
					<label>{this.state.testoRicerca1}</label>
				</div>

				<Counters testoRicerca1={this.state.testoRicerca1} />
			</div>
		);
	}
}

export default Ricerca;
