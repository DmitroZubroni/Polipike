import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './OurStory.css';

const OurStory = () => {
    const isMobile = useMemo(
        () => window.matchMedia('(max-width: 600px)').matches,
        []
    );

    const storyItems = [
        { id: 1, text: "Встреча в беседке, меня хотели убить", rating: 3 },
        { id: 2, text: "Момент с зеркалом в гараже", rating: 7 },
        { id: 3, text: "Момент когда я выдумывал, то что мы уже побывали на более 500 свиданиях", rating: 10 },
        { id: 4, text: "Первый день разлуки и начало общения", rating: 10 },
        { id: 5, text: "Проводил до дома и поцелуй в щечку", rating: 10 },
        { id: 6, text: "Второе провождение домой - 'поцелуй который просто вау'", rating: 10 },
        { id: 7, text: "Погуляли возле гаража", rating: 12 },
        { id: 8, text: "Остались в гараже первый раз", rating: 12 },
        { id: 9, text: "Прогулки онлайн", rating: 11 },
        { id: 10, text: "Первый день твоих особенных вкидок так сказать, 2 августа", rating: 15 },
        { id: 11, text: "Первый подарок и ей и бабушке так то)", rating: 13 },
        { id: 12, text: "Уверенное здравствуйте", rating: 10 },
        { id: 13, text: "Созвоны в кингисепе", rating: 12.5 },
        { id: 14, text: "Основательно засиделись в гараже плюс мои откровения", rating: 13 },
        { id: 15, text: "Попали на звёзды", rating: 12 },
        { id: 16, text: "Ещё не поставили таймер, ой уже 0:0 Настен день рождения", rating: 15 },
        { id: 17, text: "Ты резко ушла, я подошёл к тебе и мы гуляли с данной", rating: 11 },
        { id: 18, text: "Уже поставили таймер, он ещё не такой красный, лжеотъезд", rating: 14 },
        { id: 19, text: "Был ещё второй подарок (куча куча сладостей) 15, а потом и третий так то и всем так-то ) (фиалка и корзина гипсофилов)", rating: 15 },
        { id: 20, text: "Ограниченные созвоны и созвон с мамой, там мы фильм посмотрели, это мошеники тебе звонят", rating: 14 },
        { id: 21, text: "Встреча в питере погуляли и зашли домой", rating: 14.5 },
        { id: 22, text: "Выступление Алисы и ты у меня в гостях", rating: 15 },
        { id: 23, text: "Неожиданное (привет, Дима, я в автобусе) я нелегал первый раз, игры с Алисой и так далее", rating: 15 },
        { id: 24, text: "Чаепитие с мамой, туда же вкидки от Даны", rating: 15 },
        { id: 25, text: "Знакомство с Машей и я на твоём выступлении", rating: 15 },
        { id: 26, text: "Ты у меня, кружки маше, почему на тебе моё поло, бутерброды", rating: 16 },
        { id: 27, text: "Месяц отношений, мой неожиданный сюрприз, Дана ну посмотри ты папипины дочки, там новые серии", rating: 16 },
        { id: 28, text: "Нелегала поймали но не депортировали ура", rating: 14 },
        { id: 29, text: "Полиночка заболела, но ей было оказана первая медицинская помощь (всякие сладости мёд и лимоны)", rating: 14 },
        { id: 30, text: "Я легал у меня есть паспорт даже", rating: 15 },
        { id: 31, text: "Давно не виделись и вот опять но джинсы я теперь ненавижу) не попали на звёзды и на том спасибо", rating: 15 },
        { id: 32, text: "Выступление и неожиданный подарочек (доставка цветов)", rating: 12 },
        { id: 33, text: "Теперь уже Полина легал, о ней узнала моя мама и вкидки с голубями", rating: 15 },
        { id: 34, text: "Дана оказывается любит шоколад, что это за колючки и ты уже совсем легал, настолько, что моя мама позвала тебя с собой к подругам", rating: 16 },
        { id: 35, text: "Посиделки в субботу, первый раз подурачились", rating: 17 },
        { id: 36, text: "Просмотр твоего имени", rating: 14 },
        { id: 37, text: "Посмотрели 1 сезон стар против сил зла", rating: 14 },
        { id: 38, text: "Букет из бабочек и уютные посиделки у тебя", rating: 16 },
        { id: 39, text: "Понедельник сданная биология и плюшевый созвон", rating: 15 },
        { id: 40, text: "Прогулялись по Чернышевской, вместе уснули, близость перешла на новый уровень, посмотрели человека паука 1 часть", rating: 19 },
        { id: 41, text: "Меня первый раз дразнили, Полина ты коза - я знаю, стала звучать куда чаще", rating: 19 },
        { id: 42, text: "Посидели у меня, устроили марафон, посмотрели человека паука 2 часть, приготовили бутерброды", rating: 20 },
        { id: 43, text: "День Рождения Полины. поздравление в нули, первое место, посидели на семейном ужине", rating: 20 },
        { id: 44, text: "Меня снова дразнили в этот раз еще сильнее, но у меня в моменте получилось перехватить инициативу", rating: 18 },
        { id: 45, text: "Остались одни, узнали много нового, после полежали и поболтали", rating: 22 },
        { id: 46, text: "Переписка в воскресение закрытие гештальтов, много откровений и приятностей, из за чего оба уснули только к 4", rating: 20 },
        { id: 47, text: "Встретились в субботу первое доброе утро сказанное в живую, кофе, алиса ушла гулять, прогулялись перед занятиями в техе, алиса узник комнаты устроили марафон и побили рекорд. анекдоты и музыка", rating: 28.7 },
        { id: 48, text: "Приехали в загривье, Полина познакомилась с папой, бабушкой и тоханычем, спорт в гараже, посидели у неё, самые милые дураченья", rating: 32 },
        { id: 49, text: "Посидели в гараже вместе с ксющей и андреем, едем в машине слушаем музыку смотрим друг другу в глаза и поем без слов, но понимаем каждое слово", rating: 28 },
        { id: 50, text: "Полина доехала до меня съела две ролинки, посмотрели стар против сил зла, поставили сердечки, Ростик поделился сырком, итоги года", rating: 31.5 },
        { id: 51, text: "Полина снова доехала, наставили сердечек, доехали до неё, снова понаставили сердечек, поели блинчиков, начали учить анатомию, мотивацию надо поднять", rating: 31.5 },
        { id: 52, text: "Старательно пытались не разнести стол, Полина учиться бороться, и вышла на балкон подышать свежим воздухом, плюс новогодний вайб, появились гирлянда, ёлки и мандарины", rating: 30 },
        { id: 53, text: "Последний день перед тем как разъехались, обмен подарками, искра буря безумие, досмотрели первый сезон аватар легенда об анге", rating: 35 },
        { id: 54, text: "Созвоны с красными щёчками и тремя часами я тебя люблю", rating: 33 },
        { id: 55, text: "Первый день встречи после разлуки, заполнили календарь, совместные спа процедуры, просмотр аватара, цветочки и анпакинг", rating: 42 },
        { id: 56, text: "Момент невероятного желания и отсутствие какого либо инстинкта самосохранения", rating: 43 },
        { id: 57, text: "Весь день провели вместе, обновили календарь, досмотрели аватара, моменты самой близости, когда казалось ничего нет между нами, Наташа пришла на ночёвку", rating: 47 }
    ];

    const [index, setIndex] = useState(() => {
        const saved = localStorage.getItem('storyIndex');
        return saved ? Number(saved) : 0;
    });

    const [isAutoPlaying, setIsAutoPlaying] = useState(!isMobile);
    const autoPlayRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('storyIndex', index.toString());
    }, [index]);

    useEffect(() => {
        if (isAutoPlaying && !isMobile) {
            autoPlayRef.current = setInterval(() => {
                setIndex(prev => (prev + 1) % storyItems.length);
            }, 3500);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying, isMobile, storyItems.length]);

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        clearInterval(autoPlayRef.current);
        if (!isMobile) {
            setTimeout(() => setIsAutoPlaying(true), 8000);
        }
    };

    const next = () => {
        pauseAutoPlay();
        setIndex(prev => (prev + 1) % storyItems.length);
    };

    const prev = () => {
        pauseAutoPlay();
        setIndex(prev => (prev - 1 + storyItems.length) % storyItems.length);
    };

    const handleWheel = useCallback((e) => {
        if (isMobile) return;
        e.preventDefault();
        e.deltaY > 0 ? next() : prev();
    }, [isMobile]);

    const touchStart = useRef(0);

    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const diff = e.changedTouches[0].clientY - touchStart.current;
        if (Math.abs(diff) > 50) {
            diff > 0 ? prev() : next();
        }
    };

    const getOffsetClass = (i) => {
        if (isMobile) return i === index ? 'offset-0' : 'hidden';
        const diff = i - index;
        if (diff === 0) return 'offset-0';
        if (diff === -1 || diff === storyItems.length - 1) return 'offset--1';
        if (diff === -2 || diff === storyItems.length - 2) return 'offset--2';
        if (diff === 1) return 'offset-1';
        if (diff === 2) return 'offset-2';
        return 'hidden';
    };

    return (
        <div >
            <h2 className="text-center mb-4" style={{
                background: 'linear-gradient(45deg, var(--emerald), var(--fianit))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                fontSize: '2.8rem'
            }}>
                Наша история
            </h2>

            <div className="story-progress-indicator">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${((index + 1) / storyItems.length) * 100}%`,
                            background: 'linear-gradient(90deg, var(--fianit), var(--amethyst))'
                        }}
                    ></div>
                </div>
                <div className="progress-text">
                    <span style={{ color: 'var(--amethyst)', fontWeight: '600' }}>
                        {index + 1} / {storyItems.length}
                    </span>
                    <span> - ∞ </span>
                </div>

            </div>

            <section
                className="story-stage"
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: 'grab' }}
            >
                {storyItems.map((item, i) => (
                    <div
                        key={item.id}
                        className={`story-card ${getOffsetClass(i)}`}
                    >
                        <div className="story-item-content">
                            <div className="story-item-header">

                                <span className="story-rating" style={{
                                    background: `${
                                        item.rating >= 40 ? 'var(--ruby)' :
                                            item.rating >= 30 ? 'var(--amethyst)' :
                                                item.rating >= 20 ? 'var(--emerald)' :
                                                    item.rating >= 15 ? 'var(--fianit)' :
                                                        'var(--silver)'
                                    }`
                                }}>
                                    {item.rating}
                                </span>
                            </div>
                            <p className="story-text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default OurStory;
