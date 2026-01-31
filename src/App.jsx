import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';
import './styles/gallery.css';
import ProtectedRoute from './component/ProtectedRoute';
import Home from './pages/Home';
import PhotosGrid from './pages/PhotosGrid';
import Gallery from './pages/Gallery';
import Memory from './pages/Memory'; // Новая страница
import Message from './pages/Message';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Проверяем sessionStorage при загрузке
    useEffect(() => {
        const checkAuth = () => {
            const sessionAuth = sessionStorage.getItem('love-auth');
            return sessionAuth === 'true';
        };

        const isAuth = checkAuth();
        if (isAuth && !isAuthenticated) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <div className="App noble-gradient" style={{ minHeight: '100vh' }}>
                <Routes>
                    {/* Главная страница */}
                    <Route
                        path="/"
                        element={
                            <Home
                                isAuthenticated={isAuthenticated}
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        }
                    />

                    {/* Защищенные маршруты */}
                    <Route
                        path="/photos"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <PhotosGrid isAuthenticated={isAuthenticated} />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/gallery"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Gallery isAuthenticated={isAuthenticated} />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/memory"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Memory isAuthenticated={isAuthenticated} />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/message"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Message isAuthenticated={isAuthenticated} />
                            </ProtectedRoute>
                        }
                    />
                </Routes>

            </div>
        </Router>
    );
}

export default App;