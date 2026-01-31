import { useState } from 'react';
import { Container, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import { validatePassword } from '../utils/auth';
import OurStory from './OurStory'; // Импортируем компонент истории

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password.trim()) {
            setError('Введите пароль');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const isValid = await validatePassword(password);
            if (isValid) {
                setIsAuthenticated(true);
                sessionStorage.setItem('love-auth', 'true');
                // Не перенаправляем, остаемся на этой же странице
            } else {
                setError('❤️ Это только для нас двоих... Попробуй ещё раз');
                setPassword(''); // Очищаем поле
            }
        } catch (err) {
            console.error('Auth error:', err);
            setError('Произошла ошибка. Попробуй ещё раз');
        } finally {
            setIsLoading(false);
        }
    };

    // Если пользователь авторизован, показываем историю
    if (isAuthenticated) {
        return (
            <>
                <Header isAuthenticated={isAuthenticated} />
                <OurStory />
            </>
        );
    }

    // Если не авторизован, показываем форму входа
    return (
        <>
            <Header isAuthenticated={false} />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
                <div className="password-sanctuary w-100" style={{ maxWidth: '500px' }}>
                    <div className="text-center mb-5">
                        <div className="heart-icon mb-3" style={{ fontSize: '4rem' }}>
                            💎
                        </div>
                        <h2 style={{
                            background: 'linear-gradient(45deg, var(--amethyst), var(--fianit))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '700'
                        }}>
                            Наше личное пространство
                        </h2>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Введи наш особенный код..."
                                    className="py-3"
                                    disabled={isLoading}
                                    autoComplete="current-password"
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ borderColor: 'var(--fianit)' }}
                                    type="button"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </Button>
                            </InputGroup>
                        </Form.Group>

                        {error && (
                            <Alert variant="danger" className="text-center border-0"
                                   style={{
                                       background: 'linear-gradient(45deg, rgba(224,17,95,0.1), rgba(128,0,32,0.1))',
                                       borderLeft: '4px solid var(--ruby)'
                                   }}>
                                {error}
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            className="btn-noble w-100 py-3"
                            disabled={isLoading || !password.trim()}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Проверяем...
                                </>
                            ) : (
                                'Открыть нашу историю 💖'
                            )}
                        </Button>
                    </Form>

                    <div className="text-center mt-5 pt-4 border-top" style={{ borderColor: 'var(--silver)' }}>
                        <small className="text-muted d-block">
                            💝 Это место хранит наши самые сокровенные моменты
                        </small>
                        <small className="text-muted">
                            Только мы вдвоем знаем путь сюда
                        </small>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;