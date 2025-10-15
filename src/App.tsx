import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Send } from 'lucide-react';
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
    step: '01',
    title: 'РЕГИСТРАЦИЯ',
    subtitle: 'Создайте учетную запись за пару минут',
    bgColor: 'bg-gray-800',
  },
  {
    step: '02',
    title: 'ВЫБОР ПРОЕКТА',
    subtitle: 'Выберите проект, который соответствует вашим целям',
    bgColor: 'bg-yellow-400',
  },
  {
    step: '03',
    title: 'ИНВЕСТИЦИЯ',
    subtitle: 'Высокая доходность и прозрачность на каждом этапе',
    bgColor: 'bg-blue-500',
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

const newsSlides = [
  {
    title: 'ЗАГОЛОВОК У ВТОРОЙ НОВОСТИ',
    description: 'Краткое описание новости',
  },
  {
    title: 'ЗАГОЛОВОК У ТРЕТЬЕЙ НОВОСТИ',
    description: 'Краткое описание новости',
  },
  {
    title: 'ЗАГОЛОВОК У ЧЕТВЕРТОЙ НОВОСТИ',
    description: 'Краткое описание новости',
  },
  {
    title: 'ЗАГОЛОВОК У ПЯТОЙ НОВОСТИ',
    description: 'Краткое описание новости',
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

const UpcomingProjectCard = ({ project, hasBorderRight, isSpecial }) => {
  return (
    <div className={`p-8 flex gap-8 items-start border-b border-gray-300 ${hasBorderRight ? 'border-r border-gray-300' : ''}`}>
      <div className="w-40 h-40 bg-gray-800 flex-shrink-0"></div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <div className="border border-gray-400 rounded-full px-3 py-1 text-sm inline-block mb-4">{project.year}</div>
            <h3 className="font-bold text-xl mt-2">{project.title}</h3>
          </div>
          <button className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shrink-0 ${isSpecial ? 'bg-black text-white' : 'border border-gray-400 text-gray-400'}`}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

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
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);

  const howItWorksRef = useRef(null);
  const { scrollYProgress: howItWorksScrollYProgress } = useScroll({
    target: howItWorksRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const unsubscribe = howItWorksScrollYProgress.on("change", (latest) => {
      const step = Math.min(Math.floor(latest * howItWorksSteps.length), howItWorksSteps.length - 1);
      setActiveStep(step);
    });
    return () => unsubscribe();
  }, [howItWorksScrollYProgress]);


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
        
        <div className="border-t border-gray-300">
          <div className="grid grid-cols-2">
            {upcomingProjects.map((project, index) => (
              <UpcomingProjectCard 
                key={index} 
                project={project} 
                hasBorderRight={index % 2 === 0}
                isSpecial={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={howItWorksRef} className="bg-[#EFEFEF] h-[300vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="container mx-auto px-6 h-full relative flex flex-col items-center">
            
            {/* Logo */}
            <img src="/LOGO.svg" alt="Company Logo" className="h-8 absolute top-20 right-6" />

            {/* Title */}
            <div className="text-center pt-20">
              <h2 className="text-5xl font-light">Как это работает?</h2>
              <p className="text-lg text-gray-500 mt-2">Всего 3 простых шага</p>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow w-full flex items-center justify-center relative">
              
              {/* Square in the center */}
              <div className="w-[500px] h-[500px] relative">
                {howItWorksSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  return (
                    <motion.div
                      key={index}
                      className={`w-full h-full absolute top-0 left-0 ${step.bgColor}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}

                {/* Text on the left of the square */}
                <div className="absolute top-1/2 -translate-y-1/2 right-full mr-16 w-80">
                  <div className="relative h-24">
                    {howItWorksSteps.map((step, index) => {
                      const isActive = index === activeStep;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-0 left-0 w-full"
                        >
                          <div className="flex items-start">
                            <span className="text-xl mr-6 font-light">{step.step}</span>
                            <div className="text-left">
                              <h3 className="text-2xl font-bold">{step.title}</h3>
                              {step.subtitle && <p className="mt-2 text-sm text-gray-600">{step.subtitle}</p>}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <button className="absolute bottom-20 right-6 border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>

          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-24 items-center">
                {/* Left Column */}
                <div className="relative pl-12">
                    <div className="absolute top-0 left-0 h-full">
                        <div className="w-px h-full bg-gray-200"></div>
                        <div className="absolute top-2 -left-1.5 w-4 h-4 bg-black rounded-full"></div>
                    </div>
                    <h2 className="text-5xl font-light">Почему IWM?</h2>
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

                {/* Right Column */}
                <div className="space-y-12">
                    {whyIWMItems.map((item, index) => (
                        <div key={index} className={index < whyIWMItems.length - 1 ? "border-b border-gray-200 pb-8" : "pb-8"}>
                            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                            <div className={`h-48 w-full mb-6 ${index === 2 ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-3xl font-light tracking-wider">{item.title}</h3>
                                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                                    <ChevronRight className="h-6 w-6 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    ))}
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
        <div className="text-center mt-24">
          <h2 className="text-5xl font-light">Особые предложения</h2>
          <p className="mt-4 text-lg text-gray-600">Эксклюзивные решения, адаптированные под ваш уровень инвестиций</p>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-light">
              Партнеры <span className="text-red-500">IWM</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Мы работаем с лучшими</p>
          </div>

          <div className="relative h-96">
            <div className="grid grid-cols-4 gap-8 pt-8">
              <div className="h-64 bg-gray-800"></div>
              <div className="h-64 bg-gray-800"></div>
              <div className="h-64 bg-gray-800"></div>
              <div className="h-64 bg-gray-800"></div>
            </div>

            <div className="absolute top-0 left-0 w-full grid grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative h-8">
                  <div className="absolute top-0 left-0 w-px h-8 bg-white"></div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-24 w-full h-px bg-gray-400"></div>
            
            <div className="absolute bottom-12 left-2/3">
              <div className="relative w-4 h-4 bg-black rounded-full">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-4 bg-gray-400"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2">
              <div className="relative w-4 h-4 bg-black rounded-full">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `-${currentNewsSlide * (100 / 3)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {newsSlides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-1/3">
                  <div className="bg-gray-800 relative h-[600px] flex flex-col justify-end">
                    <div className="bg-white text-black p-6 m-8">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-sm text-gray-500">{slide.description}</p>
                        <img src="/LOGO.svg" alt="Company Logo" className="h-6" />
                      </div>
                      <div className="flex justify-between items-end mt-4">
                        <h4 className="text-xl font-bold w-3/4">{slide.title}</h4>
                        <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer shrink-0">
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
              onClick={() => setCurrentNewsSlide(prev => Math.max(prev - 1, 0))}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>
            <div className="flex gap-2">
              {newsSlides.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full ${currentNewsSlide === i ? 'bg-black' : 'border border-gray-400'}`}
                ></div>
              ))}
            </div>
            <button 
              onClick={() => setCurrentNewsSlide(prev => Math.min(prev + 1, newsSlides.length - 1))}
              className="w-10 h-10 rounded-full border border-gray-900 bg-gray-900 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
          <div className="flex justify-between items-end mt-24">
            <div>
                <h2 className="text-5xl font-light">Новости</h2>
                <p className="mt-4 text-lg text-gray-600">Главные рыночные события и аналитика в одном месте</p>
            </div>
            <button className="border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors">
                СМОТРЕТЬ ВСЕ НОВОСТИ
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-light leading-tight">
                Будьте в курсе лучших<br/>
                инвест-идей
              </h2>
              <p className="mt-8 text-gray-600">
                Ежедневная аналитика и инсайты, которые помогут принимать взвешенные инвестиционные решения
              </p>
              <p className="mt-4 text-gray-600">
                Получайте отборные рыночные обзоры, перспективные идеи и стратегические прогнозы от экспертов IWM. Только проверенные данные, без шума и лишней информации. Подпишитесь и инвестируйте с уверенностью в каждом шаге.
              </p>
              
              <div className="mt-12">
                <p className="text-4xl font-light">
                  <span className="font-semibold">9 000+</span> подписчиков с нами
                </p>
                <p className="mt-2 text-gray-600">Мы делимся только тем, что сами используем</p>
              </div>

              <div className="mt-12">
                <p className="text-sm font-semibold text-gray-500 tracking-wider">ПРЕИМУЩЕСТВА ПОДПИСКИ</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Актуальные тренды рынков</span>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Рабочие идеи для роста капитала</span>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Обзоры ключевых событий и сделок</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute h-full w-px bg-gray-300 left-1/2 -ml-px"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
          
          <div className="mt-24 border-t border-gray-300 pt-12">
            <div className="flex items-center gap-4">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow bg-white border border-gray-300 rounded-full px-6 py-3"
              />
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full relative">
                Подписаться
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  +1
                </span>
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Нажимая кнопку вы соглашаетесь с условиями <a href="#" className="underline">политики конфиденциальности</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex space-x-8 text-gray-800">
                <a href="#" className="hover:text-red-500">Для инвесторов</a>
                <a href="#" className="hover:text-red-500">Для бизнеса</a>
                <a href="#" className="hover:text-red-500">О компании</a>
              </div>
              <div className="flex space-x-6 mt-6 text-sm text-red-400">
                <span>© 2025 IWM</span>
                <a href="#" className="hover:underline">Политика конфиденциальности</a>
                <a href="#" className="hover:underline">Юридическая информация</a>
                <a href="#" className="hover:underline">Уведомление о рисках</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;