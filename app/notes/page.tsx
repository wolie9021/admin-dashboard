import { supabase } from "app/utils/supabase/supabseClient";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  try {
    // Fetch data from Supabase
    //@ts-ignore
    const { data, error } = await supabase.from<Payment>('users').select('*');
    console.log(data)
    if (error) {
      throw error;
    }

    return data || []; // Return the fetched data or an empty array if there's no data
  } catch (error) {
    //@ts-ignore
    console.error('Error fetching data:', error.message);
    return []; // Return an empty array in case of an error
  }
}

export default async function SupTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
