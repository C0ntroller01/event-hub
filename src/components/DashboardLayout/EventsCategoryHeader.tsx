import React from 'react'
import Button from '../common/Button';

interface EventCatHeaderProps{
    id: number;
    name: string;
    handleClick: ()=> void
}
interface EventCatHeaderArr{
    arr: EventCatHeaderProps[]
}
function EventsCategoryHeader({arr}: EventCatHeaderArr) {
  return (
    <div className='flex w-full max-w-full flex-row items-center justify-start overflow-x-auto overscroll-x-contain m-0 scrollbar-none'>
        {arr.map((category) => (
            <Button key={category.id} onClick={() => category.handleClick} className=" text-black px-3 py-2 
                                    bg-white border-e border-borderGray  whitespace-nowrap
                                    hover:bg-primary hover:text-white hover:cursor-pointer
                                    transition-all ease-in duration-200 ">
                {category.name}
            </Button>
        ))}
    </div>
  )
}

export default EventsCategoryHeader