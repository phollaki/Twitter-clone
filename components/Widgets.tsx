import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from "react-twitter-embed"

function Widgets() {
  return (
    <div className="col-span-2 mt-2 px-2 hidden lg:inline  border-l-[1px] border-gray-100">
      <div className="flex items-center px-2 space-x-2 bg-gray-200 rounded-full ">
        <SearchIcon className="h-5 w-5 text-gray-400"/>
        <input type="text" placeholder="Search Twitter" className="bg-transparent focus:outline-none flex-1" />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{height: 1000}}
      />
    </div>
  )
}

export default Widgets