import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types"

const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
)

export async function updateFeature(feature: GeoFeature){
    const {error} = await supabase.from("last_feature").update({
        feature_id: feature.id,
        feature_time: feature.properties.time,
        feature_place: feature.properties.place,
        feature_magnitude: feature.properties.mag
    }).eq("key", "latest_feature")

    if (error) {
        throw error
    }
}

export async function getFeature(){
    const {data, error} = await supabase.from("last_feature").select("*")
    
    if (error){
        throw error
    }

    return data[0]

}