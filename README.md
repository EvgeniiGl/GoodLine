---------Структура приложения---------

actions - хранение всех action creators проекта
components — компоненты react
constants — константы и названия action
containers — страничные компоненты и декораторы
reducers - управление состоянием приложения
store — конфигурация хранилища и его инициализация
index.js — точка входа в приложение

-------------Точка входа---------------

index.js
Поключение основных файлов, настройка конфигурации хранилища (store).
Подключение модулей в зависимости от маршрута.
Настройка доступа к страницам (проверка ).

----------------Компоненты---------------

Main.jsx
Главная страница(просто отображение).


NewsPage.jsx
Отображение списка новостей и отдельной новости.
Если в качестве параметра пути число "/news/:число" отображает страницу новости.
Пагинация реализована на основании параметров пути search (:?page=) - получаем 
весь список новостей и вырезаем нужные новости из массива для отображения. Данный подход
позволяет отображать нужную страницу или новость даже при перезагрузке. 


Profile.jsx
Защищенная страница.
Доступ контролируется компонентом высшего порядка require_auth.jsx. 


Header.jsx
Контейнер - шапка приложения содержит компонент Menu.jsx и кнопку выхода.
Переход по страницам реализован с помощью "react-router-dom".


Access.jsx
Форма входа (/login) принимает “фейковые” данные:
login: Admin
pass: 12345
При успешной авторизации хранит "login:true" в localStorage и перебрасывает
на страницу /profile, при неудачной - выдает сообщение.


require_auth.jsx
При инициализации приложения проверят доступ по зачению "login" в localStorage,
при изменении состояния по свойству "access.auth". Данный подход
позволяет контролировать доступ даже при перезагрузке.


dependies:
-prop-types
-react-redux
-react-router-dom
-redux
-bootstrap.css
-react-dom
-react-redux
-redux-form
-query-string
-react-bootstrap

