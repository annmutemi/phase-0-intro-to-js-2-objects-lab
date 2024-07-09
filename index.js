// Write your solution in this file!
const employee = { name: "ann", streetAddress: "syokimau" }
 
function updateEmployeeWithKeyAndValue(employee, key, value){
    console.log(employee)
    const newEmployee = {...employee}
    newEmployee[key] = value
    console.log(newEmployee)
    return newEmployee
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
 
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    console.log(newEmployee)
    return newEmployee
}
 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}