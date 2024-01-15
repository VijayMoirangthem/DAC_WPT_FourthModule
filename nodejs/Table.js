const sequelize = require("./database");

const {INTEGER , STRING} = require('sequelize');

const Student = sequelize.define("Students" , {
StudID:{ type:INTEGER , primaryKey:true , autoIncrement:false ,},
StudName:{ type:STRING , primaryKey:false ,},
StudMob:{ type:STRING , primaryKey:false ,},
StudMark:{ type:INTEGER , primaryKey:false ,}
},{timestamps:false}); 


module.exports = Student;