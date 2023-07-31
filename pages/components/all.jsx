
import styles from '@/styles/myGallery.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

export const All = () => {
    return (
      <div className={styles.alljobs}>
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1 
      }}
     
    >
      <motion.img
      src="/imagens/galeria/galeria8.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.1 }}
      />

<motion.img
      src="/imagens/galeria/galeria9.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/galeria/galeria5.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />


<motion.img
      src="/imagens/galeria/galeria6.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/galeria/galeria3.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/galeria/galeria4.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </motion.div>
 

</div>

    );
  };
