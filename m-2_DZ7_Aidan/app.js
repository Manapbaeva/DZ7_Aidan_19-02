//task 1
class Worker1 {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary (rate, days) {
        let Salary = this.rate * this.days;
        return Salary
    }
}
let wOne = new Worker1("Aidan", "Manapbaeva", "100", "15")
console.log(wOne.name)
console.log(wOne.surname)
console.log(wOne.rate)
console.log(wOne.days)

//task 2
class Worker1 {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let Salary = this.#rate * this.#days;
        return Salary;
    }
}
workeTwo = new Worker1('Иван', 'Иванов', 10, 31);
console.log(workeTwo.getName());
console.log(workeTwo.getSurname());
console.log(workeTwo.getRate());
console.log(workeTwo.getDays());
console.log(workeTwo.getSalary());