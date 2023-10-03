//Primitives: numbers, string, boolean
//More complex types: arrays, objects
//function types, parameters

//Primitive

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

//let hobbies = string[];

//hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

//person = {
 //   isEmployee: true
//};

//people; Person[];

//type inference

let course: string | number  = 'React - The Complete Guide';

course = 12341 //type is string unless defined

//Functions & types

//function add(a: number, b: number) {
//    return a + b;
//}

function print(value: any) {
    console.log(value);
}

//Generics

function insertAtBeginning (array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //{-1,1,2,3}
insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');

class Student {
   // firstName: string;
   // lastName: string;
   // age: number;
   // courses: string[];

    constructor (
         public firstName: string, 
         public lastName: string, 
         public age: number, 
         public courses: string[],
         ) {}


    enroll(courseName:string) {
        this.courses.push(courseName);
    }

    listCourses() {
    return this.courses.slice();
    }
}

const student = new Student ('Max', 'Schwarz', 32 ,['Angular']);
student.enroll('React');

//student.listCourses => Angular, React

//student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log ('Hello');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log ('Hello!!!!');
    }
}