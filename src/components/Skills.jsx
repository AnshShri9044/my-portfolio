import { motion } from "framer-motion";
import { skillsData } from "../data/data";

export default function Skills() {
  return (
    <section id="skills" className="px-10 py-32">
      <h3 className="text-3xl font-bold mb-12">Technical Skills</h3>
      <div className="space-y-8 max-w-3xl">
        {skillsData.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-3 bg-blue-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
