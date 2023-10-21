import React, { useState, useRef, useEffect } from 'react';
import '../../styles/SignIn/video.css'

export default function VideoEvent(video) {
	return (
		<section className="videoEvent">
			<video className='video' autoPlay={true} loop muted>
				<source src={video} />
			</video>
		</section>
	);
}
