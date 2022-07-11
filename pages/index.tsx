import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import News from '../components/News'
import Profile from '../components/Profile'

import { Post } from '../typing'
import { fetchPost } from '../utils/fetchPost'
import { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from '../AppContext'
import Router from 'next/router'
import SignIn from '../components/auth'
interface Props {
  posts: Post[]
}

const Home: NextPage = ({ posts }: Props) => {
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);

  console.log(posts)

  return (
    <div>
      <Head>
        <title>Linkedin2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster />

      {!user ?
        <SignIn />
        :
        <main className='flex flex-col overflow-scroll scrollbar-hide' style={{ maxHeight: '100vh' }}>
          {/* Header */}
          <div>
            <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
              <Header />
            </div>
          </div>


          {/* Mid */}
          <div className='bg-zinc-100'>
            <div className='grid grid-cols-9 mx-auto lg:max-w-6xl'>

              <Profile />

              <Feed postData={posts} />

              <News />
            </div>
          </div>
        </main>

      }

    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async () => {

  const posts = await fetchPost()
  return {
    props: { posts },
  };
}

