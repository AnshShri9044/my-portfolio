import { motion } from "framer-motion";

export default function Hero({ text }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 py-32 gap-20">
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold">{text}|</h2>
        <p className="mt-6 max-w-xl opacity-80">
          I build secure authentication systems, scalable APIs, and modern web applications.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-80 h-80 rounded-full border-4 border-blue-500 overflow-hidden">
            <img
              src="https://image2url.com/r2/default/images/1771776119409-4f71d530-62ed-4f82-8196-b1de7e3cb74b.png"
              alt="Ansh Shrivastav"
              className="w-full h-full object-cover rounded-full"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
