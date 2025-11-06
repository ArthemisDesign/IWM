import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Send } from 'lucide-react';
import Footer from '../components/Footer';
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const hoverColors = ['hover:bg-pale-red', 'hover:bg-pale-blue', 'hover:bg-pale-grey'];

// Slider component
const Slider = () => {
    const slides = [
      {
          title: "Инвестируйте в те проекты и стратегии, которые подходят персонально для вас",
          subtitle: "Выбирайте из широкого спектра вариантов, которые соответствуют вашим интересам, ценностям, финансовым целям и уровню риска, который для вас комфортен",
          buttonText: "Начать",
          bgColor: "bg-custom-blue",
          image: "/slider images/1.png",
          buttonColor: "bg-custom-red",
          titleColor: "text-white",
          subtitleColor: "text-white/80",
          buttonTextColor: "text-white",
          arrowClasses: "border-white text-white",
          arrowHover: "hover:bg-white/10"
      },
      {
        title: "Платформа РУ",
        subtitle: "Алгоритмическая стратегия, ранее доступная только квалифицированным инвесторам, теперь открыта на IWM",
          buttonText: "Узнать больше",
          bgColor: "bg-brand-black",
          buttonColor: "bg-custom-grey",
          titleColor: "text-white",
          subtitleColor: "text-white/80",
          buttonTextColor: "text-brand-black",
          arrowClasses: "border-white text-white",
          arrowHover: "hover:bg-white/10"
      },
      {
        title: "Станьте частью самых амбициозных проектов мира",
        subtitle: "Финансовая экосистема IWM открывает уникальные возможности для инвесторов и финансовых институтов по всему миру",
          buttonText: "Подробнее",
          bgColor: "bg-custom-red",
          image: "/slider images/2.png",
          buttonColor: "bg-brand-black",
          titleColor: "text-brand-black",
          subtitleColor: "text-brand-black/80",
          buttonTextColor: "text-white",
          arrowClasses: "border-brand-black text-brand-black",
          arrowHover: "hover:bg-black/10"
      },
      {
        title: "Надежность и прозрачность",
        subtitle: "Все данные по проектам доступны вам не раз в квартал, а в любой момент. В личном кабинете отражается актуальная статистика в реальном времени, а сводные показатели фонда и проектов всегда на виду.",
          buttonText: "Подробнее",
          bgColor: "bg-custom-grey",
          image: "/slider images/4.png",
          buttonColor: "bg-custom-blue",
          titleColor: "text-brand-black",
          subtitleColor: "text-brand-black/80",
          buttonTextColor: "text-white",
          arrowClasses: "border-brand-black text-brand-black",
          arrowHover: "hover:bg-black/10"
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
          <div className="relative z-10 container mx-auto px-6 pt-16 pb-80 md:py-32 flex flex-col justify-center min-h-[calc(100vh-88px-1rem)] md:min-h-[calc(100vh-88px-3rem)]">
            <div className="text-left max-w-5xl">
              <div className="h-auto md:h-[28rem] flex flex-col justify-center">
                <h1 className={`text-3xl sm:text-4xl md:text-6xl font-light mb-6 leading-tight transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-200'} ${slides[currentSlide].titleColor || 'text-brand-black'}`}>
                    {slides[currentSlide].title}
              </h1>
                <p className={`text-base mb-10 max-w-3xl transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-300'} ${slides[currentSlide].subtitleColor || 'text-gray-600'}`}>
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className={`${slides[currentSlide].buttonColor || 'bg-custom-red'} ${slides[currentSlide].buttonTextColor || 'text-white'} w-full sm:w-72 text-center px-10 py-4 rounded-full font-light transition-all duration-500 ease-in-out hover:brightness-95 uppercase tracking-wider ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-500'}`}>
                  {slides[currentSlide].buttonText}
                </button>
                <div className="flex items-center space-x-3">
                  <button onClick={prevSlide} className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-500 ${slides[currentSlide].arrowClasses} ${slides[currentSlide].arrowHover}`}>
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                  <button onClick={nextSlide} className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-500 ${slides[currentSlide].arrowClasses} ${slides[currentSlide].arrowHover}`}>
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
              className={`absolute bottom-0 right-0 w-full max-h-[40vh] md:w-4/5 md:right-[-15rem] md:max-h-full object-contain transition-all duration-500 ease-in-out pointer-events-none ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0 delay-100'}`}
            />
          )}
        </section>
      );
    };

    // Milestones component
    const Milestones = () => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const stats = [
        { value: 10000, label: 'пользователей', suffix: '+' },
        { value: 20, label: 'реализованных успешных инвестиционных идей', suffix: '+' },
        { value: 18, label: 'привлеченных инвестиций', prefix: '$', suffix: '+ млн' },
      ];

      const statBlocks = [
        {
          ...stats[0],
          bgColor: 'bg-custom-red',
          textColor: 'text-white',
          labelColor: 'text-white/80',
        },
        {
          ...stats[1],
          bgColor: 'bg-custom-blue',
          textColor: 'text-white',
          labelColor: 'text-white/80',
        },
        {
          ...stats[2],
          bgColor: 'bg-custom-grey',
          textColor: 'text-brand-black',
          labelColor: 'text-gray-500',
        }
      ];

      return (
        <section className="bg-white py-12 md:py-24" ref={ref}>
            <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {statBlocks.map((stat, index) => (
                <div key={index} className={`text-left p-8 rounded-3xl ${stat.bgColor}`}>
                  <p className={`text-4xl md:text-5xl font-n27 font-light ${stat.textColor}`}>
                    {inView &&
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2.5} 
                        separator=" "
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    }
                  </p>
                  <p className={`mt-4 ${stat.labelColor}`}>{stat.label}</p>
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

        const projectBlocks = [
            {
                ...projects[0],
                bgColor: 'bg-custom-red',
                titleColor: 'text-brand-black',
                labelColor: 'text-brand-black/80',
                valueColor: 'text-brand-black',
                linkColor: 'text-brand-black',
                imageBgColor: 'bg-white',
                buttonHoverBg: 'hover:bg-brand-black',
                buttonHoverText: 'hover:text-white'
            },
            {
                ...projects[1],
                bgColor: 'bg-custom-blue',
                titleColor: 'text-brand-black',
                labelColor: 'text-brand-black/80',
                valueColor: 'text-brand-black',
                linkColor: 'text-brand-black',
                imageBgColor: 'bg-white',
                buttonHoverBg: 'hover:bg-custom-grey',
                buttonHoverText: ''
            },
            {
                ...projects[2],
                bgColor: 'bg-custom-grey',
                titleColor: 'text-brand-black',
                labelColor: 'text-brand-black/80',
                valueColor: 'text-brand-black',
                linkColor: 'text-custom-red',
                imageBgColor: 'bg-white',
                buttonHoverBg: 'hover:bg-custom-red',
                buttonHoverText: 'hover:text-white'
            }
        ];

        return (
            <section className="bg-white py-12 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-10 md:mb-16">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Начать инвестировать</p>
                        <h2 className="text-4xl md:text-6xl font-light">Самые интересные предложения на сегодня</h2>
                  </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectBlocks.map((project, index) => (
                            <div key={index} className={`flex flex-col p-6 md:p-8 rounded-3xl ${project.bgColor}`}>
                                <div>
                                    {project.image ? (
                                        <div className={`w-full h-auto aspect-square ${project.imageBgColor} mb-6 rounded-3xl flex items-center justify-center overflow-hidden`}>
                                            <img src={project.image} alt={project.name} className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-auto aspect-square bg-gray-100 mb-6 rounded-3xl"></div>
                                    )}
                                    <h3 className={`text-2xl md:text-3xl font-medium mb-4 ${project.titleColor}`}>{project.name}</h3>
                                    <div className="mb-6 space-y-2">
                                        <div className="flex justify-between">
                                            <p className={`text-xl ${project.labelColor}`}>Риск:</p>
                                            <p className={`text-2xl font-light ${project.valueColor}`}>{project.risk}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className={`text-xl ${project.labelColor}`}>Срок:</p>
                                            <p className={`text-2xl font-light font-n27 ${project.valueColor}`}>{project.term}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className={`text-xl ${project.labelColor}`}>Мин. сумма:</p>
                                            <p className={`text-2xl font-light font-n27 ${project.valueColor}`}>{project.minAmount}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className={`mt-auto self-start font-light text-lg md:text-xl uppercase tracking-wider px-6 py-2 rounded-full transition-colors ${project.linkColor} ${project.buttonHoverBg} ${project.buttonHoverText}`}>Подробнее</a>
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

        const projectCardStyles = [
            { bgColor: 'bg-custom-red', titleColor: 'text-brand-black', descriptionColor: 'text-brand-black/80', buttonColor: 'text-brand-black', buttonHover: 'hover:bg-brand-black hover:text-white' },
            { bgColor: 'bg-custom-blue', titleColor: 'text-custom-grey', descriptionColor: 'text-brand-black/80', buttonColor: 'text-brand-black', buttonHover: 'hover:bg-custom-grey' },
            { bgColor: 'bg-custom-grey', titleColor: 'text-custom-red', descriptionColor: 'text-brand-black/80', buttonColor: 'text-custom-red', buttonHover: 'hover:bg-custom-red hover:text-white' },
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
            <section className="py-12 md:py-24 bg-brand-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-10 md:mb-16">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Совсем скоро на IWM</p>
                        <h2 className="text-4xl md:text-6xl font-light text-white">Запуск совсем скоро</h2>
                              </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                        {projects.map((project, index) => {
                            const style = projectCardStyles[index % projectCardStyles.length];
                            return (
                            <div key={index} className={`flex flex-col p-6 md:p-8 transition-colors duration-300 rounded-3xl ${style.bgColor}`}>
                                <div>
                                    <div className="w-full h-auto aspect-square bg-gray-100 mb-6 rounded-3xl overflow-hidden">
                                        <img src={images[index % images.length]} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className={`font-medium text-2xl md:text-3xl mb-3 ${style.titleColor}`}>{project.title}</h3>
                                    <p className={`text-base mb-6 ${style.descriptionColor}`}>{project.description}</p>
                                </div>
                                <button className={`mt-auto self-start font-light text-lg md:text-xl uppercase tracking-wider px-6 py-2 rounded-full transition-colors ${style.buttonColor} ${style.buttonHover}`}>Подробнее</button>
                          </div>
                        )})}
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

        const stepBlocks = [
            {
                ...steps[0],
                bgColor: 'bg-custom-red',
                numberColor: 'text-white/80',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80'
            },
            {
                ...steps[1],
                bgColor: 'bg-custom-blue',
                numberColor: 'text-white/80',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80'
            },
            {
                ...steps[2],
                bgColor: 'bg-custom-grey',
                numberColor: 'text-brand-black/50',
                titleColor: 'text-brand-black',
                descriptionColor: 'text-brand-black/80'
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
            <section className="bg-white text-brand-black py-16 md:py-32">
                <div className="container mx-auto px-6 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-light mb-12 md:mb-20">Всего три простых шага</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stepBlocks.map((step, index) => (
                            <div key={index} className={`p-6 md:p-8 rounded-3xl ${step.bgColor}`}>
                                <div className="w-full h-auto aspect-square bg-gray-100 mb-8 rounded-3xl overflow-hidden">
                                    <img src={images[(index + 1) % 3]} alt={step.title} className="w-full h-full object-cover" />
                                </div>
                                <div className={`font-light font-n27 text-5xl mb-6 ${step.numberColor}`}>0{index + 1}</div>
                                <h3 className={`text-2xl md:text-3xl font-light mb-3 ${step.titleColor}`}>{step.title}</h3>
                                <p className={`text-base ${step.descriptionColor}`}>{step.description}</p>
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

        const itemBlocks = [
            {
                ...items[0],
                bgColor: 'bg-custom-red',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80'
            },
            {
                ...items[1],
                bgColor: 'bg-custom-blue',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80'
            },
            {
                ...items[2],
                bgColor: 'bg-custom-grey',
                titleColor: 'text-brand-black',
                descriptionColor: 'text-brand-black/80'
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
            <section className="bg-brand-black text-custom-grey py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-light mb-6">Почему IWM?</h2>
                            <p className="text-base text-custom-grey/80 mb-8">Мы делаем инвестиции доступными и надежными</p>
                            <p className="text-base text-custom-grey mb-6">
                                IWM – инвестиционный маркетплейс, предоставляющий частным инвесторам доступ к фондам и проектам, которые ранее были доступны только профессиональным участникам рынка.
                            </p>
                            <p className="text-base text-custom-grey">
                                Разнообразие и диверсификация – широкий выбор инвестиционных инструментов для вашего портфеля.
                            </p>
                            <button className="mt-12 bg-custom-red text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
                                Зарегистрироваться
                            </button>
                        </div>
                        <div className="space-y-12">
                            {itemBlocks.map((item, index) => (
                                <div key={index} className={`flex items-start space-x-6 p-6 rounded-3xl ${item.bgColor}`}>
                                    <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                                        <img src={images[(index + 1) % 3]} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl md:text-3xl font-light mb-2 ${item.titleColor}`}>{item.title}</h3>
                                        <p className={`text-base ${item.descriptionColor}`}>{item.description}</p>
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

        const tierBlocks = [
            {
                ...tiers[0],
                bgColor: 'bg-custom-red',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80',
                linkColor: 'text-white'
            },
            {
                ...tiers[1],
                bgColor: 'bg-custom-blue',
                titleColor: 'text-white',
                descriptionColor: 'text-white/80',
                linkColor: 'text-white'
            },
            {
                ...tiers[2],
                bgColor: 'bg-custom-grey',
                titleColor: 'text-brand-black',
                descriptionColor: 'text-brand-black/80',
                linkColor: 'text-custom-red'
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
            <section className="bg-white text-brand-black py-12 md:py-24">
          <div className="container mx-auto px-6 text-center md:text-left">
                    <div className="max-w-2xl mb-10 md:mb-16">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">IWM Capital Tiers</p>
                        <h2 className="text-4xl md:text-6xl font-light mb-4">Особые предложения</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tierBlocks.map((tier, index) => (
                            <div key={index} className={`flex flex-col p-6 md:p-8 rounded-3xl ${tier.bgColor}`}>
                                <div>
                                    <div className="w-full h-auto aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-6">
                                        <img src={images[(index + 3) % images.length]} alt={tier.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className={`text-2xl md:text-3xl font-light mb-4 ${tier.titleColor}`}>{tier.title}</h3>
                                    <p className={`text-base mb-6 ${tier.descriptionColor}`}>{tier.description}</p>
                                </div>
                                <a href="#" className={`mt-auto self-start font-light text-lg md:text-xl uppercase tracking-wider px-6 py-2 rounded-full transition-colors ${tier.linkColor} hover:bg-custom-red hover:text-white`}>{ "Узнать больше" }</a>
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

        const partnerBlocks = [
            {
                ...partners[0],
                bgColor: 'bg-custom-red',
                titleColor: 'text-white',
            },
            {
                ...partners[1],
                bgColor: 'bg-custom-blue',
                titleColor: 'text-white',
            },
            {
                ...partners[2],
                bgColor: 'bg-custom-grey',
                titleColor: 'text-brand-black',
            },
            {
                ...partners[3],
                bgColor: 'bg-brand-black',
                titleColor: 'text-white',
            }
        ];

        return (
            <section className="bg-white py-12 md:py-24">
            <div className="container mx-auto px-6 text-center md:text-left">
                    <div className="max-w-2xl mb-10 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-light">Партнеры IWM</h2>
                        <p className="mt-4 text-base text-gray-600">Мы работаем с лучшими</p>
          </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {partnerBlocks.map((partner, index) => (
                        <div key={index} className={`p-6 md:p-8 rounded-3xl text-center ${partner.bgColor}`}>
                            <div className="w-full h-auto aspect-square mb-6 rounded-3xl flex items-center justify-center overflow-hidden">
                                <img src={partner.image} alt={partner.name} className="w-full h-full object-cover"/>
                            </div>
                            <h3 className={`text-lg md:text-xl font-medium ${partner.titleColor}`}>{partner.name}</h3>
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

        const articleBlocks = [
            {
                ...articles[0],
                bgColor: 'bg-custom-red',
                titleColor: 'text-white',
                linkColor: 'text-white'
            },
            {
                ...articles[1],
                bgColor: 'bg-custom-blue',
                titleColor: 'text-white',
                linkColor: 'text-white'
            },
            {
                ...articles[2],
                bgColor: 'bg-custom-grey',
                titleColor: 'text-brand-black',
                linkColor: 'text-custom-red'
            }
        ];

        const loopedArticles = [...articleBlocks, ...articleBlocks, ...articleBlocks];

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
            <section className="bg-white py-12 md:py-32 overflow-hidden">
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
                </div>
                <Marquee pauseOnHover={true} speed={40} gradient={false}>
                    {loopedArticles.map((article, index) => (
                        <div key={index} className={`flex-shrink-0 text-left p-6 rounded-3xl ${article.bgColor} w-[24rem] md:w-[28rem] mx-4`}>
                            <div className="w-full h-auto aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-6">
                                <img src={images[(index % 3) + 6]} alt={article.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-xl md:text-2xl font-light leading-tight mb-4 ${article.titleColor}`}>{article.title}</h3>
                            <a href="#" className={`inline-block font-light text-lg md:text-xl uppercase tracking-wider px-6 py-2 rounded-full hover:bg-white/20 transition-colors ${article.linkColor}`}>Узнать больше</a>
                        </div>
                    ))}
                </Marquee>
            </section>
        );
    };

    // Subscription component
    const Subscription = () => {
      return (
        <section className="bg-white py-16 md:py-32">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">Будьте в курсе лучших инвест-идей</h2>
              <p className="mt-8 text-base text-gray-600">Ежедневная аналитика и инсайты, которые помогут принимать взвешенные инвестиционные решения.</p>
              <p className="mt-6 text-base text-gray-600">Получайте отборные рыночные обзоры, перспективные идеи и стратегические прогнозы от экспертов IWM. Только проверенные данные, без шума и лишней информации. Подпишитесь и инвестируйте с уверенностью в каждом шаге.</p>
              <p className="mt-10 text-brand-black text-base"><span className="font-bold font-n27">9 000+</span> подписчиков с нами – мы делимся только тем, что используем сами.</p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="space-y-4">
                    <p className="text-brand-black font-light text-base">Преимущества подписки:</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-100 text-brand-black px-4 py-2 text-sm font-light rounded-md">Актуальные тренды рынков</span>
                        <span className="bg-gray-100 text-brand-black px-4 py-2 text-sm font-light rounded-md">Рабочие идеи для роста капитала</span>
                        <span className="bg-gray-100 text-brand-black px-4 py-2 text-sm font-light rounded-md">Обзоры ключевых событий и сделок</span>
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

const HomePage = () => {
  return (
    <>
        <Slider />
        <Milestones />
        <div className="border-t border-brand-black" />
        <Invest />
        <div className="border-t border-brand-black" />
        <UpcomingProjects />
        <div className="border-t border-brand-black" />
        <HowItWorks />
        <div className="border-t border-brand-black" />
        <WhyIWM />
        <div className="border-t border-brand-black" />
        <CapitalTiers />
        <div className="border-t border-brand-black" />
        <Partners />
        <div className="border-t border-brand-black" />
        <News />
        <div className="border-t border-brand-black" />
        <Subscription />
        <Footer />
    </>
  );
}

export default HomePage;
