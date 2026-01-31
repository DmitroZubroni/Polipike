// Упрощённая проверка пароля без сложного хэширования
// Пароль хранится в закодированном виде

const encodePassword = (str) => {
    // Простое кодирование base64
    return btoa(unescape(encodeURIComponent(str)));
};

// Закодированный пароль (замени на свой)
// Чтобы получить закодированный пароль, выполни в консоли браузера:
// btoa(unescape(encodeURIComponent("твой_пароль")))
const ENCODED_PASSWORD = '0Y8g0YLRg9GCINGPINC70Y7Qu9GOINC70Y7Qu9GO';

export const validatePassword = (password) => {
    return new Promise((resolve) => {
        // Имитация асинхронной проверки
        setTimeout(() => {
            const encodedInput = encodePassword(password);
            resolve(encodedInput === ENCODED_PASSWORD);
        }, 300); // Небольшая задержка для реалистичности
    });
};

// Функция для генерации закодированного пароля
export const generateEncodedPassword = (password) => {
    return encodePassword(password);
};