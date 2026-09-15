import React from 'react'

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
    <div>
        {categoties.map((category) => (
            <button key={category.id} onClick={() => category.handleClick} className=" text-black px-2 hover:cursor-pointer mr-2">
                {category.name}
            </button>
        ))}
    </div>
  )
}

export default EventsCategoryHeader