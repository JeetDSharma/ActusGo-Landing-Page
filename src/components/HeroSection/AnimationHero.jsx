import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
// import headerData from "../../locales/HeaderData";

const Header80Animation = () => {

    const { t, i18n } = useTranslation('landing');
    const isRTL = i18n.language === 'ar';
    const images = [
        { src: "/images/dynamic-sale-sign-pink.png", alt: "Image 1" },
        { src: "/images/dynamic-search-window.png", alt: "Image 2" },
        { src: "/images/dynamic-rectangle-yellow-1.png", alt: "Image 3" },
        { src: "/images/dynamic-price-tag-on-rectangle-pink.png", alt: "Image 4" },
        // { src: "/images/dynamic-arrow (1).png", alt: "Image 5" },
        { src: "/images/dynamic-instagram-logo.png", alt: "Image 6" },
    ]

    const { scrollYProgress } = useScroll();
    const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });

    // Define responsive breakpoints for transforms
    const scaleTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.2],
        [.7, 1.2] // Uniform scaling for mobile
    );

    const xLeftTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.01],
        ["-10vw", "0vw"]
    );
    const xRightTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.01],
        ["10vw", "0vw"]
    );

    return (
        <div className="h-[100vh] max-w-[1500px] w-full mx-auto overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="absolute bottom-0 left-0 top-0 z-[10]">
                <motion.div
                    className="flex transition-all max-w-full duration-500 flex-col gap-[18vw] md:pt-[90vh] pt-[30vh]"
                    style={{ y: useTransform(scrollYProgress, [0, 0.08], ["0vh", "-87.5vh"]) }}
                >
                    {images.slice(0, 6).map((image, index) => (
                        <motion.div
                            key={index}
                            style={{
                                scale: scaleTransform,
                                x: index % 2 === 0 ? xLeftTransform : xRightTransform,
                            }}
                            className={clsx("relative h-[35vw] max-w-full pt-[60%] sm:h-auto z-[0]", {
                                "left-[19vw] w-[30vw] md:w-[28vw] lg:w-[22vw]": index === 0,
                                "left-[52vw] mt-[-46vw] lg:left-[58vw] lg:w-[22vw]": index === 1,
                                "left-[14vw] mt-[-35vw] lg:w-[20vw]": index === 2,
                                "left-[64vw] mt-[-45vw] lg:w-[18vw]": index === 3,
                                "left-[44vw] mt-[-40vw] lg:w-[18vw]": index === 4,
                                "left-[34vw] mt-[-40] lg:w-[18vw]": index === 5,
                                
                            })}
                        >
                            <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover " />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div className="absolute max-w-full bottom-0 right-0 top-0 z-[-10]" style={{ y: useTransform(scrollYProgress, [0, 0.08], ["0vh", "-39.6vh"]) }}>
                <div className="flex flex-col gap-[26vw] pt-[50vh]">
                    {images.slice(6).map((image, index) => (
                        <motion.div
                            key={index}
                            style={{
                                scale: scaleTransform,
                                x: index % 2 === 0 ? xLeftTransform : xRightTransform,
                            }}
                            className={clsx(
                                "relative h-[35vw] pt-[120%] opacity-75 sm:h-auto",
                                {
                                    "w-[28vw] lg:w-[20vw]": index === 0,
                                    "right-[60vw] mt-[-44vw] lg:right-[54vw] lg:w-[18vw]": index === 1,
                                }
                            )}
                        >
                            <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover " />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Header80Animation;
