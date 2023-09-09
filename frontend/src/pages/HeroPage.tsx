import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export function HeroPage() {

  const backgroundImageUrl = "https://res.cloudinary.com/dcwt8jbja/image/upload/v1693074004/MemoryGame/Black_and_White_Modern_Science_Presentation_1_rjvdmq.jpg";
  const brainImgUrl = "https://res.cloudinary.com/dcwt8jbja/image/upload/v1693074310/MemoryGame/Group_1_1_cklrok.png"

  return (
    <div
      data-testid="hero-page"
      className="h-screen flex flex-col items-center justify-center bg-bcBlue p-10"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <motion.div
          className="shadow-lg py-[60px] md:px-2 flex flex-col items-center justify-center" 
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} 
          initial={{ scale: 0.8, rotate: 0}}
          animate={{
            scale: [0.8, 1.1, 1, 1],
            rotate: [0, 0, 0, 0],
            borderRadius: "10px"
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        >
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-8xl text-gray font-bold mb-2 items-center justify-center"
            initial={{ scale: 0.8, rotate: 0}}
          animate={{
            scale: [0.8, 1.1, 1, 1],
            rotate: [0, 0, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          >
            <div className="flex justify-center items-center">
              <img 
                src={brainImgUrl}
                alt="Brain"
                className="img-fluid d-md-block d-sm-block mw-100"
                style={{ width: '40%', maxWidth: '100%' }}
              />
            </div>
          </motion.h1>
        </div>

        <motion.div
          className="mt-12" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
        >
          
          <Link
            to="/game"
            className="mt-4 bg-bcBlue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-2xl"
          >
            Play
          </Link>
        </motion.div>

      </motion.div>  
    </div>
    
  );
}
