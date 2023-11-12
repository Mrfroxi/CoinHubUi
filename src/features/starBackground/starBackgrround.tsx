'use client'
import React,{useState , useRef , Suspense} from 'react'

import {Canvas , useFrame} from '@react-three/fiber'
import {Points ,PointMaterial } from '@react-three/drei'

const StarBackground = (props:any) => {


    const ref:any = useRef();
    const generateRandomSphere = () => {
      const sphere = [];
  
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        const z = Math.random() * 2 - 1;
  
        const distance = Math.sqrt(x * x + y * y + z * z);
        const normalizedX = x / distance;
        const normalizedY = y / distance;
        const normalizedZ = z / distance;
  
        sphere.push(normalizedX, normalizedY, normalizedZ);
      }
  
      return new Float32Array(sphere);
    };
  
    const [sphere] = useState(() => generateRandomSphere());

    useFrame((state, delta) => {
      ref.current.rotation.x -= delta/50;
      ref.current.rotation.y -= delta/60;
    })

 
    return (
      <group rotation={[0,0, Math.PI / 4]}>
          <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
          >
              <PointMaterial
                  transparent
                  color="$fff"
                  size={0.002}
                  sizeAttenuation={true}
                  dethWrite={false}
              />
          </Points>
      </group>
    )
  };
  
  const StarsCanvas = () => (
      <div className="w-full h-auto fixed inset-0 z-[20]">
          <Canvas camera={{position: [0, 0, 1]}}>
          <Suspense fallback={null}>
              <StarBackground />
          </Suspense>
          </Canvas>
      </div>
  )


export default StarsCanvas