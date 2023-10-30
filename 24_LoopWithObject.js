


class Employee {
    emp_id 
    emp_name
    emp_dept
    emp_salery
    emp_company
    constructor (emp_id ,emp_name,emp_dept,emp_salery,emp_company ) {
        this.emp_id =emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salery=emp_salery;
        this.emp_company=emp_company;


    }

}

const emp_anil  = new Employee (22,`anil`,`it`,55000,`tcs`);
const emp_radha  = new Employee (33,`radha`,`Hr`,33000,`Wipro`); 

const arrayEmployee = [emp_anil,emp_radha];
arrayEmployee.forEach( ( employee ) => {
if ( employee.emp_company == `tcs`){
    console.log(employee.emp_name,employee.emp_company );
    
}
})