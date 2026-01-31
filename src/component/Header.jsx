import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Функция для выхода
    const handleLogout = () => {
        sessionStorage.removeItem('love-auth');
        navigate('/', { replace: true });
        window.location.reload(); // Полная перезагрузка для сброса состояния
    };

    return (
        <Navbar expand="lg" className="navbar-noble">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <span className="gem-icon me-2" style={{ fontSize: '1.5rem' }}>🌄</span>
                    <span>Наша история</span>
                </Navbar.Brand>

                {isAuthenticated && (
                    <>
                        <Navbar.Toggle aria-controls="noble-navbar" />
                        <Navbar.Collapse id="noble-navbar">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link
                                    as={Link}
                                    to="/photos"
                                    className={location.pathname === '/photos' ? 'active-nav' : ''}
                                >
                                    <span className="me-2">🥰</span> любимые щёчки
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/gallery"
                                    className={location.pathname === '/gallery' ? 'active-nav' : ''}
                                >
                                    <span className="me-2">❤️</span> просто мы
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/memory"
                                    className={location.pathname === '/memory' ? 'active-nav' : ''}
                                >
                                    <span className="me-2">⭐</span> Памятные фото
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/message"
                                    className={location.pathname === '/message' ? 'active-nav' : ''}
                                >
                                    <span className="me-2">💌</span> Послание
                                </Nav.Link>

                                <button
                                    onClick={handleLogout}
                                    className="btn btn-sm ms-3"
                                    style={{
                                        background: 'linear-gradient(45deg, var(--ruby), var(--burgundy))',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '20px',
                                        padding: '8px 20px',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Выйти
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Header;