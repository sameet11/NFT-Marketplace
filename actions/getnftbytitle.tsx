import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { NFT } from "@/types";

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
    return (data as NFT[]) || [];
  }
};

export default GetNftsByTitle;
