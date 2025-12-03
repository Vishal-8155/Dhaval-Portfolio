import { ParticleBackground } from "../ParticleBackground";

export default function ParticleBackgroundExample() {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">3D Particle Background</h1>
          <p className="text-muted-foreground mb-8">
            Move your mouse and scroll to see the interactive effect
          </p>
          <div className="space-y-4">
            <p>Scroll down to see more...</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h2 className="text-3xl font-semibold">Keep scrolling...</h2>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h2 className="text-3xl font-semibold">Beautiful 3D depth effect!</h2>
      </div>
    </div>
  );
}
