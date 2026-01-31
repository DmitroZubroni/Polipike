import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from "../component/Header.jsx";

const galleryPhotos = [
    { id: 1,},
    { id: 2,},
    { id: 3,},
    { id: 4, },
    { id: 5, },
    { id: 6, },
    { id: 7, },
    { id: 8, },
    { id: 9,},
    { id: 10 },
    { id: 11 },
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
    };

    return (
        <>
            <Header isAuthenticated={true}  />
            <Container className="py-5">

                <h2 className="text-center mb-5" style={{
                    background: 'linear-gradient(45deg, var(--burgundy), var(--ruby))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                }}>
                    Совместные фото
                </h2>

                <div className="gallery-display">
                    <div className="text-center">
                        <div className="main-photo-frame mb-4">
                            <div
                                className="main-photo"
                                style={{
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                    boxShadow: `0 20px 50px ${
                                        currentIndex % 4 === 0 ? 'rgba(137, 207, 240, 0.3)' :
                                            currentIndex % 4 === 1 ? 'rgba(153, 102, 204, 0.3)' :
                                                currentIndex % 4 === 2 ? 'rgba(224, 17, 95, 0.25)' :
                                                    'rgba(80, 200, 120, 0.25)'
                                    }`,
                                    maxWidth: '900px',
                                    margin: '0 auto',
                                    border: `4px solid ${
                                        currentIndex % 4 === 0 ? 'var(--fianit)' :
                                            currentIndex % 4 === 1 ? 'var(--amethyst)' :
                                                currentIndex % 4 === 2 ? 'var(--ruby)' :
                                                    'var(--emerald)'
                                    }`,
                                    position: 'relative'
                                }}
                            >
                                <img
                                    src={`/images/we/${galleryPhotos[currentIndex].id}.jpg`}
                                    alt={galleryPhotos[currentIndex].title}
                                    className="w-100"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        height: '65vh',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />

                                {/* Декоративные уголки */}
                                <div className="corner corner-tl"></div>
                                <div className="corner corner-tr"></div>
                                <div className="corner corner-bl"></div>
                                <div className="corner corner-br"></div>
                            </div>
                        </div>

                    </div>

                    <div className="navigation-controls text-center">
                        <div className="d-flex justify-content-center align-items-center gap-4">
                            <Button
                                onClick={prevPhoto}
                                variant="outline-primary"
                                className="btn-noble px-5 py-3"
                                style={{ background: 'linear-gradient(45deg, var(--fianit), var(--emerald))' }}
                            >
                                ← Назад
                            </Button>

                            <div className="d-flex flex-column align-items-center">
                                <span className="text-muted small mb-1">Переключение</span>
                                <div className="d-flex gap-2">
                                    {[currentIndex - 2, currentIndex - 1, currentIndex, currentIndex + 1, currentIndex + 2]
                                        .map((idx, i) => {
                                            const actualIdx = (idx + galleryPhotos.length) % galleryPhotos.length;
                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => setCurrentIndex(actualIdx)}
                                                    className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                                                    style={{
                                                        width: idx === currentIndex ? '15px' : '8px',
                                                        height: '8px',
                                                        borderRadius: '4px',
                                                        background: idx === currentIndex ? 'var(--amethyst)' : 'var(--silver)',
                                                        border: 'none',
                                                        transition: 'all 0.3s'
                                                    }}
                                                />
                                            );
                                        })}
                                </div>
                            </div>

                            <Button
                                onClick={nextPhoto}
                                variant="primary"
                                className="btn-noble px-5 py-3"
                                style={{ background: 'linear-gradient(45deg, var(--amethyst), var(--ruby))' }}
                            >
                                Далее →
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default Gallery;