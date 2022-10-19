// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

const users: Users[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]


// task 1

type Users = {
    name: string
    phone: string
    email: string
    animals?: Array<"cat">
    cars?: Cars
    hasChildren: boolean
    hasEducation: boolean
}

type Cars = Array<"bmw" | "audi">

// task 2

function convertNamesToString(users: Users[]): string {
    const resultString: string = users.map(({name}) => name).join(', ')
    return resultString
}

convertNamesToString(users)

// task 3

function calculateCars(users: Users[]): number {
    const usersWithCarsArr: Users[] = users.filter(({cars}) => cars)
    const usersCars: number = usersWithCarsArr.reduce((acc, item: any) => acc + item.cars.length, 0)
    return usersCars
}

calculateCars(users)

// task 4

function filterUsersWithEducation(users: Users[]): Users[] {
    return users.filter(({hasEducation}) => hasEducation)
}

filterUsersWithEducation(users)

// task 5

function filterUsersWithAnimals(users: Users[]): Users[] {
    return users.filter(({animals}) => animals)
}

filterUsersWithAnimals(users);

// task 6

function convertCarsToString(users: Users[]): string {
    const resultCars: string = users.map(({cars}) => cars).join(', ')
    return resultCars
}

convertCarsToString(users)