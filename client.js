$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('Chris Hess');
console.log(`Franck`);

// Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

function readyNow() {
  console.log('jQuery ready');
  $('#button').click(console.log(theButton()));
  }


function bonusCalculator(object) {
  let bonusPercentage = 0;
  let totalCompensation = object.annualSalary;
  let totalBonus = 0;

  if (object.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  else if (object.reviewRating === 3) {
    bonusPercentage = 4;
  } 
  else if (object.reviewRating === 4 ) {
    bonusPercentage = 6;
  } 
  else if (object.reviewRating === 5 ) {
    bonusPercentage = 10;
  } 
  if (object.employeeNumber.length === 4) {
    bonusPercentage = bonusPercentage + 5;
  }
  if (object.annualSalary > 65000) {
    bonusPercentage -= 1;
  }
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  totalBonus = Math.round(bonusPercentage * 0.01 * object.annualSalary);
  totalCompensation = totalBonus + parseInt(object.annualSalary);

  let newObject = {
    name: object.name,
    bonusPercentage: bonusPercentage + '%',
    totalCompensation: '$' + totalCompensation,
    totalBonus: '$' + totalBonus
  };
let y = $('h2');
y.append(`
<li>Employee Name: ${newObject.name} </li>
<li>Bonus Percentage: ${newObject.bonusPercentage} </li>
<li>Total Compensation: ${newObject.totalCompensation}</li>
<li>Total Bonus: ${newObject.totalBonus} </li><br>
`);

  return newObject;
};

function theButton(){
for (let i = 0; i < employees.length; i++) {
  bonusCalculator(employees[i]);
}   

}



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
