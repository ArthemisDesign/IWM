import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

const slides = [
  {
    title: (
      <>
        <span className="text-red-500">Инвестируйте</span> в те проекты<br/>
        и стратегии, которые подходят<br/>
        персонально для вас
      </>
    ),
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

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'пользователей'
  },
  {
    value: 20,
    suffix: '+',
    label: <>реализованных успешных<br/>инвестиционных идей</>
  },
  {
    value: 18,
    prefix: '$ ',
    suffix: '+ млн',
    label: 'привлечённых инвестиций'
  }
];

const projectsCol1 = [
  {
    logo: <div className="text-black font-bold text-3xl">AIFC</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Средний',
    term: '12 месяцев',
    minAmount: '$ 100',
    logoBgColor: 'bg-white',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
  {
    logo: <div className="text-black font-bold text-3xl">ПЛАТФОРМА.РУ</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Средний',
    term: '12 месяцев',
    minAmount: '$ 100',
    logoBgColor: 'bg-yellow-400',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
  {
    logo: <div className="text-black font-bold text-3xl">TECH CORP</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Высокий',
    term: '24 месяца',
    minAmount: '$ 500',
    logoBgColor: 'bg-blue-300',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
];

const projectsCol2 = [
  {
    logo: <div className="text-black font-bold text-3xl">STONEBRIDGE</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Средний',
    term: '12 месяцев',
    minAmount: '$ 100',
    logoBgColor: 'bg-gray-300',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
    {
    logo: <div className="text-black font-bold text-3xl">FIN VENTURES</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Низкий',
    term: '6 месяцев',
    minAmount: '$ 50',
    logoBgColor: 'bg-teal-400',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
  {
    logo: <div className="text-black font-bold text-3xl">GLOBAL INVEST</div>,
    name: 'ПЛАТФОРМА РУ',
    risk: 'Средний',
    term: '18 месяцев',
    minAmount: '$ 200',
    logoBgColor: 'bg-purple-400',
    detailsBgColor: 'bg-gray-800',
    detailsTextColor: 'text-white'
  },
];

const upcomingProjects = [
  {
    image: '/upcoming-1.jpg',
    year: '2025',
    title: 'GLOBAL TRADE FINANCE',
    description: 'Инструмент для финансирования международной торговли. Позволяет компаниям получать оборотный капитал под поставки товаров и снижать кассовые разрывы.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
  {
    image: '/upcoming-2.jpg',
    year: '2025',
    title: 'AUTO CAPITAL',
    description: 'Инвестиционный продукт, связанный с рынком автомобилей. Возможность получать доход через финансирование автокредитов и лизинга.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
  {
    image: '/upcoming-3.jpg',
    year: '2025',
    title: 'REAL ESTATE LIVING FUND',
    description: 'Инвестиции в жилую недвижимость. Доступ к доходности рынка квартир при низком пороге входа.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
  {
    image: '/upcoming-4.jpg',
    year: '2025',
    title: 'BITCOIN ETF',
    description: 'Биржевой фонд, повторяющий динамику биткоина. Удобный инструмент для инвесторов без прямой покупки криптовалюты.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
  {
    image: '/upcoming-5.jpg',
    year: '2025',
    title: 'SOLANA STAKING ETF',
    description: 'Биржевой фонд на Solana с автоматическим стейкингом. Инвесторы получают доходность от роста актива и вознаграждений за стейкинг.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
  {
    image: '/upcoming-6.jpg',
    year: '2025',
    title: 'KIDS FUTURE FUND',
    description: 'Накопительный фонд для детей. Позволяет родителям формировать долгосрочные сбережения и капитал к совершеннолетию ребенка.',
    bgColor: 'bg-white',
    textColor: 'text-black'
  },
];

const howItWorksSteps = [
  {
    step: '03',
    title: 'ИНВЕСТИЦИЯ',
    subtitle: '',
    image: '/how-it-works-3.jpg',
  }
];

const whyIWMItems = [
  {
    title: 'НИЗКИЙ ПОРОГ ВХОДА',
    description: 'Инвестировать можно от $100 и без лишней бюрократии',
  },
  {
    title: 'ПРОЗРАЧНОСТЬ И ДОВЕРИЕ',
    description: 'Все продукты проходят независимую проверку и аудит',
  },
  {
    title: 'ОБРАЗОВАНИЕ И ПОДДЕРЖКА',
    description: 'Обучение, вебинары и аналитика для вашего роста как инвестора',
  },
];

const gallerySlides = [
  {
    category: 'private wealth',
    title: 'IWM PRIVATE WEALTH',
    description: 'Расширенные возможности для опытных клиентов',
  },
  {
    category: 'black',
    title: 'IWM BLACK',
    description: 'Персональный подход для VIP-клиентов',
  },
  {
    category: 'premium',
    title: 'IWM PREMIUM',
    description: 'Эксклюзивные предложения для премиум-сегмента',
  },
  {
    category: 'global',
    title: 'IWM GLOBAL',
    description: 'Доступ к международным рынкам и активам',
  }
];


const StatItem = ({ stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex items-center">
      <span className="text-4xl font-light w-48 shrink-0">
        {stat.prefix}
        {inView ? <CountUp end={stat.value} duration={2.5} separator=" " /> : '0'}
        {stat.suffix}
      </span>
      <div className="flex-grow flex items-center px-4">
        <div className="w-3 h-3 bg-black rounded-full"></div>
        <div className="flex-grow border-t border-black mx-2"></div>
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
      <span className="text-base text-right w-64 shrink-0">{stat.label}</span>
    </div>
  );
};

const UpcomingProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex border border-gray-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={project.image} alt={project.title} className="w-1/3 object-cover"/>
      <div 
        className={`w-2/3 p-6 relative transition-colors duration-300 ${isHovered ? 'bg-[#FD6D5B] text-white' : `${project.bgColor} ${project.textColor}`}`}
      >
        <div className={`absolute top-4 right-4 border rounded-full px-3 py-1 text-sm transition-colors duration-300 ${isHovered ? 'border-white' : 'border-black'}`}>{project.year}</div>
        <div className={`absolute top-16 right-4 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isHovered ? 'border-white' : 'border-black'}`}>
          <ChevronRight className="h-5 w-5" />
        </div>
        <h3 className="font-bold text-xl mt-12">{project.title}</h3>
        <p className="mt-4 text-sm">{project.description}</p>
      </div>
    </div>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1536]); // 3 cards * (480px height + 32px gap)
  const y2 = useTransform(scrollYProgress, [0, 1], [-1536, 0]);
  const timelineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const whyIWMRef = useRef(null);
  const { scrollYProgress: whyIWMScrollYProgress } = useScroll({
    target: whyIWMRef,
    offset: ['start start', 'end end'],
  });

  const timelineYWhy = useTransform(whyIWMScrollYProgress, [0, 1], ['5%', '80%']);
  const itemOpacity1 = useTransform(whyIWMScrollYProgress, [0, 0.33], [1, 0.3]);
  const itemOpacity2 = useTransform(whyIWMScrollYProgress, [0.33, 0.66], [1, 0.3]);
  const itemOpacity3 = useTransform(whyIWMScrollYProgress, [0.66, 1], [1, 0.3]);


  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <div className="bg-[#DFE3E2]">
        <header className="bg-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/LOGO.svg" alt="Company Logo" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#investors" className="border-b-2 border-red-500 text-red-500 pb-1">для инвесторов</a>
              <a href="#business" className="hover:text-red-500">для бизнеса</a>
              <a href="#about" className="hover:text-red-500">о компании</a>
          </div>
            <div className="flex items-center space-x-4">
              <span className="cursor-pointer">Ru</span>
              <div className="border-l border-red-500 h-6"></div>
              <a href="#login" className="hover:text-red-500">Личный кабинет</a>
          </div>
        </nav>
        </header>

        <main className="container mx-auto px-6 py-24 flex flex-col justify-center">
          <div className="text-left max-w-3xl">
            <div className="min-h-[20rem]">
              <h1 className="text-5xl md:text-6xl font-light mb-8">
                {slides[currentSlide].title}
          </h1>
              <p className="text-lg mb-12 max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors mb-12">
              {slides[currentSlide].buttonText}
            </button>
            
            <div className="flex items-center space-x-4">
                <button onClick={prevSlide} className="rounded-full border border-gray-800 p-2 hover:bg-gray-200">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full border border-gray-800 ${currentSlide === i ? 'bg-gray-800 w-3 h-3' : ''}`}></div>
                    ))}
                </div>
                <button onClick={nextSlide} className="rounded-full border border-gray-800 p-2 hover:bg-gray-200 bg-gray-800 text-white">
                    <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        </main>
      </div>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section ref={scrollRef} className="bg-[#F46647] text-white relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-between h-auto py-20">
              <div>
                <h2 className="text-5xl font-light">
                  Самые интересные<br/>
                  предложения на <span className="border-b-2 border-white">сегодня</span>
          </h2>
                <p className="mt-8 text-lg">
                  Проекты, потенциал которых вы можете<br/>
                  использовать прямо сейчас
                </p>
              </div>
              <button className="border border-white rounded-full px-8 py-3 self-start hover:bg-white hover:text-[#F46647] transition-colors mt-8">
                СМОТРЕТЬ ВСЕ ПРОЕКТЫ
              </button>
            </div>

            <div className="relative h-screen flex items-center">
              <div className="absolute left-[-4rem] top-0 h-full w-px bg-black">
                <motion.div style={{ y: timelineY }} className="absolute w-2 h-24 bg-black rounded-full -ml-[3px]" />
              </div>
              <div className="w-full h-[600px] flex gap-8 overflow-hidden">
                <motion.div style={{ y: y1 }} className="w-full">
                  <div className="space-y-8">
                    {projectsCol1.map((project, index) => (
                      <div key={index} className="h-[480px] flex flex-col">
                        <div className={`flex-grow flex items-center justify-center ${project.logoBgColor}`}>
                          {project.logo}
                        </div>
                        <div className={`p-6 ${project.detailsBgColor} ${project.detailsTextColor}`}>
                          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Риск</p><p>{project.risk}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Срок</p><p>{project.term}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm mb-4">
                            <p className="opacity-70">Мин. сумма</p><p>{project.minAmount}</p>
                          </div>
                          <a href="#" className="flex justify-between items-center border-t border-gray-500 pt-4">
                            <span>Подробнее</span>
                            <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for infinite scroll */}
                    {projectsCol1.map((project, index) => (
                      <div key={`dup1-${index}`} className="h-[480px] flex flex-col">
                        <div className={`flex-grow flex items-center justify-center ${project.logoBgColor}`}>
                          {project.logo}
                        </div>
                        <div className={`p-6 ${project.detailsBgColor} ${project.detailsTextColor}`}>
                          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Риск</p><p>{project.risk}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Срок</p><p>{project.term}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm mb-4">
                            <p className="opacity-70">Мин. сумма</p><p>{project.minAmount}</p>
                          </div>
                          <a href="#" className="flex justify-between items-center border-t border-gray-500 pt-4">
                            <span>Подробнее</span>
                            <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div style={{ y: y2 }} className="w-full">
                  <div className="space-y-8">
                    {projectsCol2.map((project, index) => (
                      <div key={index} className="h-[480px] flex flex-col">
                        <div className={`flex-grow flex items-center justify-center ${project.logoBgColor}`}>
                          {project.logo}
                        </div>
                        <div className={`p-6 ${project.detailsBgColor} ${project.detailsTextColor}`}>
                          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Риск</p><p>{project.risk}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Срок</p><p>{project.term}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm mb-4">
                            <p className="opacity-70">Мин. сумма</p><p>{project.minAmount}</p>
                          </div>
                          <a href="#" className="flex justify-between items-center border-t border-gray-500 pt-4">
                            <span>Подробнее</span>
                             <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for infinite scroll */}
                    {projectsCol2.map((project, index) => (
                      <div key={`dup2-${index}`} className="h-[480px] flex flex-col">
                        <div className={`flex-grow flex items-center justify-center ${project.logoBgColor}`}>
                          {project.logo}
                        </div>
                        <div className={`p-6 ${project.detailsBgColor} ${project.detailsTextColor}`}>
                          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Риск</p><p>{project.risk}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <p className="opacity-70">Срок</p><p>{project.term}</p>
                          </div>
                          <div className="flex justify-between items-center text-sm mb-4">
                            <p className="opacity-70">Мин. сумма</p><p>{project.minAmount}</p>
                          </div>
                          <a href="#" className="flex justify-between items-center border-t border-gray-500 pt-4">
                            <span>Подробнее</span>
                             <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                          </a>
                        </div>
              </div>
            ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-5xl font-light">Запуск совсем <span className="text-red-500">скоро</span></h2>
          <p className="mt-4 text-lg text-gray-600">Проекты, потенциал которых вы можете использовать прямо сейчас</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 -ml-px">
             <div className="sticky top-1/2 -ml-2 flex flex-col items-center gap-y-[280px]">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
                </div>
          <div className="grid grid-cols-2">
            {upcomingProjects.map((project, index) => (
              <div key={index} className={index % 2 === 0 ? 'pr-8' : 'pl-8'}>
                <UpcomingProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EFEFEF] py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-start mb-20">
            <div className="w-full">
              <h2 className="text-5xl font-light text-center">Как это работает?</h2>
              <p className="text-lg text-gray-500 mt-2 text-center">Всего 3 простых шага</p>
            </div>
            <img src="/LOGO.svg" alt="Company Logo" className="h-8 flex-shrink-0" />
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Left Column: Steps */}
            <div className="space-y-12">
              {howItWorksSteps.map((step, index) => {
                const isActive = index === 0;
                return (
                  <div key={index}>
                    <div className="flex items-start">
                      <span className={`text-xl mr-6 font-light ${isActive ? 'text-black' : 'text-gray-400'}`}>{step.step}</span>
                      <div>
                        <h3 className={`text-2xl font-bold ${isActive ? 'text-black' : 'text-gray-400'}`}>{step.title}</h3>
                        {step.subtitle && <p className={`mt-2 text-base ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>{step.subtitle}</p>}
                      </div>
                    </div>
                    <div className="pl-12 mt-4 h-3">
                      {isActive && (
                        <div className="w-full h-px bg-black relative">
                          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column: Image and Button */}
            <div className="relative">
              <div className="bg-gray-800 h-[600px] w-full">
                <img src={howItWorksSteps[0].image} alt={howItWorksSteps[0].title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-end mt-8">
                <button className="border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={whyIWMRef} className="bg-white py-24 relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-2 gap-24">
          {/* Left Column (Sticky) */}
          <div className="flex flex-col justify-center h-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 h-2/3 w-px bg-gray-200">
              <motion.div
                style={{ y: timelineYWhy }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"
              />
            </div>
            <div className="pl-12">
              <h2 className="text-6xl font-light">Почему IWM?</h2>
              <p className="mt-4 text-lg text-gray-500">Мы делаем инвестиции доступными и надежными</p>
              <p className="mt-8 text-gray-600">
                IWM — инвестиционный маркетплейс, предоставляющий частным инвесторам доступ к фондам и проектам, которые ранее были доступны только профессиональным участникам рынка.
              </p>
              <p className="mt-4 text-gray-600">
                Разнообразие и диверсификация — широкий выбор инвестиционных инструментов для вашего портфеля.
              </p>
              <button className="mt-12 border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors">
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </div>
          </div>

          {/* Right Column (Scrolling) */}
          <div className="h-screen flex flex-col justify-around py-20">
            <motion.div style={{ opacity: itemOpacity1 }} className="border-b border-gray-200 py-8">
              <p className="text-sm text-gray-500 mb-4">{whyIWMItems[0].description}</p>
              <div className="bg-gray-800 h-48 w-full mb-6"></div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{whyIWMItems[0].title}</h3>
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </motion.div>
            
            <motion.div style={{ opacity: itemOpacity2 }} className="border-b border-gray-200 py-8">
              <p className="text-sm text-gray-500 mb-4">{whyIWMItems[1].description}</p>
              <div className="bg-gray-800 h-48 w-full mb-6"></div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{whyIWMItems[1].title}</h3>
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </motion.div>
           
            <motion.div style={{ opacity: itemOpacity3 }} className="py-8">
              <p className="text-sm text-gray-500 mb-4">{whyIWMItems[2].description}</p>
              <div className="bg-gray-800 h-48 w-full mb-6"></div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{whyIWMItems[2].title}</h3>
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `-${currentGallerySlide * (100 / 3)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {gallerySlides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-1/3">
                <div className="bg-gray-800 text-white p-8 relative h-[600px] flex flex-col justify-between">
                  <div>
                    <div className="w-4 h-4 rounded-full bg-white mb-8"></div>
                    <h3 className="text-4xl font-light">{slide.category}</h3>
                  </div>
                  <div className="bg-white text-black p-6">
                    <img src="/LOGO.svg" alt="Company Logo" className="h-6 mb-4" />
                    <p className="text-sm text-gray-500">{slide.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <h4 className="text-xl font-bold">{slide.title}</h4>
                      <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center items-center mt-12 gap-4">
          <button 
            onClick={() => setCurrentGallerySlide(prev => Math.max(prev - 1, 0))}
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>
          <div className="flex gap-2">
            {gallerySlides.map((_, i) => (
              <div 
                key={i} 
                className={`w-2.5 h-2.5 rounded-full ${currentGallerySlide === i ? 'bg-black' : 'border border-gray-400'}`}
              ></div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentGallerySlide(prev => Math.min(prev + 1, gallerySlides.length - 1))}
            className="w-10 h-10 rounded-full border border-gray-900 bg-gray-900 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;