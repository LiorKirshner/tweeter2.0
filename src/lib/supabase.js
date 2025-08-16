import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lasbvrtpvdhdjhueollx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2J2cnRwdmRoZGpodWVvbGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNTMwODAsImV4cCI6MjA3MDkyOTA4MH0.XSpSmboQ8Y_9FDLXUtjpc6UOceYMe2tpVanGTZiOGOE";

export const supabase = createClient(supabaseUrl, supabaseKey);
