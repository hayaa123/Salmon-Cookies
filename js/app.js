'use strict'


let working_hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm" ]

let body = document.querySelector("body"); 
let table = document.createElement("table")
body.appendChild(table)

function table_head(working_hours){

    let tr = document.createElement("tr")
    table.appendChild(tr)

    let th =document.createElement("th")
    th.textContent = "  "
    tr.appendChild(th)
    for (let i=0;i<working_hours.length;i++){
        let th =document.createElement("th")
        th.textContent = working_hours[i]
        tr.appendChild(th)
        }
    let th_total =document.createElement("th")
    th_total.textContent = "Total"
    tr.appendChild(th_total)
}
table_head(working_hours)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


function country (name ,min, max,avg){
    this.name = name,
    this.min = min ,
    this.max = max ,
    this.avg = avg, 
    this.total_country = 0 ,
    this.array_of_sales = []

}
country.prototype.get_sales = function () {
    for (let i = 0; i < working_hours.length; i++) {
        let avg_sale = Math.round( getRandomInt(this.min,this.max)* this.avg )
        this.array_of_sales.push( avg_sale )
        this.total_country += avg_sale 
    }
}
country.prototype.render =  function (){ 
    let tr = document.createElement('tr')
    table.appendChild(tr)
    let td_name = document.createElement('td');
    td_name.textContent = this.name
    tr.appendChild(td_name);
    
    for (let i = 0; i < working_hours.length; i++) {
            let td = document.createElement("td")
            td.textContent = `${this.array_of_sales[i]}`
        tr.appendChild(td);
        }
        
    let total_td =document.createElement('td')
    total_td.textContent = this.total_country
    tr.appendChild(total_td)
}

const Seattle =new country("Seattle",23,65,6.3)
const Tokyo =new country("Tokyo",3,24,1.2)
const Dubai =new country("Dubai",11,38,3.7)
const Paris =new country("Paris",20,38,2.3)
const Lima =new country("Lima",2,16,4.6)

let count_obj = [Seattle,Tokyo,Dubai,Paris,Lima]

for (let i=0;i<count_obj.length;i++){
    count_obj[i].get_sales()
    count_obj[i].render()
}




console.log(Seattle.array_of_sales)

function table_foot (){

    let tr_foot = document.createElement("tr")
    table.appendChild(tr_foot)

    let td_1 = document.createElement("td")
    td_1.textContent = "total_hr"
    tr_foot.appendChild(td_1)
     

    let total_hr=0
    let Totaltotal =0
    
    for (let j=0;j<count_obj.length;j++){
        Totaltotal += count_obj[j].total_country
    }
    for (let i=0 ;i<working_hours.length;i++)
    {   
    
        for (let j=0;j<count_obj.length;j++){
            total_hr += count_obj[j].array_of_sales[i]
        }
       
    let td_foot = document.createElement("td")
    td_foot.textContent = total_hr
    tr_foot.appendChild(td_foot)
    
   
}
let td_totaltotal = document.createElement("td")
td_totaltotal.textContent = Totaltotal  
tr_foot.appendChild(td_totaltotal)    
}
table_foot()
