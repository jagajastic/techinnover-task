import React from "react";
import artist1 from "../assets/images/artist1.png"
import artist2 from "../assets/images/artist2.png"
import artist3 from "../assets/images/artist3.png"

export default function Artist() {
	return (
		<section className="artist">
			<div className="artist-content">
				<h3>"WE HELP ARTISTS FIND THEIR FANS"</h3>
				<p>
					Figma files can also be downloaded from our store. These files include
					the latest Figma features and are synced
				</p>
			</div>
			<div className="artist-images">
				<img src={artist1} alt="" />
				<img src={artist2} alt="" />
				<img src={artist3} alt="" />
			</div>
		</section>
	);
}
