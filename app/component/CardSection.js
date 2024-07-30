'use client'
import { useEffect, useRef } from 'react'
import { animate, motion, stagger, useInView } from 'framer-motion'
import { GiFruitTree, GiHealthPotion, GiStripedSun } from "react-icons/gi";
import Card from './Card';

export default function CardSection() {

    const ref = useRef(null) 
    const isInView = useInView(ref, { once:true })
    console.log(isInView)

    useEffect(()=> {
        if(isInView) {
            animate('.me', { y:[400, 0], opacity:[0, 1] }, { delay: stagger(0.3), duration:0.3 })
        }
    }, [isInView])

  return (
    <>
        <motion.h2 
            ref={ref}
            className="mt-24 text-2xl sm:text-3xl md:text-4xl text-center font-bold italic"
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once: true }}
            transition={{
                ease:'easeInOut',
                duration:0.5
            }}
        >   The Seeds</motion.h2>
        <motion.div className="grid grid-col-1 md:grid-cols-3 mt-24 gap-8">
          <div className='me'>
            <Card Icon={GiFruitTree} title={'Fast Grow'} text={'Apricot trees are relatively fast-growing, reaching maturity in 3 to 4 years. With proper care and optimal conditions, they can grow about 24 inches per year, rewarding you with delicious fruit and beautiful blossoms quickly'} />
          </div>
          <div className='me'>
            <Card Icon={GiHealthPotion} title={'Super Healthy'} text={'Apricots are a nutritional powerhouse, packed with vitamins A and C, fiber, and antioxidants. They promote eye health, boost the immune system, aid digestion, and support heart health. Enjoy these sweet and juicy fruits for a delicious and healthy treat!'} />
          </div>
          <div className='me'>
            <Card Icon={GiStripedSun} title={'Versatile'} text={'Dried apricots are a versatile and nutritious snack. They can be enjoyed on their own, added to trail mixes, cereals, and salads, or used in baking and cooking. Rich in fiber and essential nutrients, dried apricots are perfect for a healthy, energy-boosting treat anytime.'} />
          </div>
        </motion.div>
    </>
  )
}
