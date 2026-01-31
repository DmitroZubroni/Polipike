import { useEffect, useState } from 'react';

const Hearts = ({ count = 100 }) => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Создаём сердечки при монтировании
        const newHearts = Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 30 + 20,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            emoji: ['❤️', '💖', '💕', '💗', '💓', '💞', '💘', '💝'][Math.floor(Math.random() * 8)]
        }));

        setHearts(newHearts);

        // Удаляем компонент через 5 секунд
        const timer = setTimeout(() => {
            setHearts([]);
        }, 5000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="hearts-container">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart-particle"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        animation: `fall ${heart.duration}s linear ${heart.delay}s forwards`,
                        animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
                    }}
                >
                    {heart.emoji}
                </div>
            ))}
        </div>
    );
};

export default Hearts;