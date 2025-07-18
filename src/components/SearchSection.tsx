import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
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

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCourses: Course[];
}

const SearchSection = ({ searchQuery, setSearchQuery, filteredCourses }: SearchSectionProps) => {
  return (
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
  );
};

export default SearchSection;