import { Plus } from "lucide-react";
import Button from "../common/Button";


function CreateNewCard() {
  return (
    <div className="w-full max-w-120 min-w-0 rounded-lg bg-[#000032] p-4 text-white shadow-md h-min-full">
        <div className=" relative flex flex-col items-start justify-center gap-4 pb-20">
            <img src="/public/Others/festivities.png" alt="festivities" className="absolute bottom-0 right-0 w-40 h-30" />
            <p className="text-3xl">Create and manage your events seamlessly</p>
            <p className="text-sm text-gray-300">you can now create and manage your events with ease...</p>
        </div>
        <Button className="bg-primary mt-0.5 w-full flex justify-center items-center gap-1 text-sm"><Plus width={10} height={10}/>Create New Event</Button>
    </div>
  )
}

export default CreateNewCard