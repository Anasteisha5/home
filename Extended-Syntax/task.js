"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
   let discrim = b ** 2 - 4 * a * c;

   if (discrim < 0) {
     console.log("Нет корней");
   } else if (discrim == 0) {
     let x = (-b) / (2 * a);
     console.log("Один корень");
     console.log(x);
     return x;
   } else if (discrim > 0) {
     let x = [];
     x[0] = ((-b) + Math.sqrt(discrim)) / (2 * a);
     x[1] = ((-b) - Math.sqrt(discrim)) / (2 * a);
     console.log("Два корня");
     console.log(x);
     return x;
   }
  
  }
  getResult(2, 4 , -3);



function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
let today = new Date().getFullYear();
    let old = new Date().getFullYear() - dateOfBirthday;
    if (old >= 18) {
      console.log(`Не желаете ли олд-фэшн, ${name}?`)
    };
  
    if (old < 18) {
      console.log(`Сожалею, ${name} , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    };
   
    return old;
    
}
askDrink("Pavel" , 1997)    


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

   let grade = [2, 3, 4, 5, 5];
   let total = 0;
   
   if (grade.length > 5) {
       console.log(grade.splice(5))
       console.log((grade[0] + grade[1] + grade[2] + grade[3]+ grade[4])/grade.length);
   }
   if (grade.length <= 5) {
     for(let i in grade) {total += grade[i];}
    console.log(total/grade.length);
   }
   return grade;
  
}

 getAverageMark()
