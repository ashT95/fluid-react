import React from "react";
import Fluid from "./fluid.jsx";
import "../../assets/stylesheets/application.scss";
import cactus from "./images/stencil-art-cactus.jpg";
import "./app.css";

export default function App() {
	return (
		<div className="background">
			<div className="fluid">
				<Fluid />
			</div>
		</div>
	);
}
