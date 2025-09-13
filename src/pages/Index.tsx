import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" size={32} />
              <div>
                <h1 className="text-xl font-bold">ГСК "Прети"</h1>
                <p className="text-sm opacity-90">Гаражно-строительный кооператив</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:underline">Главная</a>
              <a href="#" className="hover:underline">Объявления</a>
              <a href="#" className="hover:underline">Документы</a>
              <a href="#" className="hover:underline">Правление</a>
              <a href="#" className="hover:underline">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Добро пожаловать в ГСК "Прети"
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Официальный сайт гаражно-строительного кооператива для информирования членов
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button>
                      <Icon name="FileText" size={16} className="mr-2" />
                      Документы
                    </Button>
                    <Button variant="outline">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Контакты
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Announcements & News */}
            <Tabs defaultValue="announcements" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="announcements">
                  <Icon name="Megaphone" size={16} className="mr-2" />
                  Объявления
                </TabsTrigger>
                <TabsTrigger value="news">
                  <Icon name="Newspaper" size={16} className="mr-2" />
                  Новости
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="announcements" className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <CardTitle className="text-lg flex-1">Собрание членов кооператива</CardTitle>
                    <Badge variant="destructive">Важно</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      15 октября 2024 года в 18:00 состоится очередное собрание членов ГСК "Прети". 
                      Повестка дня включает вопросы благоустройства территории и утверждение сметы на 2025 год.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      <span>13.09.2024</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Плановые работы по электроснабжению
                      <Badge variant="outline">Уведомление</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      С 20 по 22 сентября планируется отключение электричества для проведения 
                      ремонтных работ. Время отключения: с 9:00 до 17:00.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      <span>10.09.2024</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Новые правила парковки
                      <Badge>Информация</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Утверждены новые правила парковки на территории кооператива. 
                      С документом можно ознакомиться в разделе "Документы".
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      <span>08.09.2024</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Завершен ремонт крыши административного здания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Успешно завершены работы по ремонту кровли административного здания. 
                      Работы выполнены в срок и в рамках утвержденного бюджета.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      <span>12.09.2024</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Установлены новые камеры видеонаблюдения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Для повышения безопасности установлено дополнительно 4 камеры видеонаблюдения 
                      в ключевых точках территории кооператива.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      <span>05.09.2024</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Financial Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Финансовая информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Задолженность</span>
                    <span className="text-red-600 font-bold">2,500₽</span>
                  </div>
                  <p className="text-sm text-gray-600">Просроченные взносы за август 2024</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Ежемесячный взнос:</span>
                    <span className="font-semibold">1,200₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Следующий платеж:</span>
                    <span>01.10.2024</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Icon name="Wallet" size={16} className="mr-2" />
                  Оплатить онлайн
                </Button>
              </CardContent>
            </Card>

            {/* Collection Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Target" size={20} className="mr-2" />
                  Сбор средств на ремонт
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Собрано</span>
                    <span className="font-semibold">125,000₽ / 200,000₽</span>
                  </div>
                  <Progress value={62.5} className="h-2" />
                </div>
                <p className="text-sm text-gray-600">
                  Ремонт дорожного покрытия на территории кооператива
                </p>
              </CardContent>
            </Card>

            {/* Board Members */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2" />
                  Правление
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="font-medium">Иванов Алексей Петрович</div>
                  <div className="text-sm text-gray-600">Председатель правления</div>
                  <div className="text-sm text-gray-500">+7 (123) 456-78-90</div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium">Смирнова Елена Ивановна</div>
                  <div className="text-sm text-gray-600">Главный бухгалтер</div>
                  <div className="text-sm text-gray-500">+7 (123) 456-78-91</div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium">Петров Михаил Сергеевич</div>
                  <div className="text-sm text-gray-600">Управляющий</div>
                  <div className="text-sm text-gray-500">+7 (123) 456-78-92</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Полезные ссылки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Устав кооператива
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="Scale" size={16} className="mr-2" />
                  Правила внутреннего распорядка
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Тарифы и взносы
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Часто задаваемые вопросы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ГСК "Прети"</h3>
              <p className="text-gray-300">
                Официальный сайт гаражно-строительного кооператива
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 г. Москва, ул. Примерная, д. 123</p>
                <p>📞 +7 (123) 456-78-90</p>
                <p>✉️ info@gskpreti.ru</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Часы работы</h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГСК "Прети". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}