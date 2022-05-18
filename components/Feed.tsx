import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from "./TweetBox"

function Feed() {
  return (
    <div className="lg:col-span-5 col-span-7">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl p-5 pb-0 font-bold">Home</h1>
        <RefreshIcon className="h-8 w-8 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>
      <TweetBox/>
    </div>
  )
}

export default Feed