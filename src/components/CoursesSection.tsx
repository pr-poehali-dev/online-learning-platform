import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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

interface CoursesSectionProps {
  courses: Course[];
  isAdmin: boolean;
  setActiveTab: (tab: string) => void;
}

const CoursesSection = ({ courses, isAdmin, setActiveTab }: CoursesSectionProps) => {
  return (
    <section id="courses">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Доступные курсы</h3>
        {isAdmin && (
          <button className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить курс
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
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
                  <button 
                    className="flex-1 inline-flex items-center justify-center h-9 rounded-md px-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-sm"
                    onClick={() => setActiveTab('testing')}
                  >
                    {course.progress > 0 ? 'Продолжить' : 'Начать'}
                  </button>
                  <button 
                    className="inline-flex items-center justify-center h-9 rounded-md px-3 border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-sm"
                    onClick={() => alert('Подробная информация о курсе')}
                  >
                    <Icon name="BookOpen" size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;