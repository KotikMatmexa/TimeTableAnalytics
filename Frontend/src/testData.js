
//таблица контроля часов
export let table_example = {
    0: {
        faculty: "ПМ-ПУ",
        groups: {
            0: {
                name: "19.М11-пу",
                data: {
                    1: {
                        subject: "Основы СУБД (лекция)",
                        assignedHours: 14,
                        requiredHours: 40,
                        percents: 35,
                        restOfHours: 26
                    },
                    2: {
                        subject: "Основы СУБД (практика)",
                        assignedHours: 10,
                        requiredHours: 20,
                        percents: 50,
                        restOfHours: 10
                    }
                }
            },
            1: {
                name: "19.М12-пу",
                data: {
                    1: {
                        subject: "Основы СУБД (лекция)",
                        assignedHours: 14,
                        requiredHours: 40,
                        percents: 35,
                        restOfHours: 26
                    },
                    2: {
                        subject: "Основы СУБД (практика)",
                        assignedHours: 10,
                        requiredHours: 20,
                        percents: 50,
                        restOfHours: 10
                    }
                }
            }
        }
    },
    1: {
        faculty: "МАТ-МЕХ",
        groups: {
            0: {
                name:"19.М11-мм",
                data: {
                    1: {
                        subject: "Основы СУБД (лекция)",
                        assignedHours: 14,
                        requiredHours: 40,
                        percents: 35,
                        restOfHours: 26
                    },
                    2: {
                        subject: "Основы СУБД (практика)",
                        assignedHours: 10,
                        requiredHours: 20,
                        percents: 50,
                        restOfHours: 10
                    }
                }
            }
        }
    },
    2: {
        faculty: "ФИЗ-ФАК",
        groups: {
            0: {
                name:"19.М01-фз",
                data: {
                    1: {
                        subject: "Псевдодифференциальные операторы и краевые задачи II, лекция",
                        assignedHours: 14,
                        requiredHours: 40,
                        percents: 35,
                        restOfHours: 26
                    },
                    2: {
                        subject: "Спектральная теория оператора Шрёдингера II, семинар",
                        assignedHours: 10,
                        requiredHours: 20,
                        percents: 50,
                        restOfHours: 10
                    },
                    3: {
                        subject: "Проблемы современной философии, лекция",
                        assignedHours: 10,
                        requiredHours: 20,
                        percents: 50,
                        restOfHours: 10
                    }
                }
            }
        }
    }
};

export let faculties = ["ПМ-ПУ", "МАТ-МЕХ", "ФИЗ-ФАК"];

export let addresses = ["22-я линия Васильевского острова, 7","Университетский просп., 26","Университетский просп., 28"];

export let faculty_data = {
    0:{
        name: "Юридический факультет",
        address: "22-я линия Васильевского острова, 7"
    },
    1:{
        name:"Химический факультет",
        address: "Университетский просп., 26"
    },
    2:{
            name:"Мат-Мех",
            address: "Университетский просп., 28"
        }
};

export let teachers = {
  0:{
      id:1,
      firstName: "Иван",
      patronymic: "Петрович",
      sirName: "Бойко",
      faculty: "Юридический факультет",
      level:"Старший преподаватель"

  },
  1:{
      id: 2,
      firstName: "Роман",
      patronymic: "Петрович",
      sirName: "Тыгорин",
      faculty: "Юридический факультет",
      level:"Доцент"

  },
    2:{
        id: 3,
        firstName: "Ирина",
        patronymic: "Ивановна",
        sirName: "Иванова",
        faculty: "Химический факультет",
        level:"Старший преподаватель"

    },
    3:{
        id: 4,
        firstName: "Станислов",
        patronymic: "Петрович",
        sirName: "Ройко",
        faculty: "Химический факультет",
        level:"Старший преподаватель"

    },
    4:{
        id: 5,
        firstName: "Никита",
        patronymic: "Евгеньевич",
        sirName: "Липо",
        faculty: "Мат-Мех",
        level:"Доцент"

    },
    5:{
        id: 6,
        firstName: "Людмила",
        patronymic: "Ивановна",
        sirName: "Липо",
        faculty: "Мат-Мех",
        level:"Доцент"
    },

};

