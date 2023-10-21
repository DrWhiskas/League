import React from "react";
import AsideSign from "../components/SignIn/AsideSign";
import VideoEvent from "../components/SignIn/VideoEvent";
import '../styles/SignIn/index.css'

export default function SignIn(){
    return (
			<div className="signIn">
				<AsideSign />
				<VideoEvent />
			</div>
		);
}