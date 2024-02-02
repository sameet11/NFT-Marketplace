import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";
const ProfileHeader = () => {
  return (
    <div className="h-2/6 w-full relative mb-5">
      <div className="w-full h-5/6">
        <img src={"/profile-bg.png"} alt="bg" className="h-full w-full" />
      </div>
      <div>
        <Avatar className="h-14 w-14 absolute bottom-0 left-5">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <Skeleton className="h-14 w-14 bg-gray-600 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default ProfileHeader;
