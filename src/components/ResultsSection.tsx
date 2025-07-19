import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TestResult {
  name: string;
  score: number;
  date: string;
}

interface ResultsSectionProps {
  testResults: TestResult[];
}

const ResultsSection = ({ testResults }: ResultsSectionProps) => {
  return (
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
                  <button className="inline-flex items-center justify-center h-8 rounded-md px-3 border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                    <Icon name="Eye" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResultsSection;