import Map from "../components/map";
import InfoBar from "../components/infobar";
import NavBar from "../components/navbar"
import {getData, getLatest} from "../api/usgs_api";

export default async function Home() {
  const latestData = await getLatest();
  return (
    <div className="flex h-full w-full">
      <main>
        <NavBar></NavBar>
        <Map children = {latestData}/>
        <InfoBar children = {latestData}></InfoBar>
        <p className="text-lg font-inter absolute bottom-0 left-2">TerraTracker beta 0.1.0</p>
      </main>
    </div>
  );
}

