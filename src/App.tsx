import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Send } from 'lucide-react';

// Header component
const Header = () => (
  <header className="bg-white sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/LOGO.svg" alt="IWM Logo" className="h-8" />
      </div>
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
        <a href="#marketplace" className="text-black">Для инвесторов</a>
        <a href="#business" className="text-gray-500 hover:text-black">Для бизнеса</a>
        <a href="#about" className="text-gray-500 hover:text-black">О компании</a>
      </div>
      <div className="flex items-center space-x-6 text-sm">
        <span className="cursor-pointer font-medium">Ru</span>
        <a href="#login" className="font-medium bg-black text-white px-5 py-2 hover:bg-gray-800">Личный кабинет</a>
      </div>
    </nav>
  </header>
);

// Slider component
const Slider = () => {
  const slides = [
    {
      title: "Инвестируйте в те проекты и стратегии, которые подходят персонально для вас",
      subtitle: "Выбирайте из широкого спектра вариантов, которые соответствуют вашим интересам, ценностям, финансовым целям и уровню риска, который для вас комфортен",
      buttonText: "Начать"
    },
    {
      title: "Платформа РУ",
      subtitle: "Алгоритмическая стратегия, ранее доступная только квалифицированным инвесторам, теперь открыта на IWM",
      buttonText: "Узнать больше"
    },
    {
      title: "Станьте частью самых амбициозных проектов мира",
      subtitle: "Финансовая экосистема IWM открывает уникальные возможности для инвесторов и финансовых институтов по всему миру",
      buttonText: "Подробнее"
    },
    {
      title: "Надежность и прозрачность",
      subtitle: "Все данные по проектам доступны вам не раз в квартал, а в любой момент. В личном кабинете отражается актуальная статистика в реальном времени, а сводные показатели фонда и проектов всегда на виду.",
      buttonText: "Подробнее"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-32 flex flex-col justify-center min-h-[calc(100vh-88px)]">
        <div className="text-left max-w-4xl">
          <div className="min-h-[24rem]">
            <h1 className="text-6xl md:text-7xl font-medium mb-8 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button className="bg-red-500 text-white px-10 py-4 font-semibold hover:bg-red-600 transition-colors">
              {slides[currentSlide].buttonText}
            </button>
            <div className="flex items-center space-x-3">
                <button onClick={prevSlide} className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100">
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Milestones component
const Milestones = () => {
  const stats = [
    { value: '10 000+', label: 'пользователей' },
    { value: '20+', label: 'реализованных успешных инвестиционных идей' },
    { value: '$18+ млн', label: 'привлеченных инвестиций' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-left pb-8">
              <p className="text-5xl font-medium">{stat.value}</p>
              <p className="mt-4 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Investment opportunities component
const Invest = () => {
  const projects = [
      { name: 'Платформа РУ', risk: 'средний', term: '12 мес.', minAmount: '$100' },
      { name: 'Bridgestone Capital / Strategy «A»', risk: 'высокий', term: '6 мес.', minAmount: '$500' },
      { name: 'Bridgestone Capital / Strategy «7»', risk: 'низкий', term: '24 мес.', minAmount: '$100' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Начать инвестировать</p>
            <h2 className="text-6xl font-medium">Самые интересные предложения на сегодня</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
                <div className="w-full h-auto aspect-square bg-gray-100 mb-6"></div>
                <h3 className="text-2xl font-medium mb-4">{project.name}</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-md text-gray-600">
                <div>
                  <p className="font-semibold text-black">Риск:</p>
                  <p>{project.risk}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Срок:</p>
                  <p>{project.term}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Мин. сумма:</p>
                  <p>{project.minAmount}</p>
                </div>
              </div>
              <a href="#" className="mt-6 inline-block font-semibold text-red-500 hover:underline">Подробнее</a>
            </div>
          ))}
        </div>
        <div className="text-left mt-16">
          <button className="border-2 border-gray-200 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
            Смотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

// Upcoming Projects component
const UpcomingProjects = () => {
  const projects = [
    { title: 'Global Trade Finance', description: 'Инструмент для финансирования международной торговли. Позволяет компаниям получать оборотный капитал под поставки товаров и снижать кассовые разрывы.' },
    { title: 'Auto Capital', description: 'Инвестиционный продукт, связанный с рынком автомобилей. Возможность получать доход через финансирование. автокредитов и лизинга' },
    { title: 'Real Estate Living Fund', description: 'Инвестиции в жилую недвижимость. Доступ к доходности рынка квартир при низком пороге входа.' },
    { title: 'Bitcoin ETF', description: 'Биржевой фонд, повторяющий динамику биткоина. Удобный инструмент для инвесторов без прямой покупки криптовалюты.' },
    { title: 'Solana Staking ETF', description: 'Биржевой фонд на Solana с автоматическим стейкингом. Инвесторы получают доходность от роста актива и вознаграждений за стейкинг.' },
    { title: 'Kids Future Fund', description: 'Накопительный фонд для детей. Позволяет родителям формировать долгосрочные сбережения и капитал к совершеннолетию ребенка.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Совсем скоро на IWM</p>
            <h2 className="text-6xl font-medium">Запуск совсем скоро</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="w-full h-auto aspect-square bg-gray-100 mb-6"></div>
              <h3 className="font-semibold text-2xl mb-3">{project.title}</h3>
              <p className="text-md text-gray-600 mb-6">{project.description}</p>
              <button className="font-semibold text-black hover:underline uppercase tracking-wider">Подробнее</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works component
const HowItWorks = () => {
    const steps = [
        {title: 'Регистрация', description: 'создайте учетную запись за пару минут'},
        {title: 'Выбор стратегии', description: 'выберите продукт или стратегию под свои цели'},
        {title: 'Инвестиция', description: 'вложите средства и наблюдайте за ростом капитала'},
    ];
  return (
    <section className="bg-white text-black py-32">
        <div className="container mx-auto px-6 text-left">
            <h2 className="text-6xl font-medium mb-20">Всего три простых шага</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                    <div key={index} className="pt-8">
                        <div className="w-full h-auto aspect-square bg-gray-100 mb-8"></div>
                        <div className="text-red-500 font-semibold text-xl mb-6">0{index + 1}</div>
                        <h3 className="text-3xl font-medium mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

// Why IWM component
const WhyIWM = () => {
    const items = [
        {title: 'Низкий порог входа', description: 'инвестировать можно от $100 и без лишней бюрократии'},
        {title: 'Прозрачность и доверие', description: 'все продукты проходят независимую проверку и аудит'},
        {title: 'Образование и поддержка', description: 'обучение, вебинары и аналитика для вашего роста как инвестора'},
    ];
  return (
    <section className="bg-white py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <div>
                <h2 className="text-5xl font-medium leading-tight">Почему IWM?</h2>
                <p className="text-xl text-gray-600 mt-6">Мы делаем инвестиции доступными и надежными</p>
                <p className="mt-10 text-gray-700">
                    IWM — инвестиционный маркетплейс, предоставляющий частным инвесторам доступ к фондам и проектам, которые ранее были доступны только профессиональным участникам рынка.
                    <br/><br/>
                    Разнообразие и диверсификация – широкий выбор инвестиционных инструментов для вашего портфеля.
                </p>
                <button className="mt-12 bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors">
                    Зарегистрироваться
                </button>
            </div>
            <div className="space-y-10">
                {items.map((item, index) => (
                    <div key={index} className="pb-8">
                        <h3 className="text-2xl font-medium">{item.title}</h3>
                        <p className="text-gray-600 mt-3">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

// Capital Tiers component
const CapitalTiers = () => {
  const tiers = [
      {title: 'IWM Navigation', description: 'инвестиционный консалтинг, разбор портфеля, выявление не эффективности и тд.'},
      {title: 'IWM Private Wealth', description: 'расширенные возможности для опытных клиентов'},
      {title: 'IWM Black', description: 'персональный подход для VIP-клиентов'},
  ];

  return (
    <section className="bg-white text-black py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">IWM Capital Tiers</p>
            <h2 className="text-6xl font-medium mb-4">Особые предложения</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index}>
              <div className="w-full h-auto aspect-square bg-gray-100 mb-8"></div>
              <h3 className="text-3xl font-medium mb-4">{tier.title}</h3>
              <p className="text-gray-600 text-lg mb-6">{tier.description}</p>
              <a href="#" className="font-semibold text-black hover:underline uppercase tracking-wider">Узнать больше</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partners component
const Partners = () => {
    const partners = ['МФЦА', 'Партнер 2', 'Партнер 3', 'Партнер 4'];
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-6xl font-medium">Партнеры IWM</h2>
                    <p className="mt-4 text-xl text-gray-600">Мы работаем с лучшими</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div key={index}>
                            <div className="w-full h-auto aspect-square bg-gray-100 mb-6"></div>
                            <h3 className="text-xl font-medium">{partner}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// News component
const News = () => {
    const articles = [
        {title: 'Заголовок первой новости'},
        {title: 'Заголовок второй новости'},
        {title: 'Заголовок третьей новости'},
    ];

    return (
        <section className="bg-gray-50 py-32">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Новости</p>
                        <h2 className="text-6xl font-medium">Главные рыночные<br/>события и аналитика</h2>
                    </div>
                    <button className="bg-white border-2 border-gray-200 px-8 py-3 font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap uppercase tracking-wider">
                        Смотреть все новости
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div className="w-full h-auto aspect-square bg-gray-200 mb-6"></div>
                            <h3 className="text-2xl font-medium leading-tight">{article.title}</h3>
                            <a href="#" className="text-black hover:underline mt-4 inline-block font-semibold uppercase tracking-wider">Узнать больше</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Subscription component
const Subscription = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-medium leading-tight">Будьте в курсе лучших инвест-идей</h2>
          <p className="mt-8 text-lg text-gray-600">Ежедневная аналитика и инсайты, которые помогут принимать взвешенные инвестиционные решения.</p>
          <p className="mt-6 text-gray-600">Получайте отборные рыночные обзоры, перспективные идеи и стратегические прогнозы от экспертов IWM. Только проверенные данные, без шума и лишней информации. Подпишитесь и инвестируйте с уверенностью в каждом шаге.</p>
          <p className="mt-10 text-gray-800 text-lg"><span className="font-bold">9 000+</span> подписчиков с нами – мы делимся только тем, что используем сами.</p>
        </div>
        <div className="flex flex-col justify-center">
            <div className="space-y-4">
                <p className="text-gray-700 font-semibold text-lg">Преимущества подписки:</p>
                <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">Актуальные тренды рынков</span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">Рабочие идеи для роста капитала</span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">Обзоры ключевых событий и сделок</span>
                </div>
            </div>
            <div className="mt-12">
                <input type="email" placeholder="Ваш email" className="border-2 border-gray-200 px-6 py-4 w-full text-lg"/>
                <button className="mt-4 bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors w-full text-lg">Подписаться</button>
            </div>
        </div>
      </div>
    </section>
  );
};

// Footer component
const Footer = () => (
  <footer className="bg-custom-red text-white py-20">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-start">
        <div className="flex space-x-10 text-gray-400">
            <a href="#" className="hover:text-white">Правовая информация</a>
            <a href="#" className="hover:text-white">Карта сайта</a>
            <a href="#" className="hover:text-white">Уведомление о рисках</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-red-500">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-red-500">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-red-500">
            <Send className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="mt-20 pt-10 text-sm text-gray-500">
        <p>© 2025 IWM</p>
      </div>
    </div>
  </footer>
);


function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Slider />
        <Milestones />
        <Invest />
        <UpcomingProjects />
        <HowItWorks />
        <WhyIWM />
        <CapitalTiers />
        <Partners />
        <News />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;