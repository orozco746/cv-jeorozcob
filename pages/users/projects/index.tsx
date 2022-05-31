import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <Head>
        <title> Projects | Juan Esteban Orozco</title>
      </Head>
      <div><i className='fas fa-users'> Projects</i></div> 
      
      <Link href='/'>
        <a>Home</a> 
      </Link>

    </div>
  )
}

export default index