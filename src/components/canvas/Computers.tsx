import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
const computer = useGLTF("./pc_3dprinter/scene.glb");
    return (
        <group>
            {/* Single soft key light (window / ceiling spill) */}
            <directionalLight
            position={[2, 4, 3]}
            intensity={0.45}          // MUCH lower
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0005}
            />

            {/* Very dim environment for reflections only */}
            <Environment preset="city" />

            <primitive
                object={computer.scene}
                scale={isMobile ? 0.85 : 0.75}
                position={isMobile ? [0, -1.6, 0] : [0, -2.9, -2]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </group>
        );
    };


    const ComputersCanvas = () => {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
    <>
        {isMobile ? (
        <></>
        ) : (
        <Canvas
            camera={{
                position: isMobile ? [10, 2, 6] : [20, 3, 5],
                fov: isMobile ? 30 : 25,
            }}
            dpr={isMobile ? 1 : [1, 2]}
        >
            <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
        )}
    </>
    );
};

export default ComputersCanvas;