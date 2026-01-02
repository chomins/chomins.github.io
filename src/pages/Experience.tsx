import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { FiCalendar } from 'react-icons/fi';

export const Experience = () => {
  return (
    <div className="pt-24 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            엔터프라이즈 B2B 통합 분야에서의 경력과 주요 업무를 소개합니다.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 hidden md:block" />

                  <div className="md:ml-24 card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{exp.company}</h2>
                        <p className="text-lg text-primary mb-2">{exp.position}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <FiCalendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">주요 업무:</h3>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-primary mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">사용 기술:</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

