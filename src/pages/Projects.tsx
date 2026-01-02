import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projects';

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'company' | 'personal'>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const years = Array.from(new Set(projects.map(p => p.period.split('-')[0]))).sort().reverse();

  const filteredProjects = projects.filter((project) => {
    const matchesType = filter === 'all' || project.type === filter;
    const matchesYear = yearFilter === 'all' || project.period.includes(yearFilter);
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesYear && matchesSearch;
  });

  return (
    <div className="pt-24 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            엔터프라이즈 B2B 통합 및 개인 프로젝트를 소개합니다.
          </p>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-4">
              {(['all', 'company', 'personal'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === type
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {type === 'all' ? '전체' : type === 'company' ? '회사 프로젝트' : '개인 프로젝트'}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setYearFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  yearFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                전체 연도
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setYearFilter(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    yearFilter === year
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="프로젝트 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              검색 결과가 없습니다.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {project.period} · {project.type === 'company' ? '회사' : '개인'}
          </p>
        </div>
        {project.featured && (
          <span className="px-2 py-1 text-xs bg-accent text-white rounded">Featured</span>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 5}</span>
        )}
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="text-primary hover:underline font-medium inline-flex items-center"
      >
        자세히 보기 →
      </Link>
    </motion.div>
  );
};

