import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const GhostCore = (props) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#B042FF"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>

            {/* Outer Glow Ring */}
            <mesh scale={[1.5, 1.5, 1.5]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#B042FF" transparent opacity={0.05} wireframe />
            </mesh>
        </group>
    );
};

export default GhostCore;
