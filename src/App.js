import React, { Suspense } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import Box from './components/Box';
import Controls from './components/Controls';
import SkyDome from './components/SkyDome';
import Ocean from './components/Ocean';

const App = () => {

	return (
		<Canvas camera={{ zoom: 25, position: [0, 0, 500], far: 100000 }} style={{height: window.innerHeight, width: window.innerWidth}} >
			<Controls enableZoom={true} enablePan={true} enableDamping dampingFactor={0.2} />
			<ambientLight />
			<pointLight position={[20, 0, 0]} />
			<Box position={[-12, 0, 0]} />
			<Box position={[12, 0, 0]} />
			<Suspense fallback={null}>
				<SkyDome position={[0, 2, 1]} />
			</Suspense>
		</Canvas>
	);
}

export default App;
