import React from "react";
import AsideSign from "../components/SignIn/AsideSign";
import VideoEvent from "../components/SignIn/VideoEvent";
import '../styles/SignIn/index.css'
import Seraphine from '../media/SeraphineEvent.mp4';
export default function SignIn(){

    return (
			<div className="signIn">
				<AsideSign />
				<VideoEvent video={Seraphine} />
			</div>
		);
}