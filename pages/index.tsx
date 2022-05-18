import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter clone</title>
      </Head>

      <main className="grid grid-cols-9 max-w-screen-xl mx-auto">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </main>

    </div>
  )
}

export default Home
