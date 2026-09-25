import Button from './Button';
import { ExternalLink } from 'lucide-react';
import {cn} from '../../lib/utils'
import { Children } from 'react';

interface EventDetailProps{
    name: string;
    image?: string;
    date: string;
    dateCreated?: string;
    createdBy?: string;
    locationType?: string;
    lastModified?: string;
    status?: string;
   
}
interface EventDetailInfoProps {
  info?: string;
  details?: string;
  className?: string;
  children?: React.ReactNode;
}

function InfoCard({ info, details, className, children }: EventDetailInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-textGray text-sm">{info}</span>
      <span className={cn("flex items-center text-black", className)}>
        <span>{children}</span>
        <span>{details}</span>
      </span>
    </div>
  );
}
function EventDetailCard({name, image, date, dateCreated, createdBy, locationType, lastModified, status}:EventDetailProps) {
  return (
    <div className="py-3 mt-2 border border-borderGray">
        <div className="p-3 flex justify-between">
            <div className="flex items-center">
                <img src={image} alt={name} className="w-30 h-20 p-3" />
                <div className="flex flex-col gap-3">
                    <span>{name}</span>
                    <span className="text-xs text-textGray">Event Date - {date}</span>
                </div>
            </div>
            <div>
                <Button className="bg-green-600 text-white rounded-md">
                    Social Event
                </Button>
            </div>
        </div>
        <div className="border-t border-dotted border-borderGray p-3 flex justify-between px-5">
            {/* BOttom line */}
            <div className="flex justify-around w-5/6 ">
                <InfoCard info="Date Created" details={dateCreated}/>
                <InfoCard info="Created By" details={createdBy}>
                    <span className=" bg-primary text-white rounded-full px-2 p-1 mr-2">A</span>
                </InfoCard>
                <InfoCard info="Location Type" details={locationType}/>
                <InfoCard info="Last Modified" details={lastModified}/>
                <InfoCard info="Status" details={status} className="text-green-700 justify-center">
                    <div className=" w-2 h-2 p-1 mr-1 bg-green-700 rounded-full align-middle" />
                </InfoCard>
            </div>
            <Button className="border border-purple-200 text-primary flex rounded-md items-center">
                <ExternalLink/><span>View More</span>
            </Button>
        </div>
    </div>
  )
}

export default EventDetailCard