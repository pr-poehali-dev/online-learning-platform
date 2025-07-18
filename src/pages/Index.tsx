import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Основы программирования',
      description: 'Изучите базовые принципы программирования на примере Python',
      duration: '4 недели',
      level: 'Начальный',
      students: 1247,
      rating: 4.8,
      progress: 65,
      image: '🐍'
    },
    {
      id: 2,
      title: 'Веб-разработка',
      description: 'Создавайте современные веб-приложения с React и TypeScript',
      duration: '8 недель',
      level: 'Средний',
      students: 892,
      rating: 4.9,
      progress: 32,
      image: '🌐'
    },
    {
      id: 3,
      title: 'Анализ данных',
      description: 'Работа с данными, визуализация и машинное обучение',
      duration: '6 недель',
      level: 'Продвинутый',
      students: 456,
      rating: 4.7,
      progress: 0,
      image: '📊'
    }
  ];

  const testResults = [
    { name: 'Основы Python', score: 95, date: '15.01.2024' },
    { name: 'HTML/CSS', score: 87, date: '12.01.2024' },
    { name: 'JavaScript', score: 92, date: '10.01.2024' }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">EduPlatform</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Курсы</a>
              <a href="#testing" className="text-gray-700 hover:text-blue-600 transition-colors">Тестирование</a>
              <a href="#profile" className="text-gray-700 hover:text-blue-600 transition-colors">Профиль</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Результаты</a>
              <a href="#help" className="text-gray-700 hover:text-blue-600 transition-colors">Помощь</a>
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
              <Button size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Каталог курсов
              </Button>
            </div>
          </div>
        </section>

        {/* Search Section */}
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

        {/* Tabs Navigation */}
        <Tabs defaultValue="courses" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="testing">Тестирование</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="results">Результаты</TabsTrigger>
            <TabsTrigger value="help">Помощь</TabsTrigger>
            <TabsTrigger value="search">Поиск</TabsTrigger>
            {isAdmin && <TabsTrigger value="admin">Админпанель</TabsTrigger>}
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <section id="courses">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Доступные курсы</h3>
                {isAdmin && (
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить курс
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-4xl mb-2">{course.image}</div>
                        <Badge variant={course.level === 'Начальный' ? 'secondary' : course.level === 'Средний' ? 'default' : 'destructive'}>
                          {course.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Users" size={16} className="mr-1" />
                            {course.students}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-yellow-600">
                            <Icon name="Star" size={16} className="mr-1" />
                            {course.rating}
                          </span>
                          <span className="text-gray-500">{course.progress}% завершено</span>
                        </div>
                        
                        <Progress value={course.progress} className="h-2" />
                        
                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1" size="sm">
                            {course.progress > 0 ? 'Продолжить' : 'Начать'}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="BookOpen" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Testing Tab */}
          <TabsContent value="testing">
            <section id="testing">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Тестирование</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="FileText" size={24} className="mr-2 text-blue-600" />
                      Доступные тесты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">Основы Python</h4>
                          <p className="text-sm text-gray-600">20 вопросов • 30 минут</p>
                        </div>
                        <Button size="sm">Пройти</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">HTML/CSS</h4>
                          <p className="text-sm text-gray-600">15 вопросов • 25 минут</p>
                        </div>
                        <Button size="sm">Пройти</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">JavaScript</h4>
                          <p className="text-sm text-gray-600">25 вопросов • 40 минут</p>
                        </div>
                        <Button size="sm">Пройти</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="TrendingUp" size={24} className="mr-2 text-green-600" />
                      Статистика
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">91%</div>
                        <p className="text-sm text-gray-600">Средний балл</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-semibold">12</div>
                          <p className="text-sm text-gray-600">Пройдено тестов</p>
                        </div>
                        <div>
                          <div className="text-xl font-semibold">5</div>
                          <p className="text-sm text-gray-600">Доступно</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <section id="profile">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Профиль</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" size={48} className="text-white" />
                    </div>
                    <CardTitle>Студент</CardTitle>
                    <p className="text-gray-600">student@example.com</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Курсов завершено:</span>
                        <span className="font-semibold">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Активных курсов:</span>
                        <span className="font-semibold">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Тестов пройдено:</span>
                        <span className="font-semibold">12</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Активность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <Icon name="CheckCircle" size={20} className="text-green-600 mr-3" />
                          <div>
                            <p className="font-semibold">Завершен курс "Основы Python"</p>
                            <p className="text-sm text-gray-600">2 дня назад</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <Icon name="Play" size={20} className="text-blue-600 mr-3" />
                          <div>
                            <p className="font-semibold">Начат курс "Веб-разработка"</p>
                            <p className="text-sm text-gray-600">1 неделю назад</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center">
                          <Icon name="Award" size={20} className="text-yellow-600 mr-3" />
                          <div>
                            <p className="font-semibold">Получена награда "Первый тест"</p>
                            <p className="text-sm text-gray-600">2 недели назад</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results">
            <section id="results">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Результаты тестирования</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart" size={24} className="mr-2 text-purple-600" />
                    История тестов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                            result.score >= 90 ? 'bg-green-100 text-green-600' : 
                            result.score >= 70 ? 'bg-yellow-100 text-yellow-600' : 
                            'bg-red-100 text-red-600'
                          }`}>
                            {result.score}
                          </div>
                          <div>
                            <h4 className="font-semibold">{result.name}</h4>
                            <p className="text-sm text-gray-600">{result.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={result.score >= 90 ? 'default' : result.score >= 70 ? 'secondary' : 'destructive'}>
                            {result.score >= 90 ? 'Отлично' : result.score >= 70 ? 'Хорошо' : 'Требует улучшения'}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Help Tab */}
          <TabsContent value="help">
            <section id="help">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Помощь</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="HelpCircle" size={24} className="mr-2 text-blue-600" />
                      Часто задаваемые вопросы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Как начать обучение?</h4>
                        <p className="text-sm text-gray-600">Выберите курс из каталога и нажмите "Начать"</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Как пройти тест?</h4>
                        <p className="text-sm text-gray-600">Перейдите в раздел "Тестирование" и выберите доступный тест</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Где посмотреть результаты?</h4>
                        <p className="text-sm text-gray-600">Все результаты доступны в разделе "Результаты"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="MessageCircle" size={24} className="mr-2 text-green-600" />
                      Связаться с нами
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full" variant="outline">
                        <Icon name="Mail" size={20} className="mr-2" />
                        support@eduplatform.com
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Icon name="Phone" size={20} className="mr-2" />
                        +7 (800) 123-45-67
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Icon name="MessageSquare" size={20} className="mr-2" />
                        Онлайн чат
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search">
            <section>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Поиск по платформе</h3>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative mb-8">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Найти курсы, тесты, материалы..."
                    className="pl-10 h-12 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {searchQuery && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Результаты поиска:</h4>
                    <div className="grid gap-4">
                      {filteredCourses.map((course) => (
                        <Card key={course.id} className="p-4">
                          <div className="flex items-start space-x-4">
                            <div className="text-2xl">{course.image}</div>
                            <div className="flex-1">
                              <h5 className="font-semibold">{course.title}</h5>
                              <p className="text-gray-600 text-sm">{course.description}</p>
                              <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                                <span>{course.duration}</span>
                                <span>•</span>
                                <span>{course.level}</span>
                                <span>•</span>
                                <span>{course.students} студентов</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </TabsContent>

          {/* Admin Tab */}
          {isAdmin && (
            <TabsContent value="admin">
              <section id="admin">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Панель администратора</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="BookOpen" size={24} className="mr-2 text-blue-600" />
                        Управление курсами
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button className="w-full" variant="outline">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Создать курс
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать курсы
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Icon name="Trash2" size={16} className="mr-2" />
                          Удалить курс
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Users" size={24} className="mr-2 text-green-600" />
                        Управление пользователями
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button className="w-full" variant="outline">
                          <Icon name="UserPlus" size={16} className="mr-2" />
                          Добавить пользователя
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Просмотр пользователей
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Icon name="Settings" size={16} className="mr-2" />
                          Настройки ролей
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="BarChart" size={24} className="mr-2 text-purple-600" />
                        Аналитика
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">1,247</div>
                          <p className="text-sm text-gray-600">Всего студентов</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">89%</div>
                          <p className="text-sm text-gray-600">Средний прогресс</p>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать отчет
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};

export default Index;