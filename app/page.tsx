import Map from "../components/map";
import InfoBar from "../components/infobar";
import NavBar from "../components/navbar"
import {getLatest} from "../api/usgs_api";

export default async function Home() {
  const latest_data = await getLatest();
  return (
    <div className="flex h-full w-full">
      <main>
        <NavBar></NavBar>
        <Map children = {latest_data}/>
        <InfoBar children = {latest_data}></InfoBar>
        <p className="text-lg font-inter absolute bottom-0 left-2">TerraTracker beta 0.1.0</p>
      </main>
    </div>
  );
}

