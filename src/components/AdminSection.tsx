import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdminSection = () => {
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
  );
};

export default AdminSection;