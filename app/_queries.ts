import { createClient } from "@/lib/supabase/client";

export async function getDeliveryEarnings() {
  const supabase = createClient();

  const { data, error } = await supabase.from("deliveries").select("amount");

  if (error) throw new Error(error.message);
  console.log(data);

  const total = data
    .reduce((sum, row) => sum + (row.amount || 0), 0)
    .toFixed(2);
  return total;
}
