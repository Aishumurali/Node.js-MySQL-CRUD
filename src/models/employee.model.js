'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Employee = function(employee){
  this.group1         = employee.group1;
  this.title         =  employee.title;
  this.start_time    = new Date();
  this.end_time    =  new Date();
};
Employee.create = function (newEmp, result) {
dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Employee.findById = function (id, result) {
dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Employee.findAll = function (result) {
dbConn.query("Select * from employees", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};
Employee.update = function(id, employee, result){
dbConn.query("UPDATE employees SET group1=?,title=?,start_time=?, WHERE id = ?", [employee.group1,employee.title, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Employee.delete = function(id, result){
dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Employee;