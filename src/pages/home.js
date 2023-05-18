import { ReactSVG } from "react-svg";
import barcode from "../img/barcode.svg";
import footerline from "../img/footer-line.svg";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import linea from "../img/lineas.png";
import "../index.css";

extend({ OrbitControls });

function Cube() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} /> {/* Ajusta los valores de escala aquí */}
      <meshBasicMaterial wireframe={true} />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}
function InvisibleButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 5) {
      // Aquí puedes realizar el evento que deseas después de 5 clics
      console.log("Se han realizado 5 clics");
      window.location.href = "https://i.ibb.co/RHYRPtM/cesarmiron.jpg";
    }
  };

  const buttonStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "60%",
    height: "60%",
    opacity: 0,
    //pointerEvents: "none",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      boton
    </button>
  );
}

function Home() {
  return (
    <div className="relative flex flex-col underline-none">
      <div className="absolute right-16 top-1/2 transform translate-y-80 h-80 lg:right-36 lg:top-1/2 lg:transform lg:translate-y-40 lg:h-80">
        <Canvas>
          <Cube />
          <Controls />
        </Canvas>
        <div className="ml-14">
          <ReactSVG src={footerline} />
        </div>
      </div>
      <div className="absolute left-0 top-52 text-xs sm:text-sm transform -rotate-90 origin-top-left text-white z-0 w-20 font-mono">
        <h1 className="whitespace-nowrap text-xs mt-2">software developer</h1>
      </div>
      <div className="absolute left-0 top-64 ml-2">
        <ReactSVG src={barcode} />
        <InvisibleButton />
      </div>
      <div
        className="absolute left-32 top-52 lg:left-32 lg:top-52"
        style={{ position: "fixed" }}
      >
        <h1 className="text-[#DBDBDB] font-mono text-3xl underline-none">
          <TypeAnimation
            cursor={false}
            className="type"
            sequence={[
              // Same String at the start will only be typed once, initially
              "I'm Cesar Marines \nWeb developer",
              1000,
              "I'm Cesar Marines \nSoftware developer",
              1000,
            ]}
            speed={50}
            style={{ whiteSpace: "pre-line" }}
            repeat={4}
          />
          <style global jsx>{`
            .type::after {
              content: "▋";
              animation: cursorBlink 1.1s infinite step-start;
            }

            @keyframes cursorBlink {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}</style>
        </h1>
      </div>
      <div className="absolute left-32 top-72">
        <img src={linea} alt="Linea" className="pt-5" />
      </div>
      <div className="fixed bottom-0 right-0 z-10 text-white font-mono text-xs">
        <h2 className="whitespace-nowrap p-3">#171717 // #F5F6F7</h2>
      </div>
    </div>
  );
}

export default Home;
