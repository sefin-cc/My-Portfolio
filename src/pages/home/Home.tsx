import bg from "../../assets/images/spikes.jpg";
import Front from "./Front";
import Achievements from "./Achievements";
import About from "./About";

export default function Home() {

  return (
    <div className="relative min-h-screen  overflow-hidden bg-(--color-white) w-full">
      {/* Background Image Layer with low opacity */}
      <div
        className="absolute inset-0 bg-repeat opacity-50 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto",
        }}
      />

        <div id="contact">
          <Front />
        </div>

        
        <div id="about">
          <About />
        </div>

        
        <div id="achievements">
          <Achievements />
        </div>


    </div>
  );
}
