"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProfileLoader from "./profileLoader";
import Collections from "./collections";
import ProfileDetails from "./profiledetails";

import { User } from "@/types";
const Profilemain = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const [user, setuser] = useState<User>();
  useEffect(() => {
    const getuser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.replace("/");
      }
      if (user) {
        const user_id = user.id;
        const { data, error: profilerror } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user_id)
          .single();
        if (profilerror) {
          router.refresh();
        }
        if (data) {
          setuser(data);
        }
      }
    };
    getuser();
  }, [router]);
  return (
    <div className="flex">
      {user ? <ProfileDetails User={user} /> : <ProfileLoader />}
      <Collections />
    </div>
  );
};
export default Profilemain;
