import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";


const Websites = () => {
    return (
        <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
            {/* LEFT SIDE */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="bg-black-100 flex-[0.75] rounded-2xl p-8"
            >
                {/* OTHER WEBSITES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h3 className="mb-4 text-xl font-semibold text-white">
                        My Other Websites
                    </h3>

                    <a
                        href="https://3ddelights.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-white/10 bg-tertiary p-5 transition-all hover:border-white/30 hover:bg-black-200"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-bold text-white transition group-hover:text-[#915EFF]">
                                    3D Delights By Joe
                                </h4>
                                <p className="mt-1 text-sm text-secondary">
                                    High-quality custom prints, prototypes, and props.
                                </p>
                            </div>

                            <span className="ml-4 text-sm font-medium text-white/70 transition group-hover:text-white">
                                Visit →
                            </span>
                        </div>
                    </a>
                </motion.div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Websites, "websites");