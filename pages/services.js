import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import dg from '../public/imagens/icons/design-grafico (1).png'
import dw from '../public/imagens/icons/designer-de-web.png'

import fm from '../public/imagens/icons/formulario-de-registro.png'

import fotophp from '../public/imagens/icons/php.png'
import myjs from '../public/imagens/icons/script-java (1).png'

import wd from '../public/imagens/icons/web-developer.png'

export const Services = () => {
  return (
    <div className={styles.whatido}>
  <div class={styles.ido}>
                <h2> SERVICES </h2>
                <h1> What I Do? </h1>
            </div>

            <div class={styles.boxes}>
                <div class={styles.box}>
                    <Image
                    src={dg}
                    />
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class={styles.box}>
                <Image
                    src={dw}
                    />
                    <h2>App Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                
                </div>

                <div class={styles.box}>
                <Image
                    src={fm}
                    />
                  
                    <h2>Forms</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class={styles.box}>
                <Image
                    src={fotophp}
                    />
                    <h2>PHP </h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>


                <div class={styles.box}>
                <Image
                    src={myjs}
                    />
                    <h2>Javascript aplications</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class={styles.box}>
                <Image
                    src={wd}
                    />
                    <h2> Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>


    </div>
  )
}

export default Services