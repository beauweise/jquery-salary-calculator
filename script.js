console.log('Hello JS');

const jen = { firstName: 'Jen', lastName: 'Barber', ID: '4521', title: 'Team Lead', annualSalary: 80000 };
const maurice = { firstName: 'Maurice', lastName: 'Moss', ID: '8724', title: 'Support Team', annualSalary: 58000 };
const roy = { firstName: 'Roy', lastName: 'Smith', ID: '9623', title: 'Quality Assurance', annualSalary: 48000};

const employees  = [jen,maurice,roy];



$(document).ready(onReady);

function onReady() {

    $('#submitEmployee').on('click', submit);
    
    $('#table').on('click',displayEmployees);
    
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
        
        
      
}

function displayEmployees() {
    console.log('in displayEmployees');

    
    let el = $('#table');
    el.empty();

    for (let i = 0; i < addEmployees.length; i++){
        el.append(`<table> ${addEmployees[i]} </table>`)
    }
        
   
    
}





