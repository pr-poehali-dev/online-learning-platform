import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProfileSection = () => {
  return (
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
  );
};

export default ProfileSection;