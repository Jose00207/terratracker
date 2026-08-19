import type { Config } from "@netlify/functions"
import {updateFeature, getFeature} from "./supabase"

export default async () => {
    const response = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");

    const data = await response.json();
    const latest = data[0];

    const stored_latest = await getFeature();

    if (latest.id !== stored_latest.feature_id){
       updateFeature(latest) 
    }

    return new Response("ok");
}

export const config: Config = {
    schedule: "* * * * *"
};