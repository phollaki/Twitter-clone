import React from 'react'
import {HomeIcon, UserIcon, MailIcon, DotsCircleHorizontalIcon, CollectionIcon, BookmarkIcon, HashtagIcon, BellIcon} from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
      <div className="space-y-3 col-span-2 px-5 py-5 border-r-[1px] border-gray-100">
        <img className="ml-4 h-8 w-8" src="https://links.papareact.com/drq"/>
        <SidebarRow Icon={HomeIcon} link="/" title="Home"/>
        <SidebarRow Icon={HashtagIcon} link="/" title="Explore"/>
        <SidebarRow Icon={BellIcon} link="/" title="Notification"/>
        <SidebarRow Icon={MailIcon} link="/" title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} link="/" title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} link="/" title="Lists"/>
        <SidebarRow Icon={UserIcon} link="/" title="Sign Out"/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} link="/" title="More"/>
        <button className="bg-sky-400 h-10 rounded-full text-white w-full">Tweet</button>
      </div>
  )
}

export default Sidebar