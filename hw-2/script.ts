// Протипизировать данные
// используйте все возможные типы для типизации, включая пользовательские типы

//task 1

type Faculty = {
    id: number
    faculty: string
    subjects: string[]
    countStudents: number
}

const faculties: Faculty[] = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    }
]

// task 2

type Movie  = {
    id: number
    title: string
    year: number
    released: string
    runtime: string
    genre: string[]
    director: string
    writer: string
    actors: string[]
    plot: string
    country: string
    poster: string
    imdbRating: number
    imdbVotes: number
    type: string
    boxOffice: string
    production: string
}

// пробовал через [prop: string]: string сделать все одинаковые строковые элементы, но выдает ошибки((

const movies: Movie[] = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
]

// task 3 #
// Протипизировать данные
// каждый фложенный объект и идентичные повторяющиеся свойста вынести в отдельный type/interface
// для описания полей language и genres используйте литеральные типы и объединение (Пример: type Name = 'John' | 'Anna')

type Show = {
    score: number
    show: ShowInfo
}

type id = number
type name = string

type ShowInfo = {
    id: id
    url: string
    name: name
    type: string
    language: "Dutch" | "English" 
    genres: Array<"Comedy" | "Family" | "Romance" | "Drama" >
    status: string
    runtime: number | null
    averageRuntime: number
    premiered: string
    ended: string | null
    officialSite: string | null
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: null
    dvdCountry: null
    externals: Externals
    image: Image  
    summary: string
    updated: number
    _links: Links
}

enum Day { Sunday = "Sunday", Monday = "Monday", Tuesday = "Tuesday", Wednesday = "Wednesday", Thursday = "Thursday", Friday = "Friday", Saturday = "Saturday"}
//хотел попробовать через enum, но выдает ошибки, не могу понять в чем причина, гуглил и вроде все правильно, в итоге сделал через string[], как показан ниже

type Schedule = {
    time: string
    days: /* Array<Day.Sunday | Day.Monday | Day.Tuesday | Day.Wednesday | Day.Thursday | Day.Friday | Day.Saturday> */ string[]
}

type Rating = {
    average: null | number
}

type Network = {
    id: id
    name: name
    country: Country
    officialSite: null | string
}

type Country = {
    name: name
    code: string
    timezone: string
}

type Externals = {
    tvrage: null | number
    thetvdb: number
    imdb: string
}

type Image = {
    medium: string
    original: string
}

type href = string

type Links = {
    self: { href: href } 
    previousepisode: { href: href}
}


const shows: Show[] = [
    {
        "score": 1.1905451,
        "show": {
            "id": 5451,
            "url": "https://www.tvmaze.com/shows/5451/golden-girls",
            "name": "Golden Girls",
            "type": "Scripted",
            "language": "Dutch",
            "genres": [
                "Comedy",
                "Family",
                "Romance"
            ],
            "status": "Ended",
            "runtime": 30,
            "averageRuntime": 30,
            "premiered": "2012-08-25",
            "ended": "2012-11-03",
            "officialSite": null,
            "schedule": {
                "time": "20:00",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 78,
            "network": {
                "id": 112,
                "name": "RTL4",
                "country": {
                    "name": "Netherlands",
                    "code": "NL",
                    "timezone": "Europe/Amsterdam"
                },
                "officialSite": null
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 262042,
                "imdb": "tt2359096"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/22/55709.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/22/55709.jpg"
            },
            "summary": "<p>Meet Barbara, Els, Toos &amp; Milly... Together they form the perfect circle of friends and live in their home in Scheveningen. The scripts are based on original American screenplays, but have been rewritten into Dutch and the year 2012.</p>",
            "updated": 1624285127,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/5451"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/2117447"
                }
            }
        }
    },
    {
        "score": 1.0154191,
        "show": {
            "id": 722,
            "url": "https://www.tvmaze.com/shows/722/the-golden-girls",
            "name": "The Golden Girls",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Drama",
                "Comedy"
            ],
            "status": "Ended",
            "runtime": 30,
            "averageRuntime": 30,
            "premiered": "1985-09-14",
            "ended": "1992-05-09",
            "officialSite": null,
            "schedule": {
                "time": "21:00",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": 8.4
            },
            "weight": 94,
            "network": {
                "id": 1,
                "name": "NBC",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                },
                "officialSite": "https://www.nbc.com/"
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": 5820,
                "thetvdb": 71292,
                "imdb": "tt0088526"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"
            },
            "summary": "<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>",
            "updated": 1648572955,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/722"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/64040"
                }
            }
        }
    },
    {
        "score": 0.5591333,
        "show": {
            "id": 57291,
            "url": "https://www.tvmaze.com/shows/57291/the-holden-girls-mandy-myrtle",
            "name": "The Holden Girls: Mandy & Myrtle",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Comedy"
            ],
            "status": "Running",
            "runtime": null,
            "averageRuntime": 32,
            "premiered": "2021-09-07",
            "ended": null,
            "officialSite": "https://www.channel4.com/programmes/the-holden-girls-mandy-myrtle/",
            "schedule": {
                "time": "",
                "days": [
                    "Tuesday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 59,
            "network": {
                "id": 41,
                "name": "E4",
                "country": {
                    "name": "United Kingdom",
                    "code": "GB",
                    "timezone": "Europe/London"
                },
                "officialSite": null
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 409152,
                "imdb": "tt15371940"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/354/887264.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/354/887264.jpg"
            },
            "summary": "<p>Spoof documentary followiing actress and broadcaster Amanda Holden and her grandmother Myrtle, played by Leigh Francis.</p>",
            "updated": 1632389837,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/57291"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/2166477"
                }
            }
        }
    }
]