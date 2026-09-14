import { supabase } from "../lib/supabase";

export async function loadPlayer() {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .eq("user_id", "daniel")
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function savePlayer(player) {
  const { error } = await supabase
    .from("players")
    .upsert(player);

  if (error) {
    console.error(error);
  }
}