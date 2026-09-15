import {cn} from "../../lib/utils";
interface ProfileStatsProps {
  title: string;
  num: number;
  className?: string;
  
}

function ProfileStats({title, num, className}:ProfileStatsProps) {
  return (
    <div className=" flex justify-between w-full text-sm text-black">
                  <div className="flex items-center gap-2">
                    <span className={cn("bg-blue-600 rounded-full  p-1", className)}/>
                    {title}
                  </div>
                  <div className="font-bold">{num}</div>
                </div>
  )
}

export default ProfileStats