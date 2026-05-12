import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const AutoRotatingGroup = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Slowed down oscillation (frequency 0.3) between -45 and +45 degrees.
    groupRef.current.rotation.y = (Math.PI / 4) * Math.sin(time * 0.3);
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 1.1 : 1}
      position={isMobile ? [0, -3.5, 0] : [0, -3.5, 0]}
    >
      {children}
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Canvas camera={{ position: [0, 0, isMobile ? 15 : 14], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <AutoRotatingGroup isMobile={isMobile}>
        <Room />
      </AutoRotatingGroup>
    </Canvas>
  );
};

export default HeroExperience;

