import Map from "./map";
import InfoBar from "./infobar";
import {getData} from "../api/usgs_api";

export default async function Home() {
  const data = await getData();
  return (
    <div className="flex h-full w-full">
      <main>
        <Map children = {data}/>
        <InfoBar children = {data}></InfoBar>
      </main>
    </div>
  );
}

