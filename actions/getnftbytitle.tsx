import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const GetNftsByTitle = async (title: string) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("NFT")
    .select("*")
    .ilike("Title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  } else {
    return data || [];
  }
};

export default GetNftsByTitle;
