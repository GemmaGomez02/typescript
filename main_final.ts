class Address {
    street: string;
    number: number;
    city: string;
    postalCode: string;
    constructor(street: string, number: number, city: string, postalCode: string) {
    this.street = street;
    this.number = number;
    this.city = city;
    this.postalCode = postalCode;
    }
    getFullAddress(): string {
    return `${this.street} ${this.number}, ${this.city} (${this.postalCode})`;
    }
   }
   


   class Person {
    dni: string;
    name: string;
    surname: string;
    addresses: Address[];
    phones: Phone[];
    emails: Email[];
    constructor(dni: string, name: string, surname: string) {
    this.dni = dni;
    this.name = name;
    this.surname = surname;
    this.addresses = [];
    this.phones = [];
    this.emails = [];
    }
    addAddress(address: Address): void {
    this.addresses.push(address);
    }
    addPhone(phone: Phone): void {
    this.phones.push(phone);
    }
    addEmail(email: Email): void {
    this.emails.push(email);
    }
    getFullName(): string {
    return `${this.name} ${this.surname}`;
    }
    getDni(): string {
    return this.dni;
    }
   }
   

   class Phone {
    number: string;
    type: string;
    constructor(number: string, type: string) {
    this.number = number;
    this.type = type;
    }
    getPhone(): string {
    return `${this.number} (${this.type})`;
    }
   }
 

   class Email {
    address: string;
    constructor(address: string) {
    this.address = address;
    }
    getEmail(): string {
    return this.address;
    }
   }
 

   // Creamos los registros de personas
const person1 = new Person('45672345A', 'Marcos', 'Sanchez');
const person2 = new Person('98342567B', 'Maria', 'Gomez');
const person3 = new Person('12097834C', 'Bob', 'Garcia');
// Añadimos información a cada persona
person1.addAddress(new Address('Calle del Pilar', 12, 'Murcia', '10001'));
person1.addPhone(new Phone('988678456', 'Casa'));
person1.addEmail(new Email('marcos.sanchez@gmail.com'));
person2.addAddress(new Address('Calle Amancio', 4, 'Orense', '10002'));
person2.addPhone(new Phone('645876123', 'Trabajo'));
person2.addEmail(new Email('maria.gomez@gmail.com'));
person3.addAddress(new Address('Calle del Pajaro', 9, 'Madrid', '10003'));
person3.addPhone(new Phone('678345098', 'Movil'));
person3.addEmail(new Email('bob.garcia@gmail.com'));
// Mostramos los registros de personas
console.log(person1.getFullName());
console.log(person1.getDni());
person1.addresses.forEach(address => console.log(address.getFullAddress()));
person1.phones.forEach(phone => console.log(phone.getPhone()));
person1.emails.forEach(email => console.log(email.getEmail()));
console.log('');
console.log(person2.getFullName());
console.log(person2.getDni());
person2.addresses.forEach(address => console.log(address.getFullAddress()));
person2.phones.forEach(phone => console.log(phone.getPhone()));
person2.emails.forEach(email => console.log(email.getEmail()));
console.log('');
console.log(person3.getFullName());
console.log(person3.getDni());
person3.addresses.forEach(address => console.log(address.getFullAddress()));
person3.phones.forEach(phone => console.log(phone.getPhone()));
person3.emails.forEach(email => console.log(email.getEmail()));
console.log('');
// Modificamos uno de los registros de persona
const person2Dni = '98342567B';
const newAddress = new Address('Calle Zarzuela', 8, 'Burgos', '10004');
const newPhone = new Phone('657789677', 'Movil');
const newEmail = new Email('m.gomez@gmail.com');
const personToModify = [person1, person2, person3].find(person => person.getDni() === 
person2Dni);
if (personToModify) {
 personToModify.addAddress(newAddress);
 personToModify.addPhone(newPhone);
 personToModify.addEmail(newEmail);
}
// Mostramos los registros de personas después de la modificación
console.log(person1.getFullName());
console.log(person1.getDni());
person1.addresses.forEach(address => console.log(address.getFullAddress()));
person1.phones.forEach(phone => console.log(phone.getPhone()));
person1.emails.forEach(email => console.log(email.getEmail()));
console.log('');
console.log(person2.getFullName());
console.log(person2.getDni());

person2.addresses.forEach(address => console.log(address.getFullAddress()));
person2.phones.forEach(phone => console.log(phone.getPhone()));
person2.emails.forEach(email => console.log(email.getEmail()));
console.log('');

console.log(person3.getFullName());
console.log(person3.getDni());
person3.addresses.forEach(address => console.log(address.getFullAddress()));
person3.phones.forEach(phone => console.log(phone.getPhone()));
person3.emails.forEach(email => console.log(email.getEmail()));
console.log(''); 