export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'project' | 'contribution';
  projectId?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'autocommit-award',
    title: '회사 AI 경진대회 개인전 1등',
    description: 'AutoCommit 프로젝트로 AI 경진대회 개인전 1등 수상',
    date: '2025',
    type: 'award',
    projectId: 'autocommit'
  },
  {
    id: 'aishotformgen-award',
    title: '회사 AI 경진대회 팀전 2등',
    description: 'AIShotformGen (Insight Cast) 프로젝트로 AI 경진대회 팀전 2등 수상',
    date: '2025',
    type: 'award',
    projectId: 'aishotformgen'
  },
  {
    id: 'startup-300',
    title: '2020 학생 창업유망 팀 300',
    description: 'SCOP FAVORFIT 앱으로 300팀 최종선정',
    date: '2020.09.24',
    type: 'award',
    link: 'https://www.donga.com/news/article/all/20200924/103095258/1'
  },
  {
    id: 'connectedge-stabilization',
    title: 'ConnectEdge 프로젝트 안정화',
    description: '인수인계 프로젝트 안정화 및 오픈 준비 완료',
    date: '2025',
    type: 'project',
    projectId: 'connectedge'
  },
  {
    id: 'multiple-clients',
    title: '다양한 고객사와의 안정적인 B2B 통신 시스템 구축',
    description: '여러 고객사가 안정적으로 운영 중인 통신 시스템 구축',
    date: '2021-2024',
    type: 'contribution'
  }
];

