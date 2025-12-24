import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(container.current, {
      x: 100,
      duration: 1,
    });
  }, []); // dependency array

  return (
    <div ref={container}>
      <h1>Hello</h1>
    </div>
  );
}
