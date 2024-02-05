import React from 'react'
import hairwoman from "../assets/images/hair-woman.png";
import davido from "../assets/images/davido.png";

export default function Hero() {
  return (
    <section className="hero">
    <div className="hero-content">
        <h1 className="hero-title h1">
            AN INNOVATIVE PLATFORM THAT <span>SUPPORTS ARTISTS.</span>
        </h1>
        <p className="hero-description">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are
        </p>
        <button className="cta">
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
    <div className="hero-images">
        <img src={hairwoman} alt="woman-hair" />
        <img src={davido} alt="Davido Adeleke" />
    </div>
</section>
  )
}
