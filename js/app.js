'use strict';


    let storeArray=[];
    let hours = ['6 am', '7 am', '8 am','9 am' , ' 10 am' , '11 am ' , '12 pm' , '1 pm' , '2 pm',  '3 pm' , '4 pm' , '5 pm' , '6 pm','7 pm'];
    let container = document.getElementById('container');
    let tableElement = document.createElement('table');
    container.appendChild(tableElement);
    
      function Store (storeName, minCustomer, maxCustomer, avgCookie){
      this.storeName =storeName;
      this.minCustomer = minCustomer;
      this.maxCustomer = maxCustomer;
      this.avgCookie = avgCookie;
      this.sales = [];
      this.customerNumber = [];
      this.total = 0;
      storeArray.push(this)  
    }
   Store.prototype.getcustomerNumber = function(){
       let min = Math.ceil(this.minCustomer);
      let  max = Math.floor(this.maxCustomer);
        
        for (let i=0; i<hours.length; i++){
            
            this.customerNumber.push(Math.floor(Math.random() * (max - min + 1) + min))  
        }
        
      };
    
    
     Store.prototype.getsales= function(){
        for (let i=0; i<hours.length; i++){
          let calcuSales= Math.ceil(this.customerNumber[i]*this.avgCookie);
          this.sales.push(calcuSales);
          this.total += calcuSales;
        }
      };
        Store.prototype.render = function () {

             let trEl= document.createElement('tr');

             tableElement.appendChild(trEl)
             let tdEl1 = document.createElement('td');
             trEl.appendChild(tdEl1);
             tdEl1.textContent = `${this.storeName}`;
        for (let i=0;i<hours.length;i++){  
            
         let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);

        tdEl.textContent = `${this.sales[i]}`;
         }

        let tdEl2 = document.createElement('td');
         trEl.appendChild(tdEl2);

         tdEl2.textContent = this.total; 
    }
           
       
        
      function createtableHeader() {
            let trEl = document.createElement('tr');
            tableElement.appendChild(trEl);
         
             let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = '';
         
            for(let i = 0; i <= hours.length-1; i++) {
                let thEl1 = document.createElement('th');
                
                trEl.appendChild(thEl1);
                thEl1.textContent = `${hours[i]}`;
         
            }
            let thEl2 = document.createElement('th');
             trEl.appendChild(thEl2);
            thEl2.textContent = 'Daily Store Total';
      
        }
        let myform = document.getElementById('myForm');
        myform.addEventListener('submit', addStore);
        function addStore(event) {
        
            event.preventDefault();
            let storeName = event.target.storeName.value;
            let minCustomer = event.target.minCustomer.value;
            let maxCustomer = event.target.maxCustomer.value;
            let avgCookie = event.target.avgCookie.value;
            let newStore = new Store(storeName , minCustomer, maxCustomer , avgCookie);
            newStore.getcustomerNumber();
            newStore.getsales();
            newStore.render();
            
      
      }
         createtableHeader();

         for (let i = 0; i < storeArray.length; i++) {
          storeArray[i].render();
         }

        function createtableFooter(){
            
            let trEl = document.createElement('tr');
            tableElement.appendChild(trEl)
            let thEl20 = document.createElement('td');
            trEl.appendChild(thEl20);
            thEl20.textContent = "total";
         
            let totalTable =0;
            
            for(let i=0 ; i<hours.length;i++){
                let total=0;
                 
                for(let j=0 ; j<storeArray.length;j++){
                    total = total + storeArray[j].sales[i];
                    totalTable = totalTable +  storeArray[j].sales[i];
         
            }
             
        let thE3 = document.createElement('td');
            trEl.appendChild(thE3);
            thE3.textContent = total;
        }
        let thEl4 = document.createElement('td');
            trEl.appendChild(thEl4);
            thEl4.textContent = totalTable;
        };
       
       

        
        let Seattle = new Store ('seatlle', 23, 65,6.3)
        let Tokyo  =   new Store ('Tokyo', 3, 24,1.2)
        let Dubai =   new Store ('Dubai', 11, 38,3.7)
        let Paris =   new Store ('Paris', 20, 38,2.3)
        let Lima =    new Store ('Lima', 2, 16,4.6)
        Seattle.getcustomerNumber();
        Seattle.getsales();
        Seattle.render()
    
        Tokyo.getcustomerNumber()
        Tokyo.getsales();
        Tokyo.render()
    
        Dubai.getcustomerNumber();
        Dubai.getsales();
        Dubai.render()
    
        Paris.getcustomerNumber();
        Paris.getsales();
        Paris.render()
    
        Lima.getcustomerNumber();
        Lima.getsales();
        Lima.render();
        


        createtableFooter();
  
        




      


