import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { achievements } from '../data/achievements';
import { FiAward, FiStar, FiExternalLink } from 'react-icons/fi';

export const Achievements = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return FiAward;
      case 'project': return FiStar;
      case 'contribution': return FiAward;
      default: return FiAward;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'award': return 'text-yellow-500';
      case 'project': return 'text-blue-500';
      case 'contribution': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="pt-24 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            수상 내역 및 주요 성과를 소개합니다.
          </p>

          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(achievement.type);
              const color = getColor(achievement.type);

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${color} flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {achievement.description}
                      </p>
                      <div className="flex gap-4">
                        {achievement.projectId && (
                          <Link
                            to={`/projects/${achievement.projectId}`}
                            className="text-primary hover:underline text-sm"
                          >
                            프로젝트 보기 →
                          </Link>
                        )}
                        {achievement.link && (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:underline text-sm"
                          >
                            링크 보기
                            <FiExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

