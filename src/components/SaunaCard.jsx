import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';

const SaunaCard = ({ sauna, index }) => (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="relative flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <motion.img
          src={sauna.image}
          alt={sauna.name}
          className="w-full h-80 object-cover"
          variants={slideIn(index % 2 === 0 ? 'left' : 'right', 'spring', index * 0.2, 0.75)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <button className="bg-accent text-white px-4 py-2 rounded-md">See More</button>
        </div>
      </div>
      <div className={`p-16 md:w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'} ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        <h3 className="text-3xl font-bold text-secondary mb-4">{sauna.name}</h3>
        <p className="text-gray-600">{sauna.description}</p>
      </div>
    </motion.div>
  );

export default SaunaCard;
