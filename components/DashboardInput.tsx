"use client";
import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardInput = () => {
  const router = useRouter();
  const [value, setvalue] = useState<string>("");
  const debouncedvalue = useDebounce(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedvalue,
    };
    const url = qs.stringifyUrl({
      url: "/dashboard",
      query: query,
    });

    router.push(url);
  }, [router, debouncedvalue]);
  return (
    <input
      value={value}
      className="bg-gray-700 p-2 w-full max-h-28 overflow-y-auto rounded-xl"
      placeholder="Search Collections . . ."
      onChange={(e) => setvalue(e.target.value)}
    />
  );
};

export default DashboardInput;
