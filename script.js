// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  employeesArray = [];
  
  let result = true;
  while (result) {
    const firstName = prompt("Please Enter your First Name.");
    const lastName = prompt("Please Enter your Last Name.");
    let salary = prompt("Enter Salary.");
   
    //check if salary is a number, if not default to 0
    //both lines below worked...
    // salary = isNaN(parseFloat(salary)) ? 0: parseFloat(salary);
    salary = isNaN(salary) ? 0 : parseFloat(salary);

    const employees = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
    };

    employeesArray.push(employees);

    result = confirm("Do you want to Continue or Cancel")
  }

   return employeesArray;

}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

    // how do I figure out the number of employees if employeesArray is an array
    // how do I loop over employeesArray, access the salary in each object,
    // total the salary, and divides by array.length

    let sum = 0;
    employeesArray.forEach(employees => {
        sum += employees.salary;
    });  
    let numberOfEmployees = employeesArray.length;
    let averageSalary = sum / numberOfEmployees;
    //let n = averageSalary.toFixed(2);
    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);   //can do toFixed like this..shorter
    


    // let sum = 0;
    // for (let i=0; i < employeesArray.length; i++) {
    //     sum += employeesArray[i];
    // }
    // const average = sum / employeesArray[2];
    // // console.log(average);
    // return average;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

    const random = Math.floor(Math.random() * employeesArray.length);       //generate random
    const randomChoices = employeesArray[random];       //access the random employee object from array
    console.log(`Congratulations to ${randomChoices.firstName} ${randomChoices.lastName}, our random drawing winner!`);

}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
