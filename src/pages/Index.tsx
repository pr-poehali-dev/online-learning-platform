import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import CoursesSection from '@/components/CoursesSection';
import TestingSection from '@/components/TestingSection';
import ProfileSection from '@/components/ProfileSection';
import ResultsSection from '@/components/ResultsSection';
import HelpSection from '@/components/HelpSection';
import SearchSection from '@/components/SearchSection';
import AdminSection from '@/components/AdminSection';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Смазка и контроль чистоты',
      description: 'В учебном курсе описываются методы контроля по недопущению загрязнения ГСМ. Приводятся примеры и типы загрязнений, а также описывается последующие процессы после загрязнения технических жидкостей.',
      duration: '1 час',
      level: 'Начальный',
      students: 234,
      rating: 4.6,
      progress: 0,
      image: '🔧'
    }
  ]);

  const handleAddCourse = (newCourse: Omit<{id: number; title: string; description: string; duration: string; level: string; students: number; rating: number; progress: number; image: string}, 'id' | 'students' | 'rating' | 'progress'>) => {
    const course = {
      ...newCourse,
      id: Math.max(...courses.map(c => c.id), 0) + 1,
      students: 0,
      rating: 5.0,
      progress: 0
    };
    setCourses([...courses, course]);
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const testResults: Array<{name: string; score: number; date: string}> = [];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="home" className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Обучайтесь с нами 
              <span className="text-blue-600"> эффективно</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Платформа для онлайн обучения с интерактивными курсами, тестированием и персональным подходом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setActiveTab('courses')}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setActiveTab('courses')}
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Каталог курсов
              </Button>
            </div>
          </div>
        </section>

        <section id="search" className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Поиск курсов, материалов, тестов..."
                className="pl-10 h-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="testing">Тестирование</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="results">Результаты</TabsTrigger>
            <TabsTrigger value="help">Помощь</TabsTrigger>
            <TabsTrigger value="search">Поиск</TabsTrigger>
            {isAdmin && <TabsTrigger value="admin">Админпанель</TabsTrigger>}
          </TabsList>

          <TabsContent value="courses">
            <CoursesSection courses={filteredCourses} isAdmin={isAdmin} />
          </TabsContent>

          <TabsContent value="testing">
            <TestingSection />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="results">
            <ResultsSection testResults={testResults} />
          </TabsContent>

          <TabsContent value="help">
            <HelpSection />
          </TabsContent>

          <TabsContent value="search">
            <SearchSection 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              filteredCourses={filteredCourses}
            />
          </TabsContent>

          {isAdmin && (
            <TabsContent value="admin">
              <AdminSection 
                courses={courses}
                onAddCourse={handleAddCourse}
                onDeleteCourse={handleDeleteCourse}
              />
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};

export default Index;