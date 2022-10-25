import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  const [tweet, setTweet] = React.useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://links.papareact.com/gll"
        className="mt-4 h-14 w-14 rounded-full"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            type="text"
            placeholder="What's happening with you?"
            className="h-24 w-full text-xl placeholder:text-xl focus:outline-none"
          />

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer rounded-full transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer rounded-full transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer rounded-full transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100" />
              <CalendarIcon className="h-5 w-5 cursor-pointer rounded-full transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer rounded-full transition-all duration-200 ease-out hover:scale-110 hover:bg-gray-100" />
            </div>
            <button
              disabled={!tweet}
              className="rounded-full bg-twitter py-2 px-4 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
