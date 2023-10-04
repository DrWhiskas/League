import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { BsXbox } from 'react-icons/bs';



export default function SocicalLinks() {
	return (
		<div className="social">
			<div className="social__content">
				<div className="social__content__icon">
					<BsFacebook />
				</div>
				<div className="social__content__icon">
					<FcGoogle />
				</div>
				<div className="social__content__icon">
					<BsApple />
				</div>
				<div className="social__content__icon">
					<BsXbox />
				</div>
			</div>
		</div>
	);
}
