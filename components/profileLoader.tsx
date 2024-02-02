import { Skeleton } from "@/components/ui/skeleton";
const ProfileLoader = () => {
  return (
    <div className="w-1/6 space-y-2">
      <Skeleton className="h-6 w-32 bg-gray-600 rounded-xl" />
      <Skeleton className="h-6 w-32 bg-gray-600 rounded-xl" />
      <Skeleton className="h-6 w-32 bg-gray-600 rounded-xl" />
      <div className="flex">
        <Skeleton className="h-5 w-20 rounded-xl bg-gray-600" />
        <Skeleton className="h-5 w-20 rounded-xl bg-gray-600 ml-2" />
      </div>
    </div>
  );
};
export default ProfileLoader;
