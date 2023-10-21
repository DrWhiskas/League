import React from "react";
import Logo from '../../media/riotLogo.png'
import Connection from "./Connection";

import '../../styles/SignIn/aside.css'

export default function AsideSign() {
	return (
		<aside className="asideSign">
			<img className="aasideSign__logo" src={Logo} />
			<Connection />
		</aside>
	);
}