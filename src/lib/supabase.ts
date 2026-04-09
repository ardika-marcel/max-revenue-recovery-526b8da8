import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vywkkeqeptjmbdqhjzdf.supabase.co";
const supabaseAnonKey = "sb_publishable_3fg_d951HBlBPw6INiCcaw_dXju8uON";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
