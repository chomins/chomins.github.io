import { FiGithub, FiMail } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 조민수. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/chomins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:cms4317@naver.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href="https://chomins.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

