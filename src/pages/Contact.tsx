import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiGlobe, FiMapPin } from 'react-icons/fi';

export const Contact = () => {
  return (
    <div className="pt-24 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            궁금한 점이 있으시면 언제든지 연락주세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:cms4317@naver.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card hover:scale-105 transition-transform"
            >
              <FiMail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">cms4317@naver.com</p>
            </motion.a>

            <motion.a
              href="tel:010-2649-4947"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="card hover:scale-105 transition-transform"
            >
              <FiPhone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">010-2649-4947</p>
            </motion.a>

            <motion.a
              href="https://github.com/chomins"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card hover:scale-105 transition-transform"
            >
              <FiGithub className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400">github.com/chomins</p>
            </motion.a>

            <motion.a
              href="https://chomins.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="card hover:scale-105 transition-transform"
            >
              <FiGlobe className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-400">chomins.github.io</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="card"
          >
            <div className="flex items-start gap-4">
              <FiMapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">주소</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  서울시 구로구 금오로 882 천왕이펜하우스 8단지
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

