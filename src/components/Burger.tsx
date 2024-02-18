import { BurgerProviderContext } from "@/context/BurgerOpen";
import { motion } from "framer-motion";
import { memo, useContext } from "react";

const variants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

const Burger = memo(() => {
  const { open, setOpen } = useContext(BurgerProviderContext);

  return (
    <motion.div
      className="cursor-pointer w-6 h-6 fixed top-5 right-6 z-20"
      animate={open ? "open" : "closed"}
      onClick={() => setOpen(!open)}
    >
      <motion.div
        className="w-7 h-0.5 absolute right-0 bg-accent-light dark:bg-accent-dark top-1/4"
        variants={variants}
      />
      <motion.div
        className="w-5 h-0.5 absolute right-0 bg-accent-light dark:bg-accent-dark top-1/2"
        variants={{
          ...variants,
          open: { rotate: -45, width: "1.75rem", top: "6.5px" },
        }}
      />
    </motion.div>
  );
});

export { Burger };
