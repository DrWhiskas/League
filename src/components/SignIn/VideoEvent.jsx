import React, { useState, useRef, useEffect } from 'react';
import '../../styles/SignIn/video.css'
import Seraphine from '../../media/SeraphineEvent.mp4';

export default function VideoEvent(video) {
	return (
		<section className="videoEvent">
			<video className="video" autoPlay={true} loop muted>
				<source src={Seraphine} />
			</video>
		</section>
	);
}
