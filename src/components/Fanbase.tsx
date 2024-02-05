import React from "react";
import wiz from "../assets/images/wiz.png"
import burna from "../assets/images/burna.png"
import sis from "../assets/images/sis.png"
import rema from "../assets/images/rema.png"
import boy from "../assets/images/boy.png"

export default function Fanbase() {
	return (
		<section className="fanbase">
			<div className="fanbase-content">
				<h2>
					JOIN TOP ARTISTS, BUILD YOUR <span>FANBASE</span>
				</h2>
				<p>
					Figma files can also be downloaded from our store. These files include
					the latest Figma features and are synced
				</p>
			</div>

			<div className="fanbase-artist">
				<img src={wiz} alt="" />
				<img src={burna} alt="" />
				<img src={sis} alt="" />
				<img src={rema} alt="" />
				<img src={boy} alt="" />
			</div>
		</section>
	);
}
