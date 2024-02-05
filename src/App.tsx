import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Career from "./components/Career";
import Stats from "./components/Stats";
import Artist from "./components/Artist";
import Fanbase from "./components/Fanbase";

function App() {
	return (
		<div className="App">
			{/* <!-- header section --> */}
			<header>
				<Navigation />
				{/* <!-- Hero section --> */}
				<Hero />
			</header>

			<main>
				{/*  CAREER SECTION  */}
				<Career />

				{/*  STATS SECTION  */}
				<Stats />

				{/* ARTIST AND FAN SECTION */}
				<Artist />

				{/* FAN BASE */}
				<Fanbase />
			</main>
			{/* FOOTER SECTION  */}
			<Footer />
		</div>
	);
}

export default App;
