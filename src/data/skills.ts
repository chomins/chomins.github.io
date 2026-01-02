export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'protocol' | 'security' | 'ai' | 'tools' | 'database';
  level: 'expert' | 'proficient' | 'familiar';
  icon?: string;
}

export const skills: Skill[] = [
  // Backend
  { name: 'Java', category: 'backend', level: 'expert' },
  { name: 'Spring Boot', category: 'backend', level: 'expert' },
  { name: 'Spring Framework', category: 'backend', level: 'expert' },
  { name: 'OSGI', category: 'backend', level: 'proficient' },
  { name: 'Python', category: 'backend', level: 'proficient' },
  { name: 'Django', category: 'backend', level: 'proficient' },
  
  // Frontend
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'proficient' },
  { name: 'JavaScript', category: 'frontend', level: 'expert' },
  
  // Protocol
  { name: 'EDIINT (AS2)', category: 'protocol', level: 'expert' },
  { name: 'EbXML', category: 'protocol', level: 'proficient' },
  { name: 'HTTP/HTTPS', category: 'protocol', level: 'expert' },
  { name: 'EDI (EDIFACT, X12)', category: 'protocol', level: 'proficient' },
  
  // Security
  { name: 'BouncyCastle', category: 'security', level: 'proficient' },
  { name: 'SSL/TLS', category: 'security', level: 'proficient' },
  { name: 'XMLSec', category: 'security', level: 'proficient' },
  
  // AI/ML
  { name: 'Google Gemini API', category: 'ai', level: 'proficient' },
  { name: 'OpenAI GPT-4', category: 'ai', level: 'proficient' },
  { name: 'Anthropic Claude', category: 'ai', level: 'proficient' },
  
  // Database
  { name: 'MariaDB', category: 'database', level: 'proficient' },
  { name: 'MySQL', category: 'database', level: 'proficient' },
  { name: 'HikariCP', category: 'database', level: 'proficient' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Docker', category: 'tools', level: 'proficient' },
  { name: 'AWS', category: 'tools', level: 'proficient' },
  { name: 'Kafka', category: 'tools', level: 'proficient' },
  { name: 'Zookeeper', category: 'tools', level: 'proficient' },
  { name: 'Maven', category: 'tools', level: 'expert' },
  { name: 'Gradle', category: 'tools', level: 'proficient' }
];

export const skillCategories = {
  backend: 'Backend',
  frontend: 'Frontend',
  protocol: 'Protocol',
  security: 'Security',
  ai: 'AI/ML',
  database: 'Database',
  tools: 'Tools'
};

