
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
  /*  0:{
        name: "Юридический факультет",
        address: "22-я линия Васильевского острова, 7",
        cabinets: [{"111":{
                date: "11.12.2020",

            }},
            {"112":{}},
            {"113":{}},
            {"114":{}},
            {"115":{}},
            {"116":{}},
            {"223":{}},
            {"224":{}},
            {"225":{}}]
    },
   */
    0:{
        name: "Юридический факультет",
        address: "22-я линия Васильевского острова, 7",
        cabinets: [111,113,112,114,115,116,223,224,225]
    },
    1:{
        name:"Химический факультет",
        address: "Университетский просп., 26",
        cabinets: [311,312,313,414,415,416,523,524,525]
    },
    2:{
            name:"Мат-Мех",
            address: "Университетский просп., 28",
        cabinets: [611,612,613,714,715,716,823,824,825]
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

export const groups = [
    {
        facultyId: "90F4012E-D328-47E1-9BAC-1CFF476BB3DD",
        groups: [{
            id: 1,
            number:"20.Б01-ю",
            disciplines:[
                {
                    oid:"1",
                name:"Теория права и государства",
                assignedHours:56,
                requiredHours:18
                },
                {
                    oid:"2",
                    name:"История отечественного права и\n" +
                    "государства",
                    assignedHours:24,
                    requiredHours:12
                },
                {
                    oid:"3",
                    name:"Основы конституционного права",
                    assignedHours:56,
                    requiredHours:10
                },
                {
                    oid:"4",
                    name:"Английский язык",
                    assignedHours:58,
                    requiredHours:58
                },
                {
                    oid:"5",
                    name:"Римское право",
                    assignedHours:24,
                    requiredHours:22
                },
                {
                    oid:"6",
                    name:"Основы информационной культуры",
                    assignedHours:10,
                    requiredHours:8
                }

            ]
        },
            {
                id:2,
                number:"20.Б02-ю",
                disciplines:[
                    {
                        oid:"1",
                        name:"Теория права и государства",
                        assignedHours:56,
                        requiredHours:22
                    },
                    {
                        oid:"2",
                        name:"История отечественного права и\n" +
                        "государства",
                        assignedHours:24,
                        requiredHours:21
                    },
                    {
                        oid:"3",
                        name:"Основы конституционного права",
                        assignedHours:56,
                        requiredHours:19
                    },
                    {
                        oid:"4",
                        name:"Английский язык",
                        assignedHours:58,
                        requiredHours:58
                    },
                    {
                        oid:"5",
                        name:"Римское право",
                        assignedHours:24,
                        requiredHours:22
                    },
                    {
                        oid:"6",
                        name:"Основы информационной культуры",
                        assignedHours:10,
                        requiredHours:8
                    }

                ]
            },{
                id: 21,
                number:  "20.Б03-ю",
                disciplines:[]
            },{
                id: 22,
                number: "20.Б04-ю",
                disciplines:[]
            },{
                id: 23,
                number: "20.Б05-ю",
                disciplines:[]
            },{
                id: 24,
                number: "20.Б06-ю",
                disciplines: []
            },
            {
                id: 25,
                number: "20.Б07-ю",
                disciplines: []
            },
            {
                id: 26,
                number: "20.Б08-ю",
                disciplines: []
            },
            {
                id: 27,
                number: "20.Б09-ю",
                disciplines: []
            },
            {
                id: 28,
                number: "20.Б2.201-ю",
                disciplines:[]
            },

            {
                id: 29,
                number:  "20.Б2.202-ю",
                disciplines:[]
            },

            {
                id: 30,
                number:  "20.Б2.203-ю",
                disciplines: []
            },

            {
                id: 31,
                number: "20.Б2.205-ю",
                disciplines:[]
            },

            {
                id: 32,
                number:  "20.Б2.206-ю",
                disciplines:[]
            },


          ]
    }
,{
        facultyId:"21A91660-B1AD-43E7-94F4-3CA22236967D",
        groups: [
            {
                id:3,
                number:"20.Б01-пс",
             disciplines: [
                 {
                     oid:"1",
                     name:"Математическая статистика",
                     assignedHours:58,
                     requiredHours:45
                 },
                 {
                     oid:"3",
                     name:"Профессиональная этика",
                     assignedHours:16,
                     requiredHours:16
                 },
                 {
                     oid:"4",
                     name:"Информационные технологии в психологии",
                     assignedHours:8,
                     requiredHours:8
                 },
                 {
                     oid:"5",
                     name:"Анатомия центральной нервной системы",
                     assignedHours:58,
                     requiredHours:50
                 },
                 {
                     oid:"6",
                     name:"Биологические основы поведения",
                     assignedHours:32,
                     requiredHours:10
                 },
                 {
                     oid:"7",
                     name:"Введение в профессию",
                     assignedHours:28,
                     requiredHours:26
                 }

             ]
            }, {
            id: 4,
                number:"20.Б02-пс",
            disciplines: [
                {
                    oid:"1",
                    name:"Математическая статистика",
                    assignedHours:58,
                    requiredHours:48
                },
                {
                    oid:"3",
                    name:"Профессиональная этика",
                    assignedHours:16,
                    requiredHours:16
                },
                {
                    oid:"4",
                    name:"Информационные технологии в психологии",
                    assignedHours:8,
                    requiredHours:8
                },
                {
                    oid:"5",
                    name:"Анатомия центральной нервной системы",
                    assignedHours:58,
                    requiredHours:45
                },
                {
                    oid:"6",
                    name:"Биологические основы поведения",
                    assignedHours:32,
                    requiredHours:8
                },
                {
                    oid:"7",
                    name:"Введение в профессию",
                    assignedHours:28,
                    requiredHours:23
                }

            ]
            },
            { id: 42,
                number:  "20.Б03-пс",
                disciplines:[]},
            { id: 43,
                number:   "20.Б04-пс",
                disciplines:[]},
            { id: 44,
                number:  "19.Б01-пс",
                disciplines:[]
            },
            { id: 45,
                number:  "19.Б02-пс",
                disciplines:[]},
            { id: 46,
                number:  "19.Б03-пс",
                disciplines:[]},
            { id: 47,
                number:  "20.Б2.206-ю",
                disciplines:[]},
            { id: 48,
                number:  "18.Б01-пс",
                disciplines:[]},
            { id: 49,
                number:  "18.Б02-пс",
                disciplines:[]},
            { id: 50,
                number:  "18.Б03-пс",
                disciplines:[]},
            { id: 51,
                number:  "20.М07-пс",
                disciplines:[]},
            { id: 52,
                number:   "19.М03-пс",
                disciplines:[]},
            { id: 53,
                number:  "20.М02-пс",
                disciplines:[]},
            { id: 54,
                number:  "19.М02-пс",
                disciplines:[]}
            ]
    },
    {
        facultyId:"7DBFC442-D754-4253-986B-4E56A415EA6C",
        groups: [{
            id:5,
            number: "20.Б01-с",
            disciplines:[
                {
                    oid:"1",
                    name:"Математика",
                    assignedHours:70,
                    requiredHours:42
                },
                {
                    oid:"2",
                    name:"Информатика",
                    assignedHours:40,
                    requiredHours:40
                },
                {
                    oid:"4",
                    name:"Экономика",
                    assignedHours:66,
                    requiredHours:58
                },
                {
                    oid:"5",
                    name:"Основы социологии",
                    assignedHours:68,
                    requiredHours:20
                },
                {
                    oid:"6",
                    name:"Логика",
                    assignedHours:34,
                    requiredHours:24
                },
                {
                    oid:"7",
                    name:"История социологии",
                    assignedHours:40,
                    requiredHours:32
                }

            ]
        }
        ,{
            id: 6,
                number:"19.Б01-с",
                disciplines:[
                    {
                        oid:"1",
                        name:"Математика",
                        assignedHours:70,
                        requiredHours:62
                    },
                    {
                        oid:"2",
                        name:"Информатика",
                        assignedHours:40,
                        requiredHours:40
                    },
                    {
                        oid:"4",
                        name:"Экономика",
                        assignedHours:66,
                        requiredHours:38
                    },
                    {
                        oid:"5",
                        name:"Основы социологии",
                        assignedHours:68,
                        requiredHours:28
                    },
                    {
                        oid:"6",
                        name:"Логика",
                        assignedHours:34,
                        requiredHours:26
                    },
                    {
                        oid:"7",
                        name:"История социологии",
                        assignedHours:40,
                        requiredHours:22
                    }
                ]
            },
            { id: 64,
                number:  "18.Б01-с",
                disciplines:[]},
            { id: 65,
                number:  "17.Б04-с",
                disciplines:[]},
            { id: 66,
                number:  "20.Б02-с",
                disciplines:[]},
            { id: 67,
                number:  "19.Б02-с",
                disciplines:[]},
            { id: 68,
                number:  "18.Б02-с",
                disciplines:[]},
            { id: 69,
                number:  "20.Б03-с",
                disciplines:[]},
            { id: 70,
                number:  "20.Б04-с",
                disciplines:[]},
            { id: 71,
                number:  "20.Б05-с",
                disciplines:[]},
            { id: 72,
                number:  "20.Б06-с",
                disciplines:[]}

        ]


    }
];