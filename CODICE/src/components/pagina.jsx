import React, { Component } from "react";
import Counters from "./counters";
import Ricerca from "./ricerca";

class pagina extends Component {
	state = {};
	render() {
		return (
			<div className="container mb100">
				<div className="row">
					<Ricerca></Ricerca>
				</div>
				<Counters></Counters>
			</div>
		);
	}
}

export default pagina;
