import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabaseUrl = "https://nwynmtfkwgudhpmwzrvc.supabase.co";
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
