import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useEffect, useState } from "react";

export default function Starfield() {
  const [presetReady, setPresetReady] = useState(false);

  useEffect(() => {
    loadStarsPreset(tsParticles).then(() => setPresetReady(true));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{
        background: "radial-gradient(ellipse at 75% 15%, #20251a, transparent 55%), #111310",
      }}
    >
      {presetReady && (
        <Particles
          id="starfield"
          options={{
            preset: "stars",
            background: { color: "#111310" },
            fullScreen: { enable: false },
            fpsLimit: 60,
            detectRetina: true,
            particles: {
              color: { value: "#d3f36b" },
              opacity: {
                value: { min: 0.15, max: 0.48 },
                animation: { enable: true, speed: 0.3, sync: false },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.12,
                  color: "#d3f36b",
                },
              }
            },
          }}
        />
      )}
    </div>
  );
}