import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Send, Menu, X } from 'lucide-react';

const hoverColors = ['hover:bg-pale-red', 'hover:bg-pale-blue', 'hover:bg-pale-grey'];

// Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center justify-start">
          <img src="/LOGO.svg" alt="IWM Logo" className="h-8" />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-10 text-sm font-semibold tracking-wider flex-1">
          <a href="#marketplace" className="text-brand-black uppercase">Для инвесторов</a>
          <a href="#business" className="text-gray-500 hover:text-brand-black uppercase">Для бизнеса</a>
          <a href="#about" className="text-gray-500 hover:text-brand-black uppercase">О компании</a>
        </div>
        <div className="hidden md:flex items-center justify-end space-x-6 text-sm">
          <span className="cursor-pointer font-light">Ru</span>
          <a href="#login" className="font-light bg-brand-black text-white px-6 py-3 rounded-full hover:brightness-125 transition uppercase">Личный кабинет</a>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#marketplace" className="text-brand-black uppercase font-light">Для инвесторов</a>
            <a href="#business" className="text-gray-500 hover:text-brand-black uppercase font-light">Для бизнеса</a>
            <a href="#about" className="text-gray-500 hover:text-brand-black uppercase font-light">О компании</a>
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <span className="cursor-pointer font-light">Ru</span>
                <a href="#login" className="font-light bg-brand-black text-white px-6 py-3 rounded-full hover:brightness-125 transition uppercase text-center">Личный кабинет</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


// Slider component
const Slider = () => {
const slides = [
  {
      title: "Инвестируйте в те проекты и стратегии, которые подходят персонально для вас",
    subtitle: "Выбирайте из широкого спектра вариантов, которые соответствуют вашим интересам, ценностям, финансовым целям и уровню риска, который для вас комфортен",
      buttonText: "Начать",
      bgColor: "bg-custom-blue",
      image: "/slider images/1.png"
  },
  {
    title: "Платформа РУ",
    subtitle: "Алгоритмическая стратегия, ранее доступная только квалифицированным инвесторам, теперь открыта на IWM",
      buttonText: "Узнать больше",
      bgColor: "bg-pale-blue"
  },
  {
    title: "Станьте частью самых амбициозных проектов мира",
    subtitle: "Финансовая экосистема IWM открывает уникальные возможности для инвесторов и финансовых институтов по всему миру",
      buttonText: "Подробнее",
      bgColor: "bg-custom-salmon",
      image: "/slider images/2.png",
      buttonColor: "bg-custom-blue",
      textColor: "text-brand-black",
      buttonTextColor: "text-brand-black"
  },
  {
    title: "Надежность и прозрачность",
    subtitle: "Все данные по проектам доступны вам не раз в квартал, а в любой момент. В личном кабинете отражается актуальная статистика в реальном времени, а сводные показатели фонда и проектов всегда на виду.",
      buttonText: "Подробнее",
      bgColor: "bg-custom-teal",
      image: "/slider images/4.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsTransitioning(false);
    }, 500); // Corresponds to the transition duration
  };

  const nextSlide = () => {
    changeSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    changeSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <section className={`relative overflow-hidden m-2 md:m-6 transition-colors duration-500 ease-in-out rounded-3xl ${slides[currentSlide].bgColor}`}>
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-32 flex flex-col justify-center min-h-[calc(100vh-88px-1rem)] md:min-h-[calc(100vh-88px-3rem)]">
        <div className="text-left max-w-5xl">
          <div className="h-[28rem] flex flex-col justify-center">
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-light mb-6 leading-tight transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-200'} ${slides[currentSlide].textColor || 'text-brand-black'}`}>
                {slides[currentSlide].title}
          </h1>
            <p className={`text-sm md:text-base text-gray-600 mb-10 max-w-3xl transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-300'} ${slides[currentSlide].textColor || 'text-gray-600'}`}>
                {slides[currentSlide].subtitle}
              </p>
            </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className={`${slides[currentSlide].buttonColor || 'bg-custom-red'} ${slides[currentSlide].buttonTextColor || 'text-white'} w-full sm:w-72 text-center px-10 py-4 rounded-full font-light transition-all duration-500 ease-in-out hover:brightness-95 uppercase tracking-wider ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-500'}`}>
              {slides[currentSlide].buttonText}
            </button>
            <div className="flex items-center space-x-3">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-gray-700 text-gray-700 flex items-center justify-center hover:bg-black/10">
                    <ChevronLeft className="h-6 w-6" />
                </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border-2 border-gray-700 text-gray-700 flex items-center justify-center hover:bg-black/10">
                    <ChevronRight className="h-6 w-6" />
            </button>
            </div>
          </div>
        </div>
      </div>
      {slides[currentSlide].image && (
        <img
          src={slides[currentSlide].image}
          alt=""
          className={`absolute bottom-0 right-[-15rem] max-h-full w-4/5 object-contain transition-all duration-500 ease-in-out pointer-events-none ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-100'}`}
        />
      )}
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
    <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
            <div key={index} className="text-left pb-8">
              <p className="text-4xl md:text-5xl font-n27 font-light">{stat.value}</p>
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
        { name: 'Платформа РУ', risk: 'низкий', term: '12 мес.', minAmount: '$500', image: '/partners/Rectangle 899-1.png' },
        { name: 'Bridgestone Capital', risk: 'средний', term: '24 мес.', minAmount: '$1000', image: '/partners/Rectangle 912.png' },
        { name: 'AIFC', risk: 'высокий', term: '6 мес.', minAmount: '$200', image: '/partners/Rectangle 913.png' },
    ];
    return (
        <section className="bg-white py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10 md:mb-16">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Начать инвестировать</p>
                    <h2 className="text-4xl md:text-6xl font-light">Самые интересные предложения на сегодня</h2>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`p-6 md:p-8 rounded-lg ${hoverColors[index % hoverColors.length]}`}>
                             {project.image ? (
                                <div className={`w-full h-auto aspect-square ${project.imageBgColor || 'bg-gray-100'} mb-6 rounded-lg flex items-center justify-center`}>
                                    <img src={project.image} alt={project.name} className="w-full h-full object-contain" />
            </div>
                            ) : (
                                <div className="w-full h-auto aspect-square bg-gray-100 mb-6 rounded-lg"></div>
                            )}
                            <h3 className="text-xl md:text-2xl font-light mb-4">{project.name}</h3>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-gray-500 text-base">Риск:</p>
                                    <p className="text-brand-black text-lg font-light">{project.risk}</p>
                                    <p className="text-gray-500 text-base mt-4">Мин. сумма:</p>
                                    <p className="text-brand-black text-lg font-light font-n27">{project.minAmount}</p>
              </div>
                                <div className="text-right">
                                    <p className="text-gray-500 text-base">Срок:</p>
                                    <p className="text-brand-black text-lg font-light font-n27">{project.term}</p>
                          </div>
                            </div>
                            <a href="#" className="text-custom-red font-light text-lg">Подробнее</a>
                      </div>
                    ))}
                  </div>
                <div className="text-center md:text-left mt-12 md:mt-20">
                    <button className="bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
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
        {
            title: "Global Trade Finance",
            description: "Инструмент для финансирования международной торговли. Позволяет компаниям получать оборотный капитал под поставки товаров и снижать кассовые разрывы."
        },
        {
            title: "Auto Capital",
            description: "Инвестиционный продукт, связанный с рынком автомобилей. Возможность получать доход через финансирование автокредитов и лизинга"
        },
        {
            title: "Real Estate Living Fund",
            description: "Инвестиции в жилую недвижимость. Доступ к доходности рынка квартир при низком пороге входа."
        },
        { 
            title: 'Bitcoin ETF', 
            description: 'Биржевой фонд, повторяющий динамику биткоина. Удобный инструмент для инвесторов без прямой покупки криптовалюты.' 
        },
        { 
            title: 'Solana Staking ETF', 
            description: 'Биржевой фонд на Solana с автоматическим стейкингом. Инвесторы получают доходность от роста актива и вознаграждений за стейкинг.' 
        },
        { 
            title: 'Kids Future Fund', 
            description: 'Накопительный фонд для детей. Позволяет родителям формировать долгосрочные сбережения и капитал к совершеннолетию ребенка.' 
        }
    ];

    const images = [
        '/images/image 2076.png',
        '/images/image 2079.png',
        '/images/image 2080.png',
        '/images/image 2083.png',
        '/images/image 2084.png',
        '/images/image 2085.png',
        '/images/image 2086.png',
        '/images/image 2087.png',
        '/images/image 2088.png',
    ];

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10 md:mb-16">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Совсем скоро на IWM</p>
                    <h2 className="text-4xl md:text-6xl font-light">Запуск совсем скоро</h2>
                          </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className={`p-6 md:p-8 transition-colors duration-300 rounded-lg ${hoverColors[index % hoverColors.length]}`}>
                            <div className="w-full h-auto aspect-square bg-gray-100 mb-6 rounded-lg overflow-hidden">
                                <img src={images[index % images.length]} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-light text-xl md:text-2xl mb-3">{project.title}</h3>
                            <p className="text-base md:text-lg text-gray-600 mb-6">{project.description}</p>
                            <button className="font-light text-custom-red text-lg md:text-xl hover:underline uppercase tracking-wider">Подробнее</button>
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
        {
            title: "Регистрация",
            description: "создайте учетную запись за пару минут"
        },
        {
            title: "Выбор стратегии",
            description: "выберите продукт или стратегию под свои цели и риск-профиль"
        },
        {
            title: "Инвестиция",
            description: "вложите средства и наблюдайте за ростом вашего капитала"
        },
    ];

    const images = [
        '/images/image 2076.png',
        '/images/image 2079.png',
        '/images/image 2080.png',
        '/images/image 2083.png',
        '/images/image 2084.png',
        '/images/image 2085.png',
        '/images/image 2086.png',
        '/images/image 2087.png',
        '/images/image 2088.png',
    ];
                      
                      return (
        <section className="bg-white text-brand-black py-16 md:py-32">
            <div className="container mx-auto px-6 text-left">
                <h2 className="text-4xl md:text-6xl font-light mb-12 md:mb-20 text-center md:text-left">Всего три простых шага</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className={`p-6 md:p-8 transition-colors duration-300 rounded-lg ${hoverColors[index % hoverColors.length]}`}>
                            <div className="w-full h-auto aspect-square bg-gray-100 mb-8 rounded-lg overflow-hidden">
                                <img src={images[index % images.length]} alt={step.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-custom-red font-light font-n27 text-5xl mb-6">0{index + 1}</div>
                            <h3 className="text-2xl md:text-3xl font-light mb-3">{step.title}</h3>
                            <p className="text-base md:text-lg text-gray-600">{step.description}</p>
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
        {
            title: "Низкий порог входа",
            description: "инвестировать можно от $100 и без лишней бюрократии"
        },
        {
            title: "Прозрачность и доверие",
            description: "все продукты проходят независимую проверку и аудит"
        },
        {
            title: "Образование и поддержка",
            description: "обучение, вебинары и аналитика для вашего роста как инвестора"
        }
    ];

    const images = [
        '/images/image 2076.png',
        '/images/image 2079.png',
        '/images/image 2080.png',
        '/images/image 2083.png',
        '/images/image 2084.png',
        '/images/image 2085.png',
        '/images/image 2086.png',
        '/images/image 2087.png',
        '/images/image 2088.png',
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Почему IWM?</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">Мы делаем инвестиции доступными и надежными</p>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            IWM – инвестиционный маркетплейс, предоставляющий частным инвесторам доступ к фондам и проектам, которые ранее были доступны только профессиональным участникам рынка.
                        </p>
                        <p className="text-base md:text-lg text-gray-700">
                            Разнообразие и диверсификация – широкий выбор инвестиционных инструментов для вашего портфеля.
                        </p>
                        <button className="mt-12 bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
                            Зарегистрироваться
                        </button>
                    </div>
                    <div className="space-y-12">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                                    <img src={images[index % images.length]} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-light mb-2">{item.title}</h3>
                                    <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Capital Tiers component
const CapitalTiers = () => {
    const tiers = [
        {
            title: "IWM Navigation",
            description: "инвестиционный консалтинг, разбор портфеля, выявление не эффективности и тд."
        },
        {
            title: "IWM Private Wealth",
            description: "расширенные возможности для опытных клиентов"
        },
        {
            title: "IWM Black",
            description: "персональный подход для VIP-клиентов"
        },
    ];

    const images = [
        '/images/image 2076.png',
        '/images/image 2079.png',
        '/images/image 2080.png',
        '/images/image 2083.png',
        '/images/image 2084.png',
        '/images/image 2085.png',
        '/images/image 2086.png',
        '/images/image 2087.png',
        '/images/image 2088.png',
    ];

    return (
        <section className="bg-white text-brand-black py-12 md:py-24">
      <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-10 md:mb-16">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">IWM Capital Tiers</p>
                    <h2 className="text-4xl md:text-6xl font-light mb-4">Особые предложения</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div key={index}>
                            <div className="w-full h-auto aspect-square bg-gray-100 rounded-lg overflow-hidden mb-6">
                                <img src={images[(index + 3) % images.length]} alt={tier.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light mb-4">{tier.title}</h3>
                            <p className="text-gray-600 text-base md:text-lg mb-6 h-16">{tier.description}</p>
                            <a href="#" className="font-light text-brand-black hover:underline uppercase tracking-wider">Узнать больше</a>
              </div>
            ))}
        </div>
      </div>
    </section>
    );
};

// Partners component
const Partners = () => {
    const partners = [
        { name: 'ПЛАТФОРМА.РУ', image: '/partners/Rectangle 899-1.png' },
        { name: 'STONEBRIDGE', image: '/partners/Rectangle 912.png' },
        { name: 'AIFC', image: '/partners/Rectangle 913.png' },
        { name: 'TRADE FINANCE GLOBAL', image: '/partners/Rectangle 899.png' }
    ];
    return (
        <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-6xl font-light">Партнеры IWM</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600">Мы работаем с лучшими</p>
          </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div key={index} className={`p-6 md:p-8 transition-colors duration-300 rounded-lg ${hoverColors[index % hoverColors.length]}`}>
                            <div className="w-full h-auto aspect-square bg-gray-100 mb-6 rounded-lg overflow-hidden">
                                <img src={partner.image} alt={partner.name} className="w-full h-full object-contain"/>
                            </div>
                            <h3 className="text-lg md:text-xl font-light">{partner.name}</h3>
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

    const images = [
        '/images/image 2076.png',
        '/images/image 2079.png',
        '/images/image 2080.png',
        '/images/image 2083.png',
        '/images/image 2084.png',
        '/images/image 2085.png',
        '/images/image 2086.png',
        '/images/image 2087.png',
        '/images/image 2088.png',
    ];

    return (
        <section className="bg-white py-12 md:py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16">
                    <div className="mb-8 md:mb-0">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Новости</p>
                        <h2 className="text-4xl md:text-6xl font-light">Главные рыночные<br/>события и аналитика</h2>
                    </div>
                    <button className="bg-white border-2 border-gray-200 px-8 py-3 rounded-full font-light hover:bg-gray-100 transition-colors whitespace-nowrap uppercase tracking-wider self-start md:self-auto">
                        Смотреть все новости
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div className="w-full h-auto aspect-square bg-gray-100 rounded-lg overflow-hidden mb-6">
                                <img src={images[(index + 6) % images.length]} alt={article.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-light leading-tight mb-4">{article.title}</h3>
                            <a href="#" className="text-brand-black hover:underline font-light uppercase tracking-wider">Узнать больше</a>
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
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight">Будьте в курсе лучших инвест-идей</h2>
          <p className="mt-8 text-base md:text-lg text-gray-600">Ежедневная аналитика и инсайты, которые помогут принимать взвешенные инвестиционные решения.</p>
          <p className="mt-6 text-base md:text-lg text-gray-600">Получайте отборные рыночные обзоры, перспективные идеи и стратегические прогнозы от экспертов IWM. Только проверенные данные, без шума и лишней информации. Подпишитесь и инвестируйте с уверенностью в каждом шаге.</p>
          <p className="mt-10 text-gray-800 text-base md:text-lg"><span className="font-bold">9 000+</span> подписчиков с нами – мы делимся только тем, что используем сами.</p>
        </div>
        <div className="flex flex-col justify-center">
            <div className="space-y-4">
                <p className="text-gray-700 font-light text-lg">Преимущества подписки:</p>
                <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-light rounded-md">Актуальные тренды рынков</span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-light rounded-md">Рабочие идеи для роста капитала</span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-light rounded-md">Обзоры ключевых событий и сделок</span>
              </div>
            </div>
            <div className="mt-12 max-w-xl">
                <input type="email" placeholder="Ваш email" className="border-2 border-gray-200 px-6 py-4 w-full text-base md:text-lg rounded-full"/>
                <button className="mt-4 bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors w-full text-base md:text-lg uppercase tracking-wider">Подписаться</button>
            </div>
          </div>
        </div>
      </section>
  );
};

// Footer component
const Footer = () => {
    return (
        <footer className="bg-custom-red text-white py-10">
        <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-center md:text-left">
                        <a href="#" className="hover:underline">Правовая информация</a>
                        <a href="#" className="hover:underline">Карта сайта</a>
                <a href="#" className="hover:underline">Уведомление о рисках</a>
            </div>
            <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Facebook className="h-6 w-6" />
              </a>
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Instagram className="h-6 w-6" />
              </a>
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
                <div className="mt-10 md:mt-16 text-sm text-center md:text-left">
                    © <span className="font-n27">2025</span> IWM
          </div>
        </div>
      </footer>
    );
};


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