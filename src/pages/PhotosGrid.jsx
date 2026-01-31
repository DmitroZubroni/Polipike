import { useEffect, useState, useCallback } from "react";
import "./PhotosGrid.css";
import Header from "../component/Header.jsx";

const PhotosGrid = () => {
    const [photos, setPhotos] = useState(
        Array.from({ length: 16 }, (_, i) => ({
            id: i + 1,
            src: `/images/cheeks/${i + 1}.jpg`,
            alt: `Наше воспоминание ${i + 1}`,
        }))
    );

    // логика перестановки половины фото
    const shuffleHalfPhotos = useCallback(() => {
        setPhotos(prev => {
            const arr = [...prev];
            const indices = Array.from({ length: 16 }, (_, i) => i);

            const selected = [];
            for (let i = 0; i < 8; i++) {
                const r = Math.floor(Math.random() * indices.length);
                selected.push(indices[r]);
                indices.splice(r, 1);
            }

            selected.forEach(index => {
                const row = Math.floor(index / 4);
                const col = index % 4;
                const neighbors = [];

                if (col > 0) neighbors.push(index - 1);
                if (col < 3) neighbors.push(index + 1);
                if (row > 0) neighbors.push(index - 4);
                if (row < 3) neighbors.push(index + 4);

                if (neighbors.length) {
                    const n = neighbors[Math.floor(Math.random() * neighbors.length)];
                    [arr[index], arr[n]] = [arr[n], arr[index]];
                }
            });

            return arr;
        });
    }, []);

    // FLIP-анимация
    const animateShuffle = useCallback(() => {
        const items = document.querySelectorAll(".photo-item");
        const firstRects = new Map();

        items.forEach(el => {
            firstRects.set(el.dataset.id, el.getBoundingClientRect());
        });

        shuffleHalfPhotos();

        requestAnimationFrame(() => {
            const newItems = document.querySelectorAll(".photo-item");

            newItems.forEach(el => {
                const first = firstRects.get(el.dataset.id);
                const last = el.getBoundingClientRect();
                if (!first) return;

                const dx = first.left - last.left;
                const dy = first.top - last.top;

                el.style.transform = `translate(${dx}px, ${dy}px)`;
                el.style.transition = "none";

                requestAnimationFrame(() => {
                    el.style.transition =
                        "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
                    el.style.transform = "translate(0, 0)";
                });
            });
        });
    }, [shuffleHalfPhotos]);

    useEffect(() => {
        const interval = setInterval(animateShuffle, 2500);
        return () => clearInterval(interval);
    }, [animateShuffle]);

    return (
        <>
            <Header isAuthenticated={true} />
            <div className="photos-wrapper">
                <h2 className="photos-title"> пусть эти щёчки всегда будут такими </h2>

                <div className="photos-grid">
                    {photos.map(photo => (
                        <div
                            key={photo.id}
                            className="photo-item"
                            data-id={photo.id}
                        >
                            <img src={photo.src} alt={photo.alt}  loading="lazy"
                                 decoding="async"/>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default PhotosGrid;
