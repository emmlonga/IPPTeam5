/** #OBLIGATORY COURSES */
var MW2033 = {
    name: "Ergonomics (HFE)",
    code: "MW2033",
    ECTS: 8,
    language: "de",
    term: "both", /** "ws","ss","both" **/
    progress: "2", /** options: "completed=0", "attending=1", "remaining=2". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var MW2029 = {
    name: "Design of Experiments and Statistics",
    code: "MW2029",
    ECTS: 6,
    language: "de",
    term: "both",
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var MW0101 = {
    name: "Product Ergonomics",
    code: "MW0101",
    ECTS: 5,
    language: "de",
    term: "ss", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var MW0102 = {
    name: "Production Ergonomics",
    code: "MW0102",
    ECTS: 5,
    language: "de",
    term: "ws", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var SE0202 = {
    name: "Interdisciplinary Project",
    code: "SE0202",
    ECTS: 10,
    language: "de",
    term: "both", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "yes",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

/** ELECTIVE MODULES I*/

var MW2130 = {
    name: "Software Ergonomics",
    code: "MW2130",
    ECTS: 5,
    language: "de",
    term: "ws", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}


var MW0168 = {
    name: "Advanced Driver Assistant Systems in Vehicles",
    code: "MW0168",
    ECTS: 5,
    language: "de",
    term: "ss", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}


var MW1731 = {
    name: "Motivational User Interfaces and User Experience",
    code: "MW1731",
    ECTS: 6,
    language: "de",
    term: "ss", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}


var AR50110 = {
    name: "Industrial Design",
    code: "AR50110",
    ECTS: 6,
    language: "de",
    term: "ws", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var MW2298 = {
    name: "Human Factors of Automated & Cooperative Driving",
    code: "MW2298",
    ECTS: 3,
    language: "de",
    term: "ws", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var MW2260 = {
    name: "Interaction Prototyping and Programming",
    code: "MW2260",
    ECTS: 8,
    language: "gb",
    term: "both", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

/** Elective Modules II **/

var SZ0602 = {
    name: "Italian A1.1",
    code: "SZ0602",
    ECTS: 3,
    language: "it",
    term: "both", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var SZ1201 = {
    name: "Spanish A1",
    code: "SZ1201",
    ECTS: 3,
    language: "es",
    term: "both", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}

var IN2111 = {
    name: "3D User Interfaces",
    code: "IN2111",
    ECTS: 6,
    language: "gb",
    term: "ss", /** "ws","ss","both" **/
    progress: "2", /** options: "completed", "attending", "remaining". "remaing is standard"**/
    starred: "no",
    rated: false,
    rating: 4.1, /**this should be a [] with the overall rating information in it**/
}


/**Store them all in the Ergonomics array**/
/**Format: [course type, total credits, [courses]]**/
var degree_Ergonomics = [
    ["Required Modules",34,[MW2033,MW2029,MW0101,MW0102,SE0202]],
    ["Electives Modules I",42,[MW2130,MW0168,MW1731,AR50110,MW2298,MW2260]],
    ["Elective Modules II",14,[SZ0602,SZ1201,IN2111]]
]

var user_Courses =[
    /**Concluded*/ [MW2033,SZ0602,MW2130],
    /**Attending*/ [MW2029,SZ1201,IN2111],
]