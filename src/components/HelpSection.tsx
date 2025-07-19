import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HelpSection = () => {
  return (
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
              <button className="w-full inline-flex items-center justify-center h-10 rounded-md px-4 border border-gray-300 bg-white hover:bg-gray-50 transition-colors font-medium">
                <Icon name="Mail" size={20} className="mr-2" />
                support@eduplatform.com
              </button>
              <button className="w-full inline-flex items-center justify-center h-10 rounded-md px-4 border border-gray-300 bg-white hover:bg-gray-50 transition-colors font-medium">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (800) 123-45-67
              </button>
              <button className="w-full inline-flex items-center justify-center h-10 rounded-md px-4 border border-gray-300 bg-white hover:bg-gray-50 transition-colors font-medium">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Онлайн чат
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HelpSection;