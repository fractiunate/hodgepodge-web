import { useEffect, useRef, type JSX } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } 
  }, [isInView]);

  return (
    <div
    ref={ref}
    style={{
        position: "relative",
        width: width,
        overflow: "hidden",
      }}>
      <motion.div
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.20 }}>
        {children}
      </motion.div>
      {/* <motion.div
      variants={{
        hidden: { left: 0 },
        visible: { left: '100%' },
      }}
      initial="hidden"
      animate={slideControls}
      transition={ { duration: 0.5, delay: 0.2, ease: 'easeIn' } }
      style={{
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        zIndex: 20,
        background: 'black',
      }}
      >
        
        </motion.div> */}
    </div>
  );
};
