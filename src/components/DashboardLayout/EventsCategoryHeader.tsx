import React from 'react'
import Button from '../common/Button';

function EventsCategoryHeader() {
    const categoties = [{id: 1, name: "All Events", handleClick: "all-events"}, 
                        {id: 2, name: "My Events", handleClick: "my-events"}, 
                        {id: 3, name: "Streaming Events", handleClick: "streaming-events"},
                        {id: 4, name: "Trending Events", handleClick: "trending-events"},
                        {id: 5, name: "Saved Events", handleClick: "saved-events"},
                        {id: 6, name: "Posted Events", handleClick: "posted-events"},
                        {id: 7, name: "Events Around Me", handleClick: "around-me"},
                        {id: 8, name: "Sponsored", handleClick: "sponsored"},
                        {id: 9, name: "Suggested for you", handleClick: "suggested-for-you"},
                        {id: 10, name: "Recommended", handleClick: "recommended"},
                        {id: 11, name: "Continue Watching", handleClick: "continue-watching"},
                    ]
  return (
    <div className='flex w-full max-w-full flex-row items-center justify-start overflow-x-auto overscroll-x-contain m-0 scrollbar-none'>
        {categoties.map((category) => (
            <Button key={category.id} onClick={() => category.handleClick} className=" text-black px-3 py-2 
                                    bg-white border-e border-borderGray  whitespace-nowrap
                                    hover:bg-primary hover:text-white hover:cursor-pointer">
                {category.name}
            </Button>
        ))}
    </div>
  )
}

export default EventsCategoryHeader