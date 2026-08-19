import Map from "../components/map";
import InfoBar from "../components/infobar";
import {getData, getLatest} from "../api/usgs_api";

export default async function Home() {
  const data = await getData();
  const latestData = await getLatest();
  console.log(latestData)
  return (
    <div className="flex h-full w-full">
      <main>
        <Map children = {latestData}/>
        <InfoBar children = {latestData}></InfoBar>
        <p className="text-lg font-space-gortesk absolute bottom-0 left-2">TerraTracker</p>
      </main>
    </div>
  );
}

