// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
      students: 200,
      teachers: 6
    },
    biology: {
      students: 120,
      teachers: 6
    },
    chemistry: {
      students: 100,
      teachers: 3
    },
    geography: {
      students: 60,
      teachers: 2
    },
  }

// task 1

function convertSubjectsToString(obj) {
    let result = ''
    for (let i in obj) {
        result += `${i}, `
    }
    return result
}

convertSubjectsToString(subjects)

// task 2

function calcPeople (obj) {
    const values = Object.values(obj)
    const resultStudents = values.reduce((acc, item) => acc + item.students, 0)
    const resultTeachers = values.reduce((acc, item) => acc + item.teachers, 0)
    
    const str = `Не прогуливают студентов: ${resultStudents}, преподавателей не в запое: ${resultTeachers}`
    console.log(str);
}

calcPeople(subjects)

// task 3

function calsAverageStydents(obj) {
    const values = Object.values(obj)
    const averageStudents = values.reduce((acc, item) => (acc + item.students), 0) / values.length
    const result = Math.round(averageStudents)
    console.log(`В среднем посещают эту шарагу ${result} студентов, остальные ребятки пивасик пьют и на курсы ходят) красавчики`);
}

calsAverageStydents(subjects)

// tassk 4

function getArray(obj) {
    const array = Object.values(obj)
    console.log(array);
}

getArray(subjects)

// task 5
// сортировал от меньшего к большему, т.к. изначально все идет от большего к меньшему без сортировки
function sortTeachers(obj) {
    const array = Object.values(obj)

    const resultSort = array.sort((a, b) => a.teachers - b.teachers)

    console.log(resultSort);
}

sortTeachers(subjects)