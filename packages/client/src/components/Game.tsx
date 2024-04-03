import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import './Game.css';

// THREE
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Billboard } from "@react-three/drei";
import { Perf } from 'r3f-perf'



// STATE
import {usePlayers} from '../hooks/usePlayers';
import {TPlayerOptions} from '../../../server/src/entities/Player';



function RotatingBox_Comp(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function Box_Comp(props: any) {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function Sphere_Comp(props: any) {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}




function Text_Comp(text: string) {
  return (
    <Text
      scale={[10, 10, 10]}
      color="black" // default
      anchorX="center" // default
      anchorY="middle" // default
    >
      {text}
    </Text>
    );
  }




function Player_Comp({x, y, color}: TPlayerOptions) {
  return (
    <mesh position={[x, 0, y]}>

      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
    );
}




function Instances_Comp({ count = 10000, temp = new THREE.Object3D() }) {
  const instancedMeshRef = useRef()
  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {

      let x = -50 + Math.random() * 100
      let z = -50 + Math.random() * 100

      temp.position.set(x, -0.65, z)
      temp.updateMatrix()
    // @ts-ignore
      instancedMeshRef.current.setMatrixAt(i, temp.matrix)
    }
    // Update the instance
    // @ts-ignore
    instancedMeshRef.current.instanceMatrix.needsUpdate = true
  }, [])
  return (
    // @ts-ignore
    <instancedMesh ref={instancedMeshRef} args={[, , count]}>
      <boxGeometry args={[0.95, 0.25, 0.95]}/>
      <meshPhongMaterial color={'#742d50'} />
    </instancedMesh>
  )
}



// function getPlayer(sessionId: string) {
//   const player = this._getPlayer(sessionId)
// }



export function Game() {

  const players = usePlayers();

  return (
    <div className="three__container">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <Instances_Comp />

        

        {players.map((p) => (
          <Player_Comp key={p.userId} {...p} />
        ))}


        <Sphere_Comp position={[0, 20, 0]}/>
        
        
        <OrbitControls />
        <Perf position="top-right" />

      </Canvas>
    </div>

    );
}