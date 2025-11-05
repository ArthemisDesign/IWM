import React from 'react';
import Footer from '../components/Footer';

const BusinessPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-black text-white">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Привлекайте инвестиции через IWM</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            От заявки до привлечения капитала. Полный цикл с международной юридической поддержкой
          </p>
          <button className="bg-custom-red text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
            Подать заявку
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-brand-black">
            Мы объединяем компании, фонды и инфраструктурные проекты с инвесторами по всему миру. Независимо от того, вы стартап, фонд или крупная корпорация, наш процесс подключения прозрачен и прост.
          </p>
        </div>
      </section>

      {/* Connection Steps Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-12 md:mb-20">4 этапа подключения к IWM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-light mb-4 text-custom-blue">Подача заявки и отбор</h3>
              <p className="font-semibold mb-2">Что происходит:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Вы заполняете онлайн-форму с базовой информацией</li>
                <li>Проект проходит экспресс-анализ (финансы, модель, юрисдикция)</li>
                <li>Определяется категория: компания/стартап, фонд или инфраструктурный партнер</li>
              </ul>
              <p className="font-semibold mb-2">Особенности для сегментов:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Стартапы и компании – нужен MVP или работающий бизнес, выручка от $500К или потенциал роста</li>
                <li>Фонды – наличие лицензии (если требуется), стратегия и структура управления</li>
                <li>Партнеры – готовая инвестиционная или технологическая инфраструктура</li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-light mb-4 text-custom-blue">Подготовка проекта</h3>
              <p className="font-semibold mb-2">Что происходит:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Юридическая интеграция в выбранной юрисдикции (AIFC, Грузия, ОАЭ)</li>
                <li>Подготовка медиапрофиля (описание, финансовые показатели, медиа)</li>
                <li>Создание инвестиционной презентации и страницы проекта на платформе</li>
              </ul>
              <p className="font-semibold mb-2">Особенности для сегментов:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Стартапы — упор на питч, команду и рынок</li>
                <li>Фонды — раскрытие стратегии, прошлых результатов, риск-менеджмента</li>
                <li>Партнёры — описание продукта, условий и преимуществ интеграции</li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-light mb-4 text-custom-blue">Запуск и привлечение инвестиций</h3>
              <p className="font-semibold mb-2">Что происходит:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Публикация проекта на платформе</li>
                <li>Маркетинговая кампания (email, соцсети, PR)</li>
                <li>Возможность привлечения мелких и крупных чеков, квалифицированных и неквалифицированных инвесторов (в зависимости от продукта)</li>
              </ul>
              <p className="font-semibold mb-2">Особенности для сегментов:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Стартапы — быстрые кампании на 1–3 месяца</li>
                <li>Фонды — долгосрочные кампании с этапными закрытиями</li>
                <li>Партнёры — интеграция продукта в экосистему и постоянный поток инвесторов</li>
              </ul>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-light mb-4 text-custom-blue">Сопровождение и отчётность</h3>
              <p className="font-semibold mb-2">Что происходит:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Отчёты для инвесторов</li>
                <li>Вторичный рынок (при наличии)</li>
                <li>Сопровождение сделок и повторные раунды</li>
              </ul>
              <p className="font-semibold mb-2">Особенности для сегментов:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Стартапы — регулярные апдейты по продукту и метрикам</li>
                <li>Фонды — финансовая отчётность</li>
                <li>Партнёры — показатели продукта и статистика привлечённых инвесторов</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Для компаний и стартапов</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Привлекайте инвестиции на развитие вашего бизнеса через IWM</p>
          </div>

          <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4">Платформа, которая соединяет вас с частными и институциональными инвесторами по всему миру</h3>
              <p className="text-gray-600 mb-6">Размещение компании на IWM - это не просто поиск финансирования, а выход на международную аудиторию инвесторов, партнёров и клиентов. Мы обеспечиваем юридическую инфраструктуру, маркетинг и удобную цифровую платформу для привлечения капитала.</p>
              <button className="bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
                Подать заявку
              </button>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">4 Этапа выхода на IWM для компаний:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-custom-red text-white rounded-full h-8 w-8 text-center leading-8 font-semibold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h5 className="font-light">Подача заявки</h5>
                    <p className="text-gray-600">Заполняете онлайн-форму с базовыми данными: описание бизнеса, финансовые показатели, цели привлечения. Проходите первичный скоринг.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-custom-red text-white rounded-full h-8 w-8 text-center leading-8 font-semibold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h5 className="font-light">Подготовка профиля</h5>
                    <p className="text-gray-600">Создание инвестиционной страницы, презентации, видео, и настройка опций для инвесторов.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-custom-red text-white rounded-full h-8 w-8 text-center leading-8 font-semibold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h5 className="font-light">Запуск кампании</h5>
                    <p className="text-gray-600">Публикация проекта и анонс в каналах IWM, участие в вебинарах и питч-сессиях.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-custom-red text-white rounded-full h-8 w-8 text-center leading-8 font-semibold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h5 className="font-light">Сопровождение и рост</h5>
                    <p className="text-gray-600">Отчётность перед инвесторами, поддержка при последующих раундах и возможность выхода на вторичный рынок.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl font-light text-center mb-8">Преимущества для компаний и стартапов</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h5 className="font-light mb-2">Международная аудитория</h5>
                <p className="text-gray-600">Доступ к инвесторам из Европы, Азии, Ближнего Востока.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h5 className="font-light mb-2">Юридическая защита</h5>
                <p className="text-gray-600">Сделки оформляются через надёжные юрисдикции.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h5 className="font-light mb-2">Гибкий формат инвестиций</h5>
                <p className="text-gray-600">От $100 до миллионов долларов.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h5 className="font-light mb-2">Маркетинговая поддержка</h5>
                <p className="text-gray-600">Подготовка материалов, продвижение, медийная кампания.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h4 className="text-xl font-light mb-2">Форматы сотрудничества</h4>
            <p className="text-gray-600 mb-6">Equity crowdfunding, прямые инвестиции, конвертируемые займы / SAFE.</p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">Начните привлекать капитал уже сегодня</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Заполните заявку - и мы предложим оптимальный формат привлечения инвестиций для вашей компании.
            </p>
            <button className="bg-custom-red text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
              Подать заявку
            </button>
          </div>

        </div>
      </section>

      {/* For Investment Funds Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Для инвестиционных фондов</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Привлекайте капитал и расширяйте сеть инвесторов через IWM</p>
          </div>

          <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4">Платформа, которая объединяет фонды с квалифицированными и частными инвесторами в глобальном масштабе</h3>
              <p className="text-gray-600 mb-6">Мы помогаем инвестиционным фондам привлекать капитал, расширять базу инвесторов и эффективно управлять коммуникацией с ними. IWM предоставляет инфраструктуру, маркетинг и технологические решения для масштабирования бизнеса.</p>
              <button className="bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
                Подать заявку
              </button>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Этапы подключения фонда к IWM:</h4>
              <ul className="space-y-4 text-gray-600">
                <li><span className="font-light text-brand-black">Подача заявки</span> - базовая анкета с описанием стратегии фонда.</li>
                <li><span className="font-light text-brand-black">Юридическая и комплаенс-проверка</span> - проверка лицензий, структур.</li>
                <li><span className="font-light text-brand-black">Публикация инвестиционного профиля</span> - описание фонда, стратегии, результатов.</li>
                <li><span className="font-light text-brand-black">Запуск маркетинга</span> - email-кампании, таргет, мероприятия.</li>
                <li><span className="font-light text-brand-black">Сопровождение инвесторов</span> - отчётность, новости, вторичный рынок.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl font-light text-center mb-8">Преимущества для фондов</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h5 className="font-light mb-2">Международная аудитория</h5>
                <p className="text-gray-600">Выход на частных и институциональных инвесторов.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h5 className="font-light mb-2">Гибкость кампаний</h5>
                <p className="text-gray-600">Возможность привлечения капитала через публичные и приватные кампании.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h5 className="font-light mb-2">Маркетинговая и PR-поддержка</h5>
                <p className="text-gray-600">Поддержка от команды IWM.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h5 className="font-light mb-2">Технологическая инфраструктура</h5>
                <p className="text-gray-600">Доступ к инфраструктуре для учёта инвесторов и сделок.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center bg-custom-blue text-white p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Увеличьте активы под управлением с IWM</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Оставьте заявку, чтобы обсудить условия размещения фонда на платформе.
            </p>
            <button className="bg-white text-custom-blue px-8 py-4 rounded-full font-light hover:bg-gray-200 transition-colors uppercase tracking-wider">
              Подать заявку
            </button>
          </div>

        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Для партнеров и инфраструктурных проектов</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Станьте партнёром IWM и развивайте свой бизнес вместе с нами</p>
          </div>

          <div className="mt-12 md:mt-20">
            <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">IWM - это не только инвестиционная платформа, но и экосистема партнёров. Мы открыты для сотрудничества с организациями, которые могут усилить ценность нашего продукта для инвесторов и компаний. Мы сотрудничаем с банками, консалтинговыми компаниями, юридическими фирмами, брокерами и медиа.</p>
          </div>

          <div className="mt-16">
            <h4 className="text-2xl font-light text-center mb-8">Форматы партнёрства</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h5 className="font-light text-xl mb-2">Финансовые партнёры</h5>
                <p className="text-gray-600">Банки, брокеры, платежные провайдеры.</p>
              </div>
              <div>
                <h5 className="font-light text-xl mb-2">Юридические и налоговые консультанты</h5>
                <p className="text-gray-600">Сопровождение сделок и инвесторов.</p>
              </div>
              <div>
                <h5 className="font-light text-xl mb-2">Маркетинговые партнёры</h5>
                <p className="text-gray-600">PR-агентства, медиа, блогеры.</p>
              </div>
              <div>
                <h5 className="font-light text-xl mb-2">Образовательные партнёры</h5>
                <p className="text-gray-600">Бизнес-школы, тренеры, аналитические центры.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center text-white p-12 rounded-2xl" style={{backgroundColor: '#DFE3E2'}}>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-brand-black">Начните партнёрство с IWM</h2>
            <p className="text-lg text-brand-black/80 max-w-3xl mx-auto mb-8">
            Заполните форму, и мы свяжемся с вами для обсуждения совместных возможностей.
            </p>
            <button className="bg-brand-black text-white px-8 py-4 rounded-full font-light hover:brightness-125 transition-colors uppercase tracking-wider">
              Стать партнёром
            </button>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Готовы привлечь инвесторов к вашему проекту?</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Мы поможем вам пройти путь от идеи до привлечения капитала. Заполните заявку, и мы свяжемся с вами в течение 48 часов для предварительной оценки и консультации.
          </p>
          <button className="bg-white text-custom-blue px-8 py-4 rounded-full font-light hover:bg-gray-200 transition-colors uppercase tracking-wider">
            Заполнить заявку
          </button>
          <p className="mt-4 text-sm text-white/60">
            Заполнение заявки не накладывает на вас обязательств. Мы бесплатно проведём первичную оценку и предложим оптимальный формат сотрудничества.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BusinessPage;
