
const employees  = [];

let yearlyTotal = 0; 

$(document).ready(onReady);

function onReady() {
    

    $('#submitEmployee').on('click', submit);
    
    $('#table').append(`<tr><th> First Name </th> 
                        <th> Last Name </th>
                        <th> ID </th> 
                        <th> Title </th>
                        <th> Annual Salary </th>
                        <th></th></tr>`); //table header

    $('#table').on('click','.delete',deleteEmployee); //delete employee button
    
    
    
}



function submit(){

        let firstName = $('#firstName').val();          // input for firstName  
        let lastName = $('#lastName').val();            // input for lastName   
        let ID  = $('#ID').val();                       // input for ID
        let title = $('#title').val();                  // inout for title
        let annualSalary = $('#annualSalary').val();    // input for annualSalary
    
        let addEmployee = {                         // addEmployee object
            firstName:  firstName,
            lastName: lastName,
            ID: ID,
            title: title,
            annualSalary: annualSalary
        }
        employees.push(addEmployee);                //addemployee object pushed to employees
        $('#firstName').val('');                    //empty input
        $('#lastName').val('');
        $('#ID').val('');
        $('#title').val('');
        $('#annualSalary').val('');

        
        displayEmployees();                         // displayEmployee funtion
        
}

function deleteEmployee(){
    $(this).parent().parent().remove();             //delete button goes here to remove this line
    
}

function displayEmployees() {
    
    
    yearlyTotal = 0;  
    
    let el = $('#table');
    

    $('.rows').empty();                     //empty rows in <tr>

    for (let i = 0; i < employees.length; i++){ //looping through emolyees array
        el.append(`<tr class = 'rows'><td> ${employees[i].firstName} </td> 
                        <td> ${employees[i].lastName} </td> 
                        <td> ${employees[i].ID} </td>
                        <td> ${employees[i].title} </td>
                        <td> $${employees[i].annualSalary} </td>
                        <td><button class = 'delete' >Delete</button></td>
                    </tr>`)//making the table with looped employees
        
    yearlyTotal += Number(employees[i].annualSalary);  //adding yearlyTotal with annual salaries loop

    
    }
    $('#monthlyBudget').empty();
    $('#monthlyBudget').append( 'Monthly Total : $' + yearlyTotal/12);// yearly total divided to get monthly total
    
     if(yearlyTotal/12 >= 20000) {
        document.getElementById("monthlyBudget").style.color = "#ff0000";
     }  
   
    
}





