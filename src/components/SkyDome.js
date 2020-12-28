import React, { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree, useLoader } from 'react-three-fiber';

/* const SkyDome = (props) => {

    const mesh = useRef(); // access mesh

    const texture = useMemo(() => new THREE.TextureLoader().load('/skydome.jpg'), []);

    return (
        <mesh
            {...props}
            ref={mesh}
        >
            <sphereBufferGeometry attach="geometry" args={[1000, 100, 100]}/>
            <meshPhongMaterial attach="material" map={texture} side={THREE.BackSide}/>
        </mesh>
    )
} */

const SkyDome = (props) => {

    const { scene } = useThree();
    const texture = useMemo(() => new THREE.CubeTextureLoader().setPath('kurt/').load([
        'space_rt.png', 
        'space_lf.png', 
        'space_up.png', 
        'space_dn.png', 
        'space_bk.png', 
        'space_ft.png']), []
    );

    scene.background = texture;
    return null;
}

export default SkyDome;