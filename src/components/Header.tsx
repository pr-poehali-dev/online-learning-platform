import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const Header = ({ isAdmin, setIsAdmin, setActiveTab }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">VikTorPlatform</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-700 hover:text-blue-600 transition-colors">Главная</button>
            <button onClick={() => setActiveTab('courses')} className="text-gray-700 hover:text-blue-600 transition-colors">Курсы</button>
            <button onClick={() => setActiveTab('testing')} className="text-gray-700 hover:text-blue-600 transition-colors">Тестирование</button>
            <button onClick={() => setActiveTab('profile')} className="text-gray-700 hover:text-blue-600 transition-colors">Профиль</button>
            <button onClick={() => setActiveTab('results')} className="text-gray-700 hover:text-blue-600 transition-colors">Результаты</button>
            <button onClick={() => setActiveTab('help')} className="text-gray-700 hover:text-blue-600 transition-colors">Помощь</button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant={isAdmin ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAdmin(!isAdmin)}
            >
              <Icon name="Settings" size={16} className="mr-2" />
              {isAdmin ? 'Админ' : 'Войти как админ'}
            </Button>
            <Button size="sm" onClick={() => setActiveTab('profile')}>
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;