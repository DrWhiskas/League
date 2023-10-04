import React from "react";
import Logo from '../../media/riotLogo.png'
import Connection from "./Connection";
import SocicalLinks from "./SocialLinks";
export default function Aside(){
    return (
			<aside className="aside">
				<img className="aside__logo" src={Logo} />
				<Connection />
				<SocicalLinks />
			</aside>
		);
}