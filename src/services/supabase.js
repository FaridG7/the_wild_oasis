import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pxwzpgckuburktfmhygk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4d3pwZ2NrdWJ1cmt0Zm1oeWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzOTA3MzgsImV4cCI6MjAxMzk2NjczOH0.pwSGoWnZD307c-wRZ9Q1rk6Of40jPtP8d3EeMmPl5Us";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
