
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://hndowzawhobbupfxubyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZG93emF3aG9iYnVwZnh1YnlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0Mjc2NDYsImV4cCI6MjAyOTAwMzY0Nn0.JjOzGz1Y_TQNMQG-ZrjSPMl8ZXp420urOXeIiZP_pmQ')