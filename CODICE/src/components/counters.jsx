import React, { Component } from "react";
import Counter from "./counter";
import ERRORI_COMUNI from "./appunti.js";

class Counters extends Component {
	constructor() {
		super();
		this.createCounterArrayOfObjects =
			this.createCounterArrayOfObjects.bind(this);

		this.getArgomenti = this.getArgomenti.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.setVal = this.setVal.bind(this);
		this.handleVBclick = this.handleVBclick.bind(this);
		this.handleJSclick = this.handleJSclick.bind(this);
		this.handleSQLclick = this.handleSQLclick.bind(this);
		this.getClasseBtn = this.getClasseBtn.bind(this);

		this.state = {
			counters: this.createCounterArrayOfObjects(),
		};
	}

	state = {
		counters: "",
		testoRicerca1: "",
		testoRicerca2: "",
		disabilitaInput1: false,
		val: "",
		val2: "",
		btn_VB_clicked: false,
		btn_JS_clicked: false,
		btn_SQL_clicked: false,
	};

	handleInput = (event) => {
		this.setState({
			testoRicerca1: event.target.value,
			counters: this.createCounterArrayOfObjects(event.target.value),
		});
	};
	handleInput2 = (event) => {
		this.setState({
			testoRicerca2: event.target.value,
			disabilitaInput1: event.target.value !== "",
			counters: this.createCounterArrayOfObjects(
				event.target.value,
				true
			),
		});
	};
	setVal = (event) => {
		this.setState({
			testoRicerca1: "",
			testoRicerca2: "",
			disabilitaInput1: false,
			counters: this.createCounterArrayOfObjects("", false),
		});
	};

	handleVBclick = (event) => {
		this.setState({
			testoRicerca1: "",
			testoRicerca2: "",
			disabilitaInput1: false,
			counters: this.createCounterArrayOfObjects("", false, "VB"),
		});
	};
	handleJSclick = (event) => {
		this.setState({
			testoRicerca1: "",
			testoRicerca2: "",
			disabilitaInput1: false,
			btn_JS_clicked: true,
			counters: this.createCounterArrayOfObjects("", false, "JS"),
		});
	};
	handleSQLclick = (event) => {
		this.setState({
			testoRicerca1: "",
			testoRicerca2: "",
			disabilitaInput1: false,
			btn_SQL_clicked: true,
			counters: this.createCounterArrayOfObjects("", false, "SQL"),
		});
	};


	getClasseBtn = (b) => {
		debugger;
		if (!b) {
			return "coloryellow16 ml10";
		} else {
			return "colorwhite14 ml10";
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 divFisso">
						<div className="col-xs-6 bbb">
							<div className="col-xs-12 aaa">
								<div className="col-xs-2">
									<input
										onChange={this.handleChange}
										id="txtCerca"
										value={this.state.testoRicerca1}
										disabled={this.state.disabilitaInput1}
										className="form-control customInput"
										type="text"
										onInput={this.handleInput}
									></input>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="col-xs-2">
									<input
										type="text"
										value={this.state.testoRicerca2}
										id="txtCerca2"
										className="form-control customInput"
										onInput={this.handleInput2}
									></input>
								</div>
								<span
									className="glyphicon glyphicon-erase pulisci ml10"
									id="btPulisci"
									onClick={() => this.setVal(() => "")}
								></span>
								&nbsp;
								<label
									id="btnJS"									
									onClick={() => this.handleJSclick()}
								>
									JS
								</label>
								&nbsp;
								<label
									id="btnVB"									
									onClick={() => this.handleVBclick()}
								>
									VB
								</label>
								&nbsp;
								<label
									id="btnSQL"
									onClick={() => this.handleSQLclick()}
								>
									SQL
								</label>
							</div>
						</div>

						<div className="col-xs-9 ccc">
							<b
								className="btn-titolo wait"
							>
								Errori comuni
							</b>
						</div>
					</div>
					<div className="col-xs-12 empty100"></div>
				</div>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.handleDelete}
					></Counter>
				))}

				<div
					className="col-xs-12 divFooter"
				>
					<span
						id="btnToTop"
						className="glyphicon glyphicon-arrow-up btnToTop"
						onClick={this.ToTop()}
					></span>
				</div>
			</div>
		);
	}
	handleDelete = (counterid) => {
		const counters = this.state.counters.filter((c) => c.id !== counterid);
		this.setState({ counters });
	};
	ToTop = () => {
		window.scrollTo(0, 0);
	};

	createCounterArrayOfObjects = (
		testoDaCercare = "",
		ricerca2 = false,
		filtro = ""
	) => {
		let returnArr = [];
		let arrayy = ERRORI_COMUNI.split("ITEM");
		arrayy.shift(); //rimuovo la prima entrata perchè è ''

		let Regex, Regex2;
		if (!ricerca2) {
			Regex = new RegExp(testoDaCercare, "gi");
		} else {
			Regex = new RegExp(this.state.testoRicerca1, "gi");
			Regex2 = new RegExp(testoDaCercare, "gi");
		}

		arrayy.forEach((element, index) => {
			//creo l'oggetto
			let arrArgomenti = this.getArgomenti(element, testoDaCercare);

			let oggetto = {
				id: index + 1,
				value: 0,
				testo: element.substring(element.indexOf("</label>") + 8),
				Arg_Classi: arrArgomenti[0],
				Arg_VB: arrArgomenti[1],
				Arg_SQL: arrArgomenti[2],
				Arg_JS: arrArgomenti[3],
			};
			//aggiungo l'oggetto all'array
			if (!ricerca2) {
				if (filtro === "JS" && oggetto.Arg_JS === "true") {
					returnArr.push(oggetto);
				} else if (filtro === "VB" && oggetto.Arg_VB === "true") {
					returnArr.push(oggetto);
				} else if (filtro === "SQL" && oggetto.Arg_SQL === "true") {
					returnArr.push(oggetto);
				} else if (filtro === "" && Regex.test(oggetto.testo)) {
					returnArr.push(oggetto);
				}
			} else {
				if (Regex.test(oggetto.testo) && Regex2.test(oggetto.testo)) {
					returnArr.push(oggetto);
				}
			}
		});
		return returnArr;
	};

	getArgomenti = (str, testoDaCercare) => {
		let f = str
			.substring(str.indexOf("argomento") + 9, str.indexOf('"></label>'))
			.trim();

		let arrArgomenti = ["", "false", "false", "false"];
		if (f.includes("VB")) {
			arrArgomenti[0] += " VB";
			arrArgomenti[1] = "true";
		}
		if (f.includes("SQL")) {
			arrArgomenti[0] += " SQL";
			arrArgomenti[2] = "true";
		}
		if (f.includes("JS")) {
			arrArgomenti[0] += " JS";
			arrArgomenti[3] = "true";
		}
		if (arrArgomenti[0] === undefined) arrArgomenti[0] = "";
		if (testoDaCercare.trim() !== "") {
			arrArgomenti[0] = " cercato";
			//passo l'info di aggiungere la classe 'cercato'
		}
		return arrArgomenti;
	};
} //CHIUSURA CALSSE - non definire funzioni della calsse qui sotto!

export default Counters;
