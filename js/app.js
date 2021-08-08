'use strict';
let hours = ['6 am', '7 am', '8 am','9 am' , ' 10 am' , '11 am ' , '12 pm' , '1 pm' , '2 pm',  '3 pm' , '4 pm' , '5 pm' , '6 pm','7 pm'];
let Seattle = {
    locationName :'Seattle',
    minCustomers : 23,
    maxCustomers : 65,
    AvgCookie : 6.3,
    customerNumber:[],
    sales:[],
    total: 0,


  random: function(min ,max){
    min = Math.ceil(this.minCustomers);
    max = Math.floor(this.maxCustomers);
    for(let i = 0 ; i < hours.length; i++){
    this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 

 }

},


calculate: function(){
for(let i = 0; i < hours.length; i++ ){
    this.sales.push(this.customerNumber[i] * this.AvgCookie);
    this.total += this.sales[i];

}
},

render: function(){
let conatiner = document.getElementById('seattle1');
let ulELement = document.createElement('ul');
conatiner.appendChild(ulELement);
for(let i = 0; i < hours.length ; i++){
    let liELement = document.createElement('li');
    ulELement.appendChild(liELement);
    liELement.textContent = hours[i] +" : "+ this.sales[i];


}
let total= document.createElement('li');
ulELement.appendChild(total);
total.textContent= `total: ${this.total}`
}
}
Seattle.random(23 , 65);
Seattle.calculate();
Seattle.render();



let Tokyo = {
    locationName : 'Tokyo',
    minCustomers : 3,
    maxCustomers : 24,
    AvgCookie :  1.2,
    customerNumber:[],
    sales:[],
    total: 0,

    random: function(min ,max){
        min = Math.ceil(this.minCustomers);
        max = Math.floor(this.maxCustomers);
        for(let i = 0 ; i < hours.length; i++){
        this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
     }
    
    },
    
    
    calculate: function(){
    for(let i = 0; i < hours.length; i++ ){
        this.sales.push(this.customerNumber[i] * this.AvgCookie);
        this.total += this.sales[i];
    
    }
    },
    
    render: function(){
    let conatiner = document.getElementById('tokyo1');
    let ulELement = document.createElement('ul');
    conatiner.appendChild(ulELement);
    for(let i = 0; i < hours.length ; i++){
        let liELement = document.createElement('li');
        ulELement.appendChild(liELement);
        liELement.textContent = hours[i] +" : "+ this.sales[i];
    
}
let total= document.createElement('li');
ulELement.appendChild(total);
  total.textContent= `total: ${this.total}`

    }
}
Tokyo.random(3 , 24);
Tokyo.calculate();
Tokyo.render();

let Dubai = {
    locationName : 'Dubai',
    minCustomers : 11,
    maxCustomers : 38,
    AvgCookie : 3.7,
    customerNumber:[],
    sales:[],
    total: 0,


  random: function(min ,max){
    min = Math.ceil(this.minCustomers);
    max = Math.floor(this.maxCustomers);
    for(let i = 0 ; i < hours.length; i++){
    this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 

 }

},


calculate: function(){
for(let i = 0; i < hours.length; i++ ){
    this.sales.push(this.customerNumber[i] * this.AvgCookie);
    this.total += this.sales[i];

}
},

render: function(){
let conatiner = document.getElementById('dubai1');
let ulELement = document.createElement('ul');
conatiner.appendChild(ulELement);
for(let i = 0; i < hours.length ; i++){
    let liELement = document.createElement('li');
    ulELement.appendChild(liELement);
    liELement.textContent = hours[i] +" : "+ this.sales[i];
}

let total= document.createElement('li');
ulELement.appendChild(total);
total.textContent= `total: ${this.total}`
}
}
Dubai.random(11 , 38);
Dubai.calculate();
Dubai.render();

let Paris = {
    locationName : 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    AvgCookie: 2.3,
    customerNumber:[],
    sales:[],
    total: 0,


  random: function(min ,max){
    min = Math.ceil(this.minCustomers);
    max = Math.floor(this.maxCustomers);
    for(let i = 0 ; i < hours.length; i++){
    this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 

     }
    
    },
    
    
    calculate: function(){
    for(let i = 0; i < hours.length; i++ ){
        this.sales.push(this.customerNumber[i] * this.AvgCookie);
        this.total += this.sales[i];
    
    }
    },
    
    render: function(){
    let conatiner = document.getElementById('paris1');
    let ulELement = document.createElement('ul');
    conatiner.appendChild(ulELement);
    for(let i = 0; i < hours.length ; i++){
        let liELement = document.createElement('li');
        ulELement.appendChild(liELement);
        liELement.textContent = hours[i] +" : "+ this.sales[i];

    }
    let total= document.createElement('li');
   ulELement.appendChild(total);   
   total.textContent= `total: ${this.total}`
  }
}
Paris.random(20 , 38);
Paris.calculate();
Paris.render();

let Lima = {
    locationName : 'Lima',
    minCustomers : 2,
    maxCustomers : 16,
    AvgCookie : 4.6,
    customerNumber:[],
    sales:[],
    total: 0,


    random: function(min ,max){
        min = Math.ceil(this.minCustomers);
        max = Math.floor(this.maxCustomers);
        for(let i = 0 ; i < hours.length; i++){
        this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
     }
    
    
    },
    
    
    calculate: function(){
    for(let i = 0; i < hours.length; i++ ){
        this.sales.push(this.customerNumber[i] * this.AvgCookie);
        this.total += this.sales[i];
    
    }
    },
    
    render: function(){
    let conatiner = document.getElementById('lima1');
    let ulELement = document.createElement('ul');
    conatiner.appendChild(ulELement);
    for(let i = 0; i < hours.length ; i++){
        let liELement = document.createElement('li');
        ulELement.appendChild(liELement);
        liELement.textContent = hours[i] +" : "+ this.sales[i];
}
let total= document.createElement('li');
ulELement.appendChild(total);
total.textContent= `total: ${this.total}`
    }
}
Lima.random(2 , 16);
Lima.calculate();
Lima.render();
