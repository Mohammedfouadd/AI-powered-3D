import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";

import state from "../store";
import {CustomButtom} from "../Components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro &&
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8" />
          </motion.header>
          <motion.dev className="home-content" {...headContainerAnimation}>
            <motion.dev {...headTextAnimation}>
              <h1 className="head-text">
                LET &apos;S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.dev>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
              <CustomButtom
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.dev>
        </motion.section>}
    </AnimatePresence>
  );
};

export default Home;
