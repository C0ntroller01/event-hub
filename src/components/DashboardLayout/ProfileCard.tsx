import React from 'react'
import ProfileStats from './ProfileStats';



function ProfileCard() {
  return (
    <div className="flex flex-row gap-4 rounded-lg p-10 w-170">
            {/* picture and profile percentage */}
            <div className="flex flex-col items-center justify-center gap-2 border-r border-borderGray pr-4">
              {/* picture */}
              <div className="flex  items-center align-middle justify-center w-30 h-30 overflow-auto" 
                    style={{backgroundImage: "url('/public/Others/image.png')",
                            backgroundSize: "contain", 
                            backgroundPosition: "center", 
                            backgroundRepeat: "no-repeat"}}>
                <div className="flex ml-6.5 items-center justify-center w-25 h-25 overflow-hidden rounded-full">
                  <img src="/public/Others/ProfilePic.png" alt="Profile Picture" className="w-full h-full object-cover"  /></div>
              </div>
              {/* percentage */}
              <div className="flex flex-col items-center justify-center">
                <p>Profile Percentage (80%)</p>
                <p><span className="text-gray-500">Last login date:</span> 21-03-2024</p>
              </div>
            </div>
            {/* name and details */}
            <div className="flex flex-col items-start gap-2 pl-4">
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-center text-lg font-semibold flex items-center justify-center">
                Amori Ademakinwa 
                <img src="/public/Others/verify.png" alt="Verified" className="w-3 h-3 text-primary ml-2" />
                </p>
                <p className="text-center text-sm text-textGray">@makinwa123</p>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 w-80">
                <ProfileStats title="Posted Events" num={20}/>
                <ProfileStats title="Following" num={93} className={"bg-green-800"}/>
                <ProfileStats title="Followers" num={28} className={"bg-gray-600"}/>

              </div>
            </div>
    </div>
  )
}

export default ProfileCard