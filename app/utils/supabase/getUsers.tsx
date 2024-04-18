import { supabase } from "./supabseClient";

export async function getUsers():  Promise<{ id: number; name: string | null; username: string | null; email: string | null; }[]> {
    try {
      // Fetch users from Supabase
      const { data, error, count } = await supabase
        .from('users')
        .select('*')
        
  
      if (error) {
        throw error;
      }
  
      return data ??[]
    } catch (error) {
      //@ts-ignore
      console.error('Error fetching users:', error.message);
      throw error;
    }
  }