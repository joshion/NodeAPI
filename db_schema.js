require("./db_connect");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Student_Schema = new Schema({
    id: Number,
    name: String,
    phone: String
});

var Toy_Schema = new Schema();
Toy_Schema.add({name: "string", color: "string", price: "number"});
Toy_Schema.method("print", function(){
    console.log("name: %s, color: %s, price: %s", this.name, this.color, this.price);
});
var Toy_Model = mongoose.model("Toy", Toy_Schema);
exports.Toy_Model = Toy_Model;

var Student_Model = mongoose.model("Student", Student_Schema);
exports.Student_Model = Student_Model;

