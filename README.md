Цель: получить практический опыт взаимодействия с сервером.

Сделано: 
1. Развернут json-server на удаленном сервере;
2. Написан кастомный хук useFetch, который:
   a: Получает данные с сервера(GET);
   б: Удаляет выбранные посты(DELETE);
   в: Добавляет новые посты из формы(POST); 
3. При добавлении картинок в форму, они кодируются в base64 и добавляются в json файл (Это не подходит для реального проекта,
   так как json файл становится слишком большим);
4. Прелоадер.
5. Функция, для поиска максимального id из существующих. При добавлении нового поста его id инкрементируется от максимального.  

ps: Вёрстку в данном проекте не делал.

////////////////////////////////////////////////////////////////////////

Goal of project: To get a practical experience client-server iteration.

Whats been done:

1. Deployed json-server on remote server;
2. Writen custom hook useFetch, which:
   a: Get data from server(GET);
   b: Can delete choosen posts(DELETE);
   c: Can add new posts from form(POST);
3. Images, added with form, code into base64 and add in json file(Its not for real projects, because json file become too large);
4. Preloader.
5. Function, which search maximum id from data. When new post added, id increment from maximum.

ps: I didnt do a page layout for this project.