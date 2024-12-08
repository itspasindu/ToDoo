import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrwjfmtgqjwwskvnyklz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlyd2pmbXRncWp3d3Nrdm55a2x6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MzE3NzYsImV4cCI6MjA0OTIwNzc3Nn0.-fG6Nrhs6Sd9rJfgU1HLxslLjqSN0XrnoPMGLrFxCvU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);