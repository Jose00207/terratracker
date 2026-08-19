import Map from "../components/map";
import InfoBar from "../components/infobar";
import NavBar from "../components/navbar"
import {getLatest} from "../lib/usgs_api";
import Notifications from "../components/notifications"

export default async function Home() {
  const latest_data = await getLatest();
  return (
    <div className="flex h-full w-full">
      <Notifications></Notifications>
      <main>
        <NavBar></NavBar>
        <Map children = {latest_data}/>
        <InfoBar children = {latest_data}></InfoBar>
        <p className="text-lg font-inter absolute bottom-0 left-2">TerraTracker beta 0.1.6</p>
      </main>
    </div>
  );
}

