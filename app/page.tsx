import Map from "../components/map";
import InfoBar from "../components/infobar";
import {getData, getLatest} from "../api/usgs_api";

export default async function Home() {
  const latestData = await getLatest();
  return (
    <div className="flex h-full w-full">
      hola
      {/* <main>
        <Map children = {latestData}/>
        <InfoBar children = {latestData}></InfoBar>
        <p className="text-lg font-space-gortesk absolute bottom-0 left-2">TerraTracker</p>
      </main> */}
    </div>
  );
}

