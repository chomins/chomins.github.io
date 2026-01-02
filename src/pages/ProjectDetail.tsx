import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link to="/projects" className="text-primary hover:underline">
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary mb-6"
          >
            <FiArrowLeft className="mr-2" />
            프로젝트 목록으로
          </Link>

          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.period} · {project.type === 'company' ? '회사 프로젝트' : '개인 프로젝트'} · {project.role}
                </p>
              </div>
              {project.featured && (
                <span className="px-3 py-1 text-sm bg-accent text-white rounded">Featured</span>
              )}
            </div>

            {project.links && (
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    <FiExternalLink className="mr-2" />
                    데모
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">성과 및 기여도</h2>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

