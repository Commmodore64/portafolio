import { ReactSVG } from "react-svg";
import barcode from "../img/barcode.svg";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import { useState } from "react";

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
    <div className="relative flex flex-col">
      <div className="absolute right-48 top-1/2 transform translate-y-44 h-96">
        <Canvas>
          <Cube />
          <Controls />
        </Canvas>
      </div>
      <div className="absolute left-0 top-52 text-xs sm:text-sm transform -rotate-90 origin-top-left text-white z-0 w-20 font-mono">
        <h1 className="whitespace-nowrap text-xs mt-2">software developer</h1>
      </div>
      <div className="absolute left-0 top-64 ml-2">
        <ReactSVG src={barcode} />
        <InvisibleButton />
      </div>
      <div className="absolute left-32 top-52">
        <h1 className="text-[#DBDBDB] font-mono text-3xl">
          I’m Cesar Marines <br /> Software/web Developer
        </h1>
      </div>
      <div className="fixed bottom-0 right-0 z-10 text-white font-mono text-xs">
        <h2 className="whitespace-nowrap p-3">#171717 // #F5F6F7</h2>
      </div>
    </div>
  );
}

export default Home;
