const mongoose = require("mongoose");
 
// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/myDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
 // prototype 
const User = mongoose.model("User", {
    name: { type: String },
    age: { type: Number },
    favoritefood: { type: Array}
});
 
// Creer un model
/* const newUser = new User({
    name: "Nathan",
    age: 20,
    favoritefood: ['alloco','poisson']
});

newUser.save((err, res) => {
    if (err) return handleError(err);
    else return console.log("Result: ", res)
}); 
  */

// inserer plusieurs modele

/*  User.insertMany(
	[
		{
			name: "Riad",
			age: 21,
            favoritefood: ['alloco','poisson']
		},
		{
			name: "Sara",
			age: 24,
            favoritefood: ['Riz','tchep']
		},
		{
			name: "Ami",
			age: 16,
            favoritefood: ['pizza','burger']
		},
		{
			name: "jhon",
			age: 18,
            favoritefood: ['Garba','Poisson']
		},
	],
	(err, res) => {
		if (err) return handleError(err);
		else return console.log("Result: ", res)
	}
);  */

// trouver un seul model condition(age >= 21)
/* User.findOne({ age: { $gte: 21 } }, function (err, res) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Result : ", res);
    }
}); 
 */
// Or you can use findOneAndUpdate()
 /* 
const doc = User.findOneAndUpdate(
    { name: "Rishu" },
    { age: 22 },
     
    // if 'new' isn't true then findOneAndUpdate()
    // will return the document as it was
    // before it was updated.
     
    { new: true },
    function (err, res) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Result : ", res);
        }
    }); */
      /*
// trouver un seul doc avec  condition(age >= 5)
User.findOne({age: {$gte:5} }, function (err, res) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", res);
    }
});
*/
  
// trouver un doc avec  id=637e47659dd27d05a1a18b6f
/* var id = '637e47659dd27d05a1a18b6f';
User.findById(id, function (err, res) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", res);
    }
});
 */

// trouver le document avec l'id  id=637e47659dd27d05a1a18b70 et le supprimer
/* var id = '637e47659dd27d05a1a18b70';
User.findByIdAndDelete(id, function (err, res) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", res);
    }
}); */

  
User.remove({name : "Jhon"}, function (err, res) {
    if (err){
        console.log(err)
    }else{
        console.log("Result :", res) 
    }
});