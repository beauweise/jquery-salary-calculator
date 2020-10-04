
const employees  = [];

const totalMonthly = ();

$(document).ready(onReady);

function onReady() {
    console.log('Hello JS');

    $('#submitEmployee').on('click', submit);
    
    $('#table').append(`<tr><th> First Name </th>
                        <th> Last Name </th>
                        <th> ID </th> 
                        <th> Title </th>
                        <th> Annual Salary </th>
                        <th></th></tr>`);

    $('#table').on('click','.delete',deleteEmployee)
    
    $('#monthlyBudget').append()
    
}

function addSalary(){

}


function submit(){
    console.log('clicked');


        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let ID  = $('#ID').val();
        let title = $('#ID').val();
        let annualSalary = $('#annualSalary').val();
    
        let addEmployee = {
            firstName:  firstName,
            lastName: lastName,
            ID: ID,
            title: title,
            annualSalary: annualSalary
        }
        employees.push(addEmployee);
        $('#firstName').val('');
        $('#lastName').val('');
        $('#ID').val('');
        $('#title').val('');
        $('#annualSalary').val('');

        console.log(addEmployee);
        
        displayEmployees();
      
}

function deleteEmployee(){
    console.log('delete');
    $(this).parent().remove();
    
}

function displayEmployees() {
    
    
    
    let el = $('#table');
    // el.empty();

    $('.rows').empty();

    for (let i = 0; i < employees.length; i++){
        el.append(`<tr class = 'rows'><td> ${employees[i].firstName} </td>
                        <td> ${employees[i].lastName} </td> 
                        <td> ${employees[i].ID} </td>
                        <td> ${employees[i].title} </td>
                        <td> $${employees[i].annualSalary} </td>
                        <td><button class = 'delete' >Delete</button></td>
                    </tr>`)
    }
    let el =
    for (let i =0; i <employees.length; i++)

        
   
    
}





