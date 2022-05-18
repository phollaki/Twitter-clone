import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  const [tweet, setTweet] = React.useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
      <img
      src="https://links.papareact.com/gll"
      className="h-14 w-14 mt-4 rounded-full"
      alt="" />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">

          <input
            value={tweet}
            onChange={(e)=>setTweet(e.target.value)}
            type="text"
            placeholder="What's happening?"
            className="h-24 w-full focus:outline-none placeholder:text-xl text-xl"
          />

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ease-out"/>
              <SearchCircleIcon className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ease-out"/>
              <EmojiHappyIcon className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ease-out"/>
              <CalendarIcon className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ease-out"/>
              <LocationMarkerIcon className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ease-out"/>
            </div>
            <button disabled={!tweet} className="bg-twitter disabled:opacity-40 text-white font-bold py-2 px-4 rounded-full">Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox