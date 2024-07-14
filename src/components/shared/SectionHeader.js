import { motion } from 'framer-motion';
import { ANIMATION_DURATION } from '../../utils/constants';

const SectionHeader = ({ title }) => {
    return (
        <h3 className='text-5xl first-letter:text-primary my-20 '>
            {
                title.split("").map((l, i) => <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: ANIMATION_DURATION }}
                    key={l + i}
                    className=' -m-[0.4rem] hover:text-primary hover:border-b border-1 border-primary pb-1 hover:text-[3.2rem]' >{l} </motion.span>)
            }
        </h3>
    )
}

export default SectionHeader;