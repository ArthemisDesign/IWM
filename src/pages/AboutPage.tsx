import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-brand-black text-white relative overflow-hidden m-2 md:m-6 rounded-3xl">
        <div className="relative z-10 container mx-auto px-6 pt-16 pb-80 md:py-32 flex flex-col justify-center min-h-[calc(100vh-88px-1rem)] md:min-h-[calc(100vh-88px-3rem)]">
          <div className="text-center md:text-left max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-light mb-4">О Компании</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              Мы создаём среду, в которой любой человек, с любым опытом и капиталом, может инвестировать в перспективные проекты по всему миру
            </p>
          </div>
        </div>
        <img
          src="/slider images/1.png"
          alt=""
          className="absolute bottom-0 right-0 w-full max-h-[40vh] md:w-4/5 md:right-[-15rem] md:max-h-full object-contain pointer-events-none"
        />
      </section>

      {/* About Intro Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-4">Наша миссия</h2>
              <p className="text-xl font-semibold text-custom-blue mb-8">Демократизация инвестиций для каждого</p>
              <p className="text-lg text-gray-700">
                IWM - инвестиционный маркетплейс нового поколения. Мы объединяем технологии, аналитику и сообщество, чтобы дать вам доступ к инструментам, которые раньше были только у крупных игроков.
              </p>
            </div>
            <div className="bg-custom-red p-8 md:p-12 rounded-3xl text-brand-black">
              <h3 className="text-2xl font-light mb-4">Наша цель</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Убрать барьеры входа</li>
                  <li>Дать возможность инвестировать в лучшие мировые проекты</li>
                  <li>Повысить финансовую грамотность через образование и поддержку</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-light mb-4">Почему мы это делаем</h2>
              <p className="text-lg md:text-xl max-w-4xl text-gray-700">Мир полон идей, которым нужны ресурсы, и людей, которые хотят, чтобы их деньги работали. Мы создаем мост между ними.</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-custom-red rounded-3xl overflow-hidden">
                    <div className="w-full h-auto aspect-square bg-white">
                        <img src="/images/image 2076.png" alt="Простота" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 text-brand-black">
                        <h3 className="text-2xl font-light mb-2">Простота</h3>
                        <p className="opacity-80">понятные шаги, минимальная бюрократия</p>
                    </div>
                </div>
                <div className="bg-custom-blue rounded-3xl overflow-hidden text-white">
                    <div className="w-full h-auto aspect-square bg-white">
                        <img src="/images/image 2079.png" alt="Прозрачность" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-light mb-2">Прозрачность</h3>
                        <p className="opacity-80">честные условия, проверенные проекты</p>
                    </div>
                </div>
                <div className="bg-custom-grey rounded-3xl overflow-hidden text-custom-red">
                    <div className="w-full h-auto aspect-square bg-white">
                        <img src="/images/image 2080.png" alt="Доступность" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-light mb-2">Доступность</h3>
                        <p className="opacity-80">от $100, без географических ограничений</p>
                    </div>
                </div>
                <div className="bg-brand-black rounded-3xl overflow-hidden text-white">
                    <div className="w-full h-auto aspect-square bg-white">
                        <img src="/images/image 2083.png" alt="Поддержка" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-light mb-2">Поддержка</h3>
                        <p className="opacity-80">обучение, аналитика, комьюнити</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="bg-custom-grey p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-light text-custom-red mb-8">Вместе мы…</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <img src="/images/image 2084.png" alt="Открываем доступ к частным рынкам" className="w-full h-40 object-cover rounded-xl mb-4"/>
                    <p className="text-brand-black">Открываем доступ к частным рынкам</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <img src="/images/image 2085.png" alt="Делаем капитал инструментом перемен" className="w-full h-40 object-cover rounded-xl mb-4"/>
                    <p className="text-brand-black">Делаем капитал инструментом перемен</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <img src="/images/image 2086.png" alt="Формируем новое поколение инвесторов" className="w-full h-40 object-cover rounded-xl mb-4"/>
                    <p className="text-brand-black">Формируем новое поколение инвесторов</p>
                </div>
            </div>
          </div>

          <div className="pt-16">
            <h2 className="text-3xl md:text-5xl font-light">Будущее инвестиций начинается с вас</h2>
          </div>

        </div>
      </section>

      {/* Дорожная карта */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-light">Дорожная карта</h2>
            <p className="text-lg text-white/80 mt-2">Наш путь к глобальной платформе инвестиций</p>
          </div>
          
          <div className="overflow-x-auto pb-8 -mx-6 px-6">
            <div className="relative w-max">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
              <div className="flex">
                {[
                  {
                    year: "2025",
                    title: "запуск",
                    points: [
                      "Запуск MVP платформы",
                      "Первые листинги инвестиционных проектов",
                      "Привлечение ранних инвесторов и партнеров",
                    ],
                    active: true,
                  },
                  {
                    year: "2026",
                    title: "масштабирование",
                    points: [
                      "Запуск мобильного приложения",
                      "Добавление токенизированных активов",
                      "Выход на рынки ЕС и Ближнего Востока",
                    ],
                    active: false,
                  },
                  {
                    year: "2027",
                    title: "международная экспансия",
                    points: [
                      "Интеграция с глобальными платежными системами",
                      "Расширение базы пользователей до 1 млн+",
                      "Листинг первых крупных фондов на платформе",
                    ],
                    active: false,
                  },
                  {
                    year: "2028+",
                    title: "глобальный инвестиционный хаб",
                    points: [
                      "Поддержка сделок более чем в 50 странах",
                      "Расширенный функционал для институциональных инвесторов",
                      "Лидерство в сегменте цифровых частных инвестиций",
                    ],
                    active: false,
                  },
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col items-center flex-shrink-0 px-8 md:px-12 py-8 w-80">
                    <div className="text-center mb-auto h-48 flex flex-col justify-end">
                      {index % 2 === 0 && (
                        <div>
                          <h4 className={`text-xl font-bold ${item.active ? 'text-custom-red' : ''}`}>{item.year} – {item.title}</h4>
                          <ul className="mt-2 text-white/80 text-left text-sm space-y-1 pl-4">
                            {item.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className={`w-4 h-4 rounded-full my-4 z-10 flex-shrink-0 ${item.active ? 'bg-custom-red' : 'bg-gray-600'}`}></div>
                    
                    <div className="text-center mt-auto h-48">
                      {index % 2 !== 0 && (
                        <div>
                          <h4 className={`text-xl font-bold ${item.active ? 'text-custom-red' : ''}`}>{item.year} – {item.title}</h4>
                          <ul className="mt-2 text-white/80 text-left text-sm space-y-1 pl-4">
                            {item.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-light">Вы можете стать частью нашего пути уже сегодня</h3>
            <button className="mt-4 bg-custom-red text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition">Присоединиться к IWM</button>
          </div>
        </div>
      </section>
      
      {/* Команда */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-light">Команда</h2>
            <p className="text-lg mt-2 text-gray-600">Люди, которые делают инвестиции доступными для всех</p>
          </div>
          <div className="mb-12 bg-gray-50 p-12 rounded-3xl">
            <h3 className="text-2xl font-light">Наш подход к команде</h3>
            <p className="mt-4 max-w-3xl text-gray-700">В IWM мы верим, что доверие начинается с людей. Каждый член нашей команды — эксперт в своей области, с реальным опытом в инвестициях, финансах, разработке и управлении проектами.</p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6">Ключевые участники</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center p-6 bg-gray-100 rounded-2xl">Сотрудник 1</div>
              <div className="text-center p-6 bg-gray-100 rounded-2xl">Сотрудник 2</div>
              <div className="text-center p-6 bg-gray-100 rounded-2xl">Сотрудник 3</div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6">Советники и партнеры</h3>
            <p className="max-w-3xl text-gray-700">Мы сотрудничаем с лидерами отрасли — юристами, инвесторами и предпринимателями, которые помогают нам развиваться и масштабироваться.</p>
            <div className="flex justify-center space-x-8 mt-6">
                <div className="text-center p-4 bg-gray-100 rounded-2xl">Советник 1</div>
                <div className="text-center p-4 bg-gray-100 rounded-2xl">Советник 2</div>
                <div className="text-center p-4 bg-gray-100 rounded-2xl">Советник 3</div>
            </div>
          </div>
          <div className="bg-custom-blue text-white p-12 rounded-3xl">
            <h3 className="text-2xl font-light">Мы всегда открыты новым талантам.</h3>
            <p className="mt-2 text-white/80">Присоединяйтесь к команде, которая меняет инвестиционный рынок</p>
            <button className="mt-6 bg-white text-custom-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Вакансии</button>
          </div>
        </div>
      </section>

      {/* Новости и статьи */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-light">Новости и статьи</h2>
            </div>
            <button className="bg-white border-2 border-gray-200 px-8 py-3 rounded-full font-light hover:bg-gray-100 transition-colors whitespace-nowrap uppercase tracking-wider self-start md:self-auto">
                Смотреть все
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-red text-brand-black rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2076.png" alt="Новость 1" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Заголовок первой новости</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-brand-black text-brand-black hover:bg-brand-black hover:text-white">Узнать больше</a>
            </div>
            <div className="bg-custom-blue text-white rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2079.png" alt="Новость 2" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Заголовок второй новости</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-white text-white hover:bg-white hover:text-custom-blue">Узнать больше</a>
            </div>
            <div className="bg-custom-grey text-custom-red rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2080.png" alt="Новость 3" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Заголовок третьей новости</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-custom-red text-custom-red hover:bg-custom-red hover:text-white">Узнать больше</a>
            </div>
          </div>
        </div>
      </section>

      {/* Пресса */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-light">Мы в медиа</h2>
            <p className="mt-2 text-gray-600">Новости, интервью и публикации об IWM</p>
            <button className="mt-6 border border-brand-black text-brand-black px-8 py-3 rounded-full font-light hover:bg-gray-100 transition">Скачать пресс-кит</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-red text-brand-black rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2083.png" alt="Публикация 1" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Заголовок статьи о нас в ведущем СМИ</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-brand-black text-brand-black hover:bg-brand-black hover:text-white">Читать статью</a>
            </div>
            <div className="bg-custom-blue text-white rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2084.png" alt="Публикация 2" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Наше большое интервью о будущем финтеха</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-white text-white hover:bg-white hover:text-custom-blue">Читать интервью</a>
            </div>
            <div className="bg-custom-grey text-custom-red rounded-3xl p-6 flex flex-col">
                <div className="w-full h-auto aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                    <img src="/images/image 2085.png" alt="Публикация 3" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-light mb-4">Аналитический материал IWM в отраслевом издании</h3>
                <a href="#" className="mt-auto self-start font-light text-base uppercase tracking-wider px-5 py-1 rounded-full transition-colors border-2 bg-transparent border-custom-red text-custom-red hover:bg-custom-red hover:text-white">Читать аналитику</a>
            </div>
          </div>

        </div>
      </section>
      
      {/* Вакансии */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-light">Присоединяйся к IWM</h2>
              <p className="mt-2 text-white/80">Мы создаем платформу, которая меняет рынок частных инвестиций</p>
              <button className="mt-6 bg-custom-red text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition">Смотреть вакансии</button>
          </div>
      </section>
      
      {/* Контакты и поддержка */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-light">Мы на связи</h2>
                <p className="mt-2 text-gray-600">Найдите удобный способ связаться с нами</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-light mb-4">Быстрая поддержка</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Чат с поддержкой</li>
                        <li>Email: press@iwm.one</li>
                        <li>Telegram-bot</li>
                        <li>База знаний / FAQ</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-light mb-4">Наши офисы</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Тбилиси, Грузия</li>
                        <li>Москва, Россия</li>
                        <li>Ереван, Армения</li>
                        <li>Алматы, Казахстан</li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 max-w-xl">
                <h3 className="text-2xl font-light mb-6">Форма обратной связи</h3>
                <form>
                    <div className="mb-4">
                        <input type="text" placeholder="Имя" className="w-full p-3 border border-gray-300 rounded-full" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Email/Телефон" className="w-full p-3 border border-gray-300 rounded-full" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Сообщение" rows={4} className="w-full p-3 border border-gray-300 rounded-2xl"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-brand-black text-white px-8 py-3 rounded-full font-semibold hover:brightness-125 transition">Отправить</button>
                    </div>
                </form>
            </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;
