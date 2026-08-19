import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types"

const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
)

export default async (request: Request) => {
    const subscription = await request.json();

    console.log(subscription)

    const { error } = await supabase.from("push_subscriptions").insert({subscription: subscription})

    console.log(error)

    if (error) {
        return new Response(error.message, { status: 500 });
    }
}