import GetNftsByTitle from "@/actions/getnftbytitle";
import DashboardContent from "@/components/DashboardContent";
import DashboardInput from "@/components/DashboardInput";
import React from "react";

interface DashboardProps {
  searchParams: { title: string };
}
const Dashboard: React.FC<DashboardProps> = async ({ searchParams }) => {
  const NFTs = await GetNftsByTitle(searchParams.title);

  return (
    <div className="p-5 w-5/6 text-gray-300 relative">
      <div className="bg-gray-700 w-2/5 rounded-xl mb-5 max-h-28">
        <DashboardInput />
      </div>
      <DashboardContent nfts={NFTs} />
    </div>
  );
};
export default Dashboard;
