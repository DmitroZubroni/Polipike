import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Hearts from '../component/Hearts';
import Header from "../component/Header.jsx";
import "../../public/hearts.jpg";

const Message = () => {
    const [showHearts, setShowHearts] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Анимация появления при загрузке
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleHeartsClick = () => {
        setShowHearts(true);
        setTimeout(() => setShowHearts(false), 5000);
    };

    return (
        <>
            <Header isAuthenticated={true} />
            <Container className="py-5">
                {showHearts && <Hearts count={153} />}

                <div
                    className="message-container"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease'
                    }}
                >
                    <Card >
                        <Card.Body className="p-5">
                            <div className="text-center mb-5">
                                <div
                                    className="gem-icon mb-4"
                                    style={{
                                        width: '150px',            // Обязательно задай ширину
                                        height: '150px',           // и высоту
                                        margin: '0 auto',          // Центрирование
                                        fontSize: '4rem',
                                        animation: 'spin 20s linear infinite',

                                        // Работа с изображением:
                                        backgroundImage: 'url(/public/hearts.jpg)', // Путь без public!
                                        backgroundSize: 'cover',   // Чтобы фото заполнило круг
                                        backgroundPosition: 'center',
                                        borderRadius: '50%',       // Делаем иконку круглой

                                        // Эффект фианита (сияние)
                                        border: '4px solid #E5E4E2',
                                        boxShadow: '0 0 20px rgba(185, 226, 238, 0.8), 0 0 40px rgba(153, 102, 204, 0.4)'
                                    }}
                                >
                                </div>

                                <div
                                    className="text-center mt-5 pt-5"
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transition: 'opacity 0.8s ease 1.8s, transform 0.8s ease 1.8s'
                                    }}
                                >
                                    <button
                                        onClick={handleHeartsClick}
                                        className="btn-hearts btn-noble px-5 py-3 fs-4"
                                        style={{
                                            boxShadow: '0 10px 30px rgba(224, 17, 95, 0.3)',
                                            animation: 'pulse 2s infinite',
                                            margin: '15px',
                                        }}
                                    >
                                        Ты в курсе, что я тебя люблю, так-то?
                                    </button>

                                </div>
                                <Card.Title
                                    className="mb-3"
                                    style={{
                                        fontSize: '2.8rem',
                                        background: 'linear-gradient(45deg, var(--ruby), var(--burgundy))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: '800',
                                        letterSpacing: '1px',
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
                                    }}
                                >
                                    "Моя дорогая Полиночка..."
                                </Card.Title>

                            </div>

                            <div className="message-content">

                                <div className="message-text" style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>
                                    {[
                                        "И вот мы прошли вместе рука об руку уже пол года, и казалось бы прошло не так много времени, но не покидает чувство, что многие за всю жизнь не проживают столько, сколько воспоминаний у нас появилось за эти полгода и спасибо тебе за это.",
                                        "Я тебя очень сильно люблю, и ценю каждый день, с того момента, как ты поцеловала меня в щечку. Спасибо тебе за всё: за то что ты рядом, слышишь меня, и стараешься вместе со мной ради этих отношений.",
                                        "Я правда: ценю каждый момент, честно горжусь каждыми твоими достижениями и безумно сильно тебя люблю, и повторусь, я это говорил, говорю и никогда не перестану говорить.",
                                        "Ты у меня не просто любимая, а единственная любимая, самая замечательная Полиночка. И то что мы можем всё всё рассказать друг другу, и нет ни капли сомнений что мы поймём друг друга это главное наше достижение.",
                                        "Снова повторюсь, мне не важно какая ты в моменте, грустная или весёлая, усталая или полная энергии, добрая или язвительная, милая или злюка, мне важно, что бы ты всегда была рядом, была тут.",
                                        "И да впереди нас еще ждёт много испытаний, ситуаций в которых нужно поговорить, ситуации когда будет казаться, что чувства пропали, бытовые ссоры, и многое другое, но я верю, что пока мы любим, слышим, и стараемся, у нас всё получится.",
                                        "Потому что, как я уже говорил, ты первая кого я полюбил по-настоящему и никого другого мне уже не надо, хочу что бы мы прошли через все возможные испытания и были вместе, что бы когда у нас спрашивали настроение по десятибалльной мы без задней мысли говорили 100.",
                                        "Хочу прожить все моменты жизни именно с тобой, хочу что бы я мог назвать тебя любовью всей своей жизни. И осматриваясь назад, на те пол года, которые мы прошли вместе, я уверен, что у нас всё получится."
                                    ].map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="mb-4 px-3"
                                            style={{
                                                color: index % 3 === 0 ? 'var(--burgundy)' :
                                                    index % 3 === 1 ? 'var(--amethyst)' :
                                                        '#2c3e50',
                                                borderLeft: index % 3 === 0 ? '3px solid var(--emerald)' :
                                                    index % 3 === 1 ? '3px solid var(--fianit)' :
                                                        '3px solid var(--silver)',
                                                paddingLeft: '20px',
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                                                transition: `opacity 0.8s ease ${0.8 + index * 0.1}s, transform 0.8s ease ${0.8 + index * 0.1}s`
                                            }}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                    <div
                                        className="special-message mt-5 p-5 rounded-4"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(224,17,95,0.05), rgba(153,102,204,0.05))',
                                            border: '2px solid var(--silver)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                                            transition: 'opacity 0.8s ease 1.6s, transform 0.8s ease 1.6s'
                                        }}
                                    >
                                        <div className="position-absolute top-0 end-0 me-4 mt-3" style={{ fontSize: '2rem', opacity: 0.2 }}>
                                            💖
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 ms-4 mb-3" style={{ fontSize: '2rem', opacity: 0.2 }}>
                                            💝
                                        </div>

                                        <h3
                                            className="text-center mb-4"
                                            style={{
                                                color: 'var(--ruby)',
                                                fontWeight: '700'
                                            }}
                                        >
                                            Спасибо тебе за это время, и напоминаю, если я что-то говорю, значит я это уже много раз обдумал, и значит, что оно так и есть)
                                        </h3>
                                        <p className="text-center fs-5 mb-0 fst-italic" style={{ color: 'var(--burgundy)' }}>
                                            С любовью,<br />
                                            Твой котёночек
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </Card.Body>


                    </Card>
                </div>
            </Container>
        </>

    );
};

export default Message;