// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать 
// введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и 
// вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32


let user_input = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${user_input}\nФаренгейт: ${Math.round((9 / 5) * user_input + 32)}`)
