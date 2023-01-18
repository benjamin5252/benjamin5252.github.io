import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/components/ProjectCard/ProjectCard.module.scss'
import { hostname } from 'os'



export default function Home() {

    

  return (
    <>
      <div onClick={()=>{
            window.open('https://' + location.host + '/piano-with-react')
        }} className={styles.project_card_wrapper}>
            <h1>
                piano-with-react
            </h1>
      </div>
    </>
  )
}
