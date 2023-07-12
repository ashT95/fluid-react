import React, { useEffect, useState } from "react";

export default function Fluid() {
	const script = document.createElement("script");
	script.src = "./assets/js/fluid-init.js";
	script.async = true;
	document.body.appendChild(script);

	return (
		<div>
			<canvas
				className="fluid-canvas"
				style={{
					color: "transparent",
					height: "100vh",
					width: "100vw",
				}}
			></canvas>
		</div>
	);
}

/*	<img
				src="http://localhost:8080/assets/js/stencil-art-cactus.jpg"
				id="img"
			/>*/
