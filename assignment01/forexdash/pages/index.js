import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='Container' >

      <div className='moveto--dash'>
        <Link href="/dashboard"><a className='title'>Move To DashBoard</a></Link>
      </div>


    </div>
  )
}
