'use strict'

let working_hours = 14

const Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    ncustomer: 0,
    get_ncustomer: function () {
        this.ncustomer = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        return this.ncustomer
    },
    sale: 0,
    get_sales: function () {
        this.sale = this.ncustomer * this.avg
        return this.sale
    },
    array_of_sales: [],
}

// let array_of_sales = []
for (let i = 0; i < working_hours; i++) {
    Seattle.get_ncustomer()
    Seattle.get_sales()
    Seattle.array_of_sales[i] = Seattle.sale
}
// Seattle.array_of_sales = array_of_sales

console.log(Seattle.array_of_sales)

let body = document.querySelector("body");

let seattle_div = document.createElement('div')
body.appendChild(seattle_div)
let h1 = document.createElement('h1');
h1.textContent = "Seattle"
seattle_div.appendChild(h1);

let ul = document.createElement('ul');
seattle_div.appendChild(ul);

for (let i = 0; i < working_hours; i++) {
    let hour = i+6
    if (hour < 12 ){
        let li = document.createElement("li")
    li.textContent = `${hour} am : ${Seattle.array_of_sales[i]}`
    ul.appendChild(li);
    }
    else 
    {let li = document.createElement("li")
    li.textContent = `${6 + i} pm : ${Seattle.array_of_sales[i]}`
    ul.appendChild(li);}
}

// const Tokyo = {
//     min :  3,
//     max :  24,
//     avg :  1.2,
// }

const Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    ncustomer: 0,
    get_ncustomer: function () {
        this.ncustomer = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        return this.ncustomer
    },
    sale: 0,
    get_sales: function () {
        this.sale = this.ncustomer * this.avg
        return this.sale
    },
    array_of_sales: [],
}

// let array_of_sales = []
for (let i = 0; i < working_hours; i++) {
    Tokyo.get_ncustomer()
    Tokyo.get_sales()
    Tokyo.array_of_sales[i] = Tokyo.sale
}
// Tokyo.array_of_sales = array_of_sales

console.log(Tokyo.array_of_sales)

let Tokyo_div = document.createElement('div');
body.appendChild(Tokyo_div); 

let h1_Tokyo = document.createElement('h1');
h1_Tokyo.textContent = "Tokyo"
Tokyo_div.appendChild(h1_Tokyo);

let ul_Tokyo = document.createElement('ul');
Tokyo_div.appendChild(ul_Tokyo);

for (let i = 0; i < working_hours; i++) {
    let hour = i+6
    if (hour < 12 ){
        let li = document.createElement("li")
    li.textContent = `${hour} am : ${Tokyo.array_of_sales[i]}`
    ul_Tokyo.appendChild(li);
    }
    else 
    {let li = document.createElement("li")
    li.textContent = `${6 + i} pm : ${Tokyo.array_of_sales[i]}`
    ul_Tokyo.appendChild(li);}
}

// const Dubai = {
//     min :  11,
//     max :  38,
//     avg :  3.7,
// }
const Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    ncustomer: 0,
    get_ncustomer: function () {
        this.ncustomer = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        return this.ncustomer
    },
    sale: 0,
    get_sales: function () {
        this.sale = this.ncustomer * this.avg
        return this.sale
    },
    array_of_sales: [],
}

// let array_of_sales = []
for (let i = 0; i < working_hours; i++) {
    Dubai.get_ncustomer()
    Dubai.get_sales()
    Dubai.array_of_sales[i] = Dubai.sale
}
// Dubai.array_of_sales = array_of_sales

console.log(Dubai.array_of_sales)

let Dubai_div = document.createElement('div');
body.appendChild(Dubai_div); 

let h1_Dubai = document.createElement('h1');
h1_Dubai.textContent = "Dubai"
Dubai_div.appendChild(h1_Dubai);

let ul_Dubai = document.createElement('ul');
Dubai_div.appendChild(ul_Dubai);

for (let i = 0; i < working_hours; i++) {
    let hour = i+6
    if (hour < 12 ){
        let li = document.createElement("li")
    li.textContent = `${hour} am : ${Dubai.array_of_sales[i]}`
    ul_Dubai.appendChild(li);
    }
    else 
    {let li = document.createElement("li")
    li.textContent = `${6 + i} pm : ${Dubai.array_of_sales[i]}`
    ul_Dubai.appendChild(li);}
}

// const Paris = {
//     min :  20,
//     max :  38,
//     avg :  2.3,
// }
const Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    ncustomer: 0,
    get_ncustomer: function () {
        this.ncustomer = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        return this.ncustomer
    },
    sale: 0,
    get_sales: function () {
        this.sale = this.ncustomer * this.avg
        return this.sale
    },
    array_of_sales: [],
}

// let array_of_sales = []
for (let i = 0; i < working_hours; i++) {
    Paris.get_ncustomer()
    Paris.get_sales()
    Paris.array_of_sales[i] = Paris.sale
}
// Paris.array_of_sales = array_of_sales

console.log(Paris.array_of_sales)

let Paris_div = document.createElement('div');
body.appendChild(Paris_div); 

let h1_Paris = document.createElement('h1');
h1_Paris.textContent = "Paris"
Paris_div.appendChild(h1_Paris);

let ul_Paris = document.createElement('ul');
Paris_div.appendChild(ul_Paris);

for (let i = 0; i < working_hours; i++) {
    let hour = i+6
    if (hour < 12 ){
        let li = document.createElement("li")
    li.textContent = `${hour} am : ${Paris.array_of_sales[i]}`
    ul_Paris.appendChild(li);
    }
    else 
    {let li = document.createElement("li")
    li.textContent = `${6 + i} pm : ${Paris.array_of_sales[i]}`
    ul_Paris.appendChild(li);}
}

// const Lima = {
//     min :  2,
//     max :  16,
//     avg :  4.6,
// }

const Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    ncustomer: 0,
    get_ncustomer: function () {
        this.ncustomer = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        return this.ncustomer
    },
    sale: 0,
    get_sales: function () {
        this.sale = this.ncustomer * this.avg
        return this.sale
    },
    array_of_sales: [],
}

// let array_of_sales = []
for (let i = 0; i < working_hours; i++) {
    Lima.get_ncustomer()
    Lima.get_sales()
    Lima.array_of_sales[i] = Lima.sale
}
// Lima.array_of_sales = array_of_sales

console.log(Lima.array_of_sales)

let Lima_div = document.createElement('div');
body.appendChild(Lima_div); 

let h1_Lima = document.createElement('h1');
h1_Lima.textContent = "Lima"
Lima_div.appendChild(h1_Lima);

let ul_Lima = document.createElement('ul');
Lima_div.appendChild(ul_Lima);

for (let i = 0; i < working_hours; i++) {
    let hour = i+6
    if (hour < 12 ){
        let li = document.createElement("li")
    li.textContent = `${hour} am : ${Lima.array_of_sales[i]}`
    ul_Lima.appendChild(li);
    }
    else 
    {let li = document.createElement("li")
    li.textContent = `${6 + i} pm : ${Lima.array_of_sales[i]}`
    ul_Lima.appendChild(li);}
}
