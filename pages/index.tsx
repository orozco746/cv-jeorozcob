import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Juan Esteban Orozco</title>
      </Head>
      <i className='fas fa-home'> Home</i>
      <div>
      <Link href='/admin/users'>
        <a> User admin</a>
      </Link>
      </div>
      <div>
      <Link href='/users/projects'>
        <a> Projects</a>
      </Link>
      </div>
    </div>
  )
}

export default Home
