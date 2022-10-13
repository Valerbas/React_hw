//number

let count: number = 1

//boolean

let isActive: boolean = true

//string

let name1: string = 'Petuh'

// arrays

let list: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

//turple

const x: [string, number] = ['good', 42]

//enum

enum Day {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY}

//any

let y: [any, any] = ['good', 4555]

//symbol

const sym1: unique symbol = Symbol()

//object

const user: object = { name: 'Vvasek'}

//type

type Name = string
let name3: Name = 'John'

// functions

const createPassword = (name2: string, age?: number): string => `${name2}${age}`
/* если ставим знак вопроса после age, то мы не обязаны его указвать при вызове функции */

// задачи на уроке
type User = { id: number, email: string, first_name: string, last_name: string, avatar: string, age: number, key: null }

/* type User = { id: number, age: number, key: null, [prop: string]: } */

const users: User[] = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "age": 23,
      "key": null
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "age": 20,
      "key": null,
    }
  ]
  




  // currency описать с помощью литеральных типов и объединения
  type Product = { 
    id: number, 
    name: string, 
    price: number, 
    /* currency: number | string, */
    currency: "euro" | "dollar"
    ingredients: [[string, string], [string, string, string]],
    type: string,
    available?: boolean
}

  const products: Product[] = [
    {
      id: 1,
      name: "Burger Premium",
      price: 6,
      currency: "dollar",
      ingredients: [["flour", "beef"], ["salad", "cheese", "sauce"]],
      type: "burger",
    },
    {
      id: 2,
      name: "Burger Lite",
      price: 2.3,
      currency: "euro",
      ingredients: [["flour", "beef"], ["cheese", "sauce", "cucumber"]],
      type: "burger",
      available: true,
    },
    {
      id: 3,
      name: "Burger Spicy",
      price: 5,
      currency: "dollar",
      ingredients: [["flour", "beef"], ["cheese", "sauce", "pepper"]],
      type: "burger",
      available: true
    },
  ]


// ###task

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


const convertSubjectsToString = (object: object): string => {
    let result = ''
    for (let i in object) {
        result += `${i}, `
    }
    return result
}

convertSubjectsToString(subjects)