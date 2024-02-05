import React from "react";
import career from "../assets/images/career.png";

export default function Career() {
	return (
		<section className="career">
			<div className="career-image">
				<img src={career} alt="Career Pursuit" />
			</div>
			<div className="career-content">
				<h2>YOUR CAREER IS IN YOUR HANDS</h2>
				<p>
					Figma files can also be downloaded from our store. These files include
					the latest Figma features and are synced with the Webflow template.
				</p>
				<p>
					Figma files can also be downloaded from our store. These files include
					the latest Figma features and are synced
				</p>
				<p>
					Figma files can also be downloaded from our store. These files include
					the latest Figma features and are synced with the Webflow template.
				</p>

				<button className="cta-ghost">
					Try it now
					<svg
						width="17"
						height="15"
						viewBox="0 0 17 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Arrow - Left">
							<path
								id="Stroke 1"
								d="M15.75 7.27441L0.75 7.27441"
								stroke="#E1F16B"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								id="Stroke 3"
								d="M9.7002 13.2988L15.7502 7.27476L9.7002 1.24976"
								stroke="#E1F16B"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</svg>
				</button>
			</div>
		</section>
	);
}
