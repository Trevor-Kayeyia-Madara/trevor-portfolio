/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarsBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: { value: "transparent" },
        },
        particles: {
          color: { value: "#06b6d4" },
          links: {
            enable: true,
            color: "#06b6d4",
            distance: 120,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          number: { value: 40 },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: 1.5 },
        },
      }}
    />
  );
}
