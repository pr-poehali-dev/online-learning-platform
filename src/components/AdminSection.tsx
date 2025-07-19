import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  progress: number;
  image: string;
}

interface AdminSectionProps {
  courses: Course[];
  onAddCourse: (course: Omit<Course, 'id' | 'students' | 'rating' | 'progress'>) => void;
  onDeleteCourse: (id: number) => void;
}

const AdminSection = ({ courses, onAddCourse, onDeleteCourse }: AdminSectionProps) => {
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    duration: '',
    level: '',
    image: '📚'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCourse.title && newCourse.description && newCourse.duration && newCourse.level) {
      onAddCourse(newCourse);
      setNewCourse({ title: '', description: '', duration: '', level: '', image: '📚' });
      setShowCourseForm(false);
    }
  };
  return (
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
              <button 
                className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                onClick={() => setShowCourseForm(!showCourseForm)}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                {showCourseForm ? 'Скрыть форму' : 'Создать курс'}
              </button>
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать курсы
              </button>
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="Trash2" size={16} className="mr-2" />
                Удалить курс
              </button>
            </div>
            
            {showCourseForm && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-lg">Новый курс</h4>
                
                <div>
                  <Label htmlFor="title">Название курса</Label>
                  <Input
                    id="title"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    placeholder="Введите название курса"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                    placeholder="Введите описание курса"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="duration">Длительность</Label>
                  <Input
                    id="duration"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                    placeholder="Например: 4 недели"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="level">Уровень сложности</Label>
                  <Select value={newCourse.level} onValueChange={(value) => setNewCourse({...newCourse, level: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите уровень" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Начальный">Начальный</SelectItem>
                      <SelectItem value="Средний">Средний</SelectItem>
                      <SelectItem value="Продвинутый">Продвинутый</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="image">Иконка (эмодзи)</Label>
                  <Input
                    id="image"
                    value={newCourse.image}
                    onChange={(e) => setNewCourse({...newCourse, image: e.target.value})}
                    placeholder="📚"
                  />
                </div>
                
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить курс
                </button>
              </form>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="List" size={24} className="mr-2 text-red-600" />
              Управление курсами
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {courses.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Курсы отсутствуют</p>
              ) : (
                courses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{course.image}</span>
                      <span className="font-medium">{course.title}</span>
                    </div>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      onClick={() => onDeleteCourse(course.id)}
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                ))
              )}
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
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Добавить пользователя
              </button>
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="Eye" size={16} className="mr-2" />
                Просмотр пользователей
              </button>
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки ролей
              </button>
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
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать отчет
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdminSection;