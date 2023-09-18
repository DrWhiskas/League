import React, { useState, useRef, useEffect } from 'react';
import Video from '../../media/Event.mp4';

export default function VideoEvent() {

	  
	return (
		<section className="videoEvent">
			<video width="640" height="360"  autoPlay loop>
				<source src={Video} />
			</video>
		</section>
	);
}
