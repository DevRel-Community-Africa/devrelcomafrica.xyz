import React from "react";
import { motion } from "framer-motion";

interface IProps {
  children: any;
  delay?: number;
  position?: string;
}

type IPosition = "top" | "left";

const AnimatedElement = ({
  children,
  delay = 0.6,
  position = "top",
}: IProps) => {
  const positionAlignment: any = {
    top: "y",
    left: "x",
  };
  return (
    <motion.div
      initial={{ [positionAlignment[position]]: 50, opacity: 0 }}
      whileInView={{ [positionAlignment[position]]: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
