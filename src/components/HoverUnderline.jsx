import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HoverUnderline = ({ children }) => {
  return (
    <motion.div
      className="relative inline-block text-blue-500 font-semibold"
      whileHover={{ scaleX: 1 }} // Trigger animation on hover
      initial={{ scaleX: 0 }} // Set the initial scale to 0 (no underline)
      transition={{ duration: 0.3 }} // Animation duration
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 block w-full h-[2px] bg-blue-500"
        style={{ originX: 0 }} // Ensures the animation starts from the left
      />
    </motion.div>
  );
};

HoverUnderline.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is passed and is a node (React element)
};
export default HoverUnderline;
