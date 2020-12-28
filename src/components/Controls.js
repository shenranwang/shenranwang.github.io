import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useFrame, useThree, extend } from 'react-three-fiber';

extend({ OrbitControls });

const Controls = (props) => {
    const { camera, gl } = useThree();
    const ref = useRef();
    
    useFrame(() => ref.current.update());

    return (
        <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
    );
}

export default Controls;