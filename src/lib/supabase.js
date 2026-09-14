import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://qlxfhbljpdlhvfgrnvow.supabase.co";

const supabaseKey =
  "sb_publishable_Lq8CzdT2tmsGyBgyycjeHw_WX85H6RQ";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );