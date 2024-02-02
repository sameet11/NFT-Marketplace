"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

import { emailSchema } from "@/types";
const EmailSignin = () => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [check, setcheck] = useState<Boolean>(false);
  const supabase = createClientComponentClient<Database>();
  const handleEmailSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const check = emailSchema.safeParse(email);
    if (check.success) {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
        },
      });
      if (error) {
        toast.error("otp was not sent");
        console.log(error);
      } else {
        setcheck(true);
        router.refresh();
        toast.success("magic Link sent");
      }
      setemail("");
    } else {
      toast.error("Enter a valid Email Address");
      setemail("");
      setcheck(false);
    }
  };
  return (
    <form
      onSubmit={handleEmailSignin}
      className="
      w-full
      mt-2
      flex
      flex-col"
    >
      <input
        placeholder="Email address"
        className="h-12 md:w-1/5 w-3/4 rounded-xl mx-auto p-2 border text-black"
        type="email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        value={email}
      />
      <Button
        variant="outline"
        className="bg-gradient-to-b from-purple-700 to-pink-500 transition duration-300 ease-in-out h-14 mt-4 md:w-1/5 w-3/4 mx-auto text-black rounded-xl"
      >
        Submit
      </Button>
      {check && (
        <div className="text-white">Magic Link Sent. Check Your Email.</div>
      )}
    </form>
  );
};
export default EmailSignin;
