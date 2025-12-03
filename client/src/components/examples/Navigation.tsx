import { Navigation } from "../Navigation";

export default function NavigationExample() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl">About Section</h2>
      </div>
      <div id="skills" className="h-screen flex items-center justify-center bg-muted/30">
        <h2 className="text-2xl">Skills Section</h2>
      </div>
      <div id="experience" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl">Experience Section</h2>
      </div>
      <div id="projects" className="h-screen flex items-center justify-center bg-muted/30">
        <h2 className="text-2xl">Projects Section</h2>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl">Contact Section</h2>
      </div>
    </div>
  );
}
