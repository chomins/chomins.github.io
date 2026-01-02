export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'inspien',
    company: '인스피언주식회사',
    position: '선임연구원 (풀스택 개발)',
    period: '2021.07 ~ 현재',
    description: '엔터프라이즈 B2B 통합 및 연동 시스템 설계 및 개발',
    responsibilities: [
      '클라우드 기반 EDI 전송 플랫폼 Connect 2.0 개발',
      'JAVA 기반 OSGI 프레임워크를 통한 백엔드 API 및 서비스 개발',
      'React.js를 통한 플랫폼 프론트엔드 개발',
      'Spring 프레임워크를 활용한 백엔드 API 및 서비스 개발',
      'Apache Kafka를 이용한 컨슈머 및 프로듀서 개발',
      'AWS (EC2, S3, EFS) 등을 이용한 서비스 개발',
      'Docker, Docker-Compose를 통한 서비스 환경 구현 및 Image 관리',
      'Swagger (Open API)를 이용한 API 문서화'
    ],
    technologies: ['Java', 'React', 'Spring Boot', 'OSGI', 'Kafka', 'AWS', 'Docker', 'TypeScript']
  },
  {
    id: 'designstudio',
    company: '(주)디자인스튜디오 에이',
    position: '웹 개발자',
    period: '2020.12 ~ 2021.07',
    description: '전자정부 프레임워크 기반 웹 서비스 개발',
    responsibilities: [
      '시흥시와 서울여대와 연계하여 문화융복합 시스템인 ArtDive 사이트 개발',
      '전자정부 프레임워크 기반 MVC 구조 웹 서비스 개발',
      'Ajax, jQuery 등을 이용한 비동기 처리 개발 진행',
      '개발문서 관리 및 협업툴 사용 (Notion, Git)'
    ],
    technologies: ['Java', 'Spring', 'JSP', 'JavaScript', 'jQuery', 'MySQL']
  },
  {
    id: 'scop',
    company: '(주)SCOP',
    position: '웹 개발자',
    period: '2020.03 ~ 2020.05, 2020.10 ~ 2020.12',
    description: '웹앱 및 웹 서비스 개발',
    responsibilities: [
      'Ionic Framework를 이용한 웹앱 개발 및 유지보수',
      'FavorFit 웹에 Kakao 로그인 API 도입',
      'Django를 이용한 MVC 구조의 웹 서비스 개발',
      '쇼핑몰 DB 설계 및 비즈니스 로직 구현',
      'Kakao API와 Google API를 통한 소셜 로그인 기능 구현'
    ],
    technologies: ['Python', 'Django', 'Ionic', 'Angular', 'Firebase', 'TypeScript']
  },
  {
    id: 'deliverylab',
    company: '딜리버리랩',
    position: '개발팀 인턴',
    period: '2020.06 ~ 2020.08',
    description: '관리자 페이지 리팩토링 및 웹 크롤링',
    responsibilities: [
      'PHP 기반 관리자 페이지 리팩토링',
      'Ajax, jQuery 등을 이용한 비동기 처리 개발 진행',
      'Bootstrap을 이용하여 반응형 웹페이지 개발',
      '중복코드 제거, 쿼리문 수정, UI/UX 개선 등 리팩토링을 통한 생산성 및 효율성 향상',
      'Python을 이용한 경쟁사 가격 웹 크롤링'
    ],
    technologies: ['PHP', 'Python', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL']
  }
];

