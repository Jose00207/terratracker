import type { Config } from "@netlify/functions"
import {updateFeature, getFeature} from "./supabase"
import {getSubs} from "./supabase"
import webpush, {type PushSubscription} from "web-push";

webpush.setVapidDetails(
    process.env.VAPID_SUBJECT!,
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
);

export default async () => {
    const response = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");

    const data = await response.json();
    const latest = data.features[0];

    const stored_latest = await getFeature();

    if (latest.id !== stored_latest.feature_id){
       await updateFeature(latest) 
       const subs = await getSubs()
       for (const sub of subs ?? []){
            await webpush.sendNotification(
                sub.subscription as unknown as PushSubscription,
                JSON.stringify({
                    title: "New earthquake",
                    body: `${latest.properties.title}`
                })
            )
       }
    }



    return new Response("ok");
}

export const config: Config = {
    schedule: "* * * * *"
};