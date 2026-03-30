import Header from "../components/sections/Header";
import Welcome from "../components/sections/Welcome";
import Bar from "../components/sections/Bar";
import Frotier from "../components/sections/Frotier";
import Immersion from "../components/sections/Immersion";

export default function Home() {
  return <>
    <Header />
    <Welcome />
    <Bar />
    <Frotier />
    <Immersion />
    <div className="fmt-[100/1920]" />
  </>;
}
