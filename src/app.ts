import {Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instace
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc : HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end')
})



// Generics

const addUID = <T extends {name:string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
let docTwo = addUID({name: 'mario'});

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T> {
    uid: number;
    resourceName : string;
    resourceType : number;
    data : T;
}

const docThree: Resource <object> = {
    uid: 1,
    resourceName: 'person',
    resourceType: ResourceType.BOOK,
    data: {name : 'mario'}
}

const docFour : Resource <object> = {
    uid: 2,
    resourceName: 'shoppingList',
    resourceType: ResourceType.PERSON,
    data: {name: 'yoshi', age: 20}
}

console.log(docFour, docThree)