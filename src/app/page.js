import Image from "next/image";
import Title from "./components/title";
import Links from "./components/links";
import Terminal from "./components/terminal";

export default function Home() {
  return (
    <div>
      {/* Title box */}
      <div className="centered-container top-padded fit center-single">
        <Title/>
        <Links/>
      </div>

      {/* Terminal box */}
      <div className="centered-container top-padded fit center-single">
        <Terminal/>
      </div>

    </div>
  );
}
