import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';
import { Link } from 'react-router-dom';

const SaunaCard = ({ sauna, index }) => (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="relative flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl md:h-[400px]"
    >
      <div className={`relative w-full md:w-2/3 h-full ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <motion.img
          src={sauna.image}
          alt={sauna.name}
          className="w-full h-full object-cover"
          variants={slideIn(index % 2 === 0 ? 'left' : 'right', 'spring', index * 0.2, 0.75)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <Link to={`/products/${sauna.slug}`}><button className="bg-accent text-white px-4 py-2 rounded-md">See More</button></Link>
        </div>
      </div>
      <div className={`p-16 md:w-1/3 ${index % 2 === 0 ? 'order-2' : 'order-1'} ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        <h3 className="text-3xl font-bold text-secondary mb-4">{sauna.name}</h3>
        <p className="text-gray-600">{sauna.description}</p>
      </div>
    </motion.div>
  );

export default SaunaCard;
