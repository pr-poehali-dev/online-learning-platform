import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestingSection = () => {
  return (
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
  );
};

export default TestingSection;