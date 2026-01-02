import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { projects } from '../data/projects';

export const Skills = () => {
  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'expert': return 90;
      case 'proficient': return 70;
      case 'familiar': return 50;
      default: return 0;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500';
      case 'proficient': return 'bg-blue-500';
      case 'familiar': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getProjectsBySkill = (skillName: string) => {
    return projects.filter(p => 
      p.technologies.some(tech => 
        tech.toLowerCase().includes(skillName.toLowerCase())
      )
    );
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <div className="pt-24 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            다양한 기술 스택과 숙련도를 소개합니다.
          </p>

          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">{skillCategories[category]}</h2>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => {
                    const percentage = getLevelPercentage(skill.level);
                    const relatedProjects = getProjectsBySkill(skill.name);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="card"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-lg">{skill.name}</span>
                            <span className={`px-2 py-1 text-xs rounded ${
                              skill.level === 'expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              skill.level === 'proficient' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            }`}>
                              {skill.level === 'expert' ? 'Expert' : skill.level === 'proficient' ? 'Proficient' : 'Familiar'}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {relatedProjects.length}개 프로젝트
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

