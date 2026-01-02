import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiCode, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi';
import { projects } from '../data/projects';

const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              안녕하세요, <span className="text-primary">조민수</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              엔터프라이즈 B2B 통합 전문가 | Full-Stack Web Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              항상 새로운 기술을 배우며 모험하는 것을 즐기고, 협업을 위해 배려하며 성장하기 위해 노력합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                프로젝트 보기
              </Link>
              <Link to="/contact" className="btn-ghost">
                연락하기
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <FiArrowDown className="w-8 h-8 mx-auto animate-bounce text-gray-600 dark:text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                엔터프라이즈 B2B 통합 및 연동 분야에서 5년 이상의 경험을 보유한 풀스택 웹 개발자입니다. 
                EDIINT, EbXML, HTTP/HTTPS 등 다양한 프로토콜을 구현하고, OSGI 기반 플러그인 아키텍처와 
                분산 시스템 설계 경험을 보유하고 있습니다.
              </p>
              <p>
                설계부터 개발, 운영까지 전 과정을 담당하며, 다양한 고객사와의 안정적인 B2B 통신 시스템을 
                구축해왔습니다. React.js, Spring Framework, OSGI 등을 활용한 풀스택 개발 경험과 AWS 
                클라우드 환경에서의 서비스 개발 경험을 보유하고 있습니다.
              </p>
              <p>
                최근에는 AI 기술을 활용한 개발 도구 및 마케팅 콘텐츠 자동화 시스템을 개발하여 회사 AI 
                경진대회에서 개인전 1등, 팀전 2등을 수상한 경험이 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">핵심 기술 스택</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: FiCode, name: 'Java', color: 'text-orange-500' },
                { icon: FiCode, name: 'React', color: 'text-blue-500' },
                { icon: FiDatabase, name: 'Spring Boot', color: 'text-green-500' },
                { icon: FiCloud, name: 'AWS', color: 'text-yellow-500' },
                { icon: FiCpu, name: 'Docker', color: 'text-blue-600' },
                { icon: FiCode, name: 'TypeScript', color: 'text-blue-400' },
                { icon: FiCpu, name: 'Kafka', color: 'text-purple-500' },
                { icon: FiCode, name: 'Python', color: 'text-yellow-400' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <skill.icon className={`w-12 h-12 mx-auto mb-2 ${skill.color}`} />
                  <p className="font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/skills" className="btn-primary">
                전체 기술 스택 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">주요 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {project.period} · {project.type === 'company' ? '회사 프로젝트' : '개인 프로젝트'}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-primary hover:underline font-medium"
                  >
                    자세히 보기 →
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/projects" className="btn-primary">
                모든 프로젝트 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

