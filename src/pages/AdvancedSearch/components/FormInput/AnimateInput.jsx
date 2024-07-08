import { motion, AnimatePresence } from "framer-motion";
import { useAdvancedForm } from "pages/AdvancedSearch/context/advancedSearchFormContext";
const AnimateInput = ({ input, dropDownOption, showInput }) => {
  const { dontShowChoice } = useAdvancedForm();
  if (dontShowChoice) {
    return input;
  }
  return (
    <>
      {dropDownOption}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {input}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AnimateInput;
