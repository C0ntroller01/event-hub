import React from 'react'
interface EventSumCard{
    name: string;
    rate: number;
    image: string
}
function EventSumCard({name, image, rate}:EventSumCard) {
  return (
    <div className="flex justify-center items-center">
        <img src={image} alt={name} className="w-14 h-14" />
        <div className="flex flex-col justify-center items-start gap-3 m-2">
            <span className="text-4xl font-bold">{rate}</span>
            <span className="text-textGray ">{name}</span>
        </div>
    </div>
  )
}

export default EventSumCard