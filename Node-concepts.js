/*

Note:- NodeJs mai mongodb k sath kaam krne k liye hume mongoose package ka use krna padta hai and ek connection banana padta hai express js k sath bina connection k hum mongodb k sath kaam nahi kr skte. and connection establish krne k baad hum mongodb ki queries ko run krskte hai

// -----------------Steps to work with Mongodb in NodeJs -------------------- //

1. Install mongoose package : npm install mongoose
2). const mongoose = require('mongoose') // import mongoose package
3). mongoose.connect('mongodb://127.0.0.1:27017/your_database_name') // connect mongodb with express js here 127.0.0.1:27017 is our port number and at the end we have to write our database name, agar database exists krta hai to yhh hume usse connect krdeta hai and agar nahi to yhh ek naya database create kr deta hai
4). const test = mongoose.model('User', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})) // humare database k andar hume kis collection ka use krna hai use hum model method ki help se define krte hai here in this case User is our collection name and we have defined the schema of our collection

// -------------------- Mongoose supported Data types --------------------- //

1. String
2. Number
3. Date
4. Buffer
5. Boolean
6. Mixed
7. ObjectId
8. Array
9. Decimal128
10. Map
11. UUID
12. Double
13. Int32

// ------------------------ Mongoose Commands ----------------------------- // 

1). For Create Method :-

InsertOne() :- yeh method ek document insert krne k liye use hota hai
InsertMany() :- yeh method multiple documents insert krne k liye use hota hai

Note :- create() => is an extra command which is given by the mongoose package, yeh method insertOne() and insertMany() dono ko support krta hai

2). For Read Method :-

Find() :- yeh method ek ya multiple documents ko read krne k liye use hota hai
FindOne() :- yeh method ek document ko read krne k liye use hota hai

// ---------- MONGOOSE INBUILT COMMANDS -------------
FindById() :- yeh method ek document ko id k base pr read krne k liye use hota hai

3). For Update Method :-

UpdateOne() :- yeh method ek document ko update krne k liye use hota hai
UpdateMany() :- yeh method multiple documents ko update krne k liye use hota hai
findByIdAndUpdate() :- yeh method ek document ko id k base pr update krne k liye use hota hai (extra command)

4). For Delete Method :-

DeleteOne() :- yeh method ek document ko delete krne k liye use hota hai
DeleteMany() :- yeh method multiple documents ko delete krne k liye use hota hai
findByIdAndDelete() :- yeh method ek document ko id k base pr delete krne k liye use hota hai (extra command)

// ------------------ Async await method in Javascript ------------------- //

1). async => means asynchronously yhh keyword hume function k samne likhna hota hai jisse function async function ban jata hai that means yhh function asyncronously run hoga background mai
2). await => jab bhi hume database se data fetch krna hota hai to hume await keyword ka use krna hota hai jisse humara code wait krta hai jab tak data fetch nahi ho jata

// ------------------ Benifits of MVC Pattern ------------------- //

1). Organized Code
2). Independent Blocks ie business logic, database logic, and view logic
3). Easy to maintain
4). Easy to understand
5). Reduce the complexity of web application
6). Easy to modify
7). Code reusability
8). Improved collaboration
9). Platform independent

// ------------------ .Env Package File --------------------- //

Note:- Isme hum aise data ko rakhte hai jisme hume security ki zarurat hoti hai and jise hum baar-baar change nahi krte hai jaise ki database ka password, username, and secret key etc. and yeh file humare project mai nahi hoti hai isliye hume yeh file create krni padti hai and is file ko hum git ignore mai daal dete hai taaki yeh file kisi aur k sath share na ho sake

1). A .env(environment) file is used to store environment variables like : 
    a). Database connection string
    b). API keys
    c). Port numbers
    d). Sensitive credentials (without hardcoding them in the code)

    Benifits :-
    a). Security - Keep credentials hidden from your codebase
    b). Portability - Easily switch between different environments (development, testing, production)
    c). Better Management - Store configuration in a single file


// ------------------- Express Js Pagination ------------------- //

Steps to work with pagination :-

1). npm install mongoose-paginate-v2 // here we use build in package for pagination
2). import mongoosePaginate from 'mongoose-paginate-v2'

Note- Schema create krte time hi hum humare package ka use karenge jisse hum ise baad mai use kr ske controller mai
3). const userSchema = new mongoose.Schema({
   name:String,
   email:String
});

userSchema.plugin(mongoose-paginate-v2); // plugin method ki help se hum kisi bhi package ka use krskte hai
const user = mongoose.model('User', userSchema);

export default user;

4). User.paginate({}, {page:1, limit:3}); // here paginate method is same work as find method just like get and paginate method in laravel. here agar hum first param mai kuch nahi likhte hai to iska mtlb hai ki all data ko fetch krke leke aana hai and agar hume specific conditions lagani hai to vo bhi laga skte hai first param mai like as aggregate methods ka use krna hoto

// --------------------- WHY WE USE MIDDLEWARE IN EXPRESS JS --------------------- //

Note:- Middleware is a function which is used to execute the code before the request reaches the final route handler. Middleware can be used for various purposes like as :-

1). Authenticated user hi page ko access kr paye
2). User Authenticated bhi ho or Administrator bhi ho
3). Valid Age
4). Save log Information
5). If our website is in Maintainance mode then we can show redirect user a friendful mesaage that our website is in maintainance mode
6). Error Handling

 => Steps to work with middleware in express js :- Middleware ko hume route se phle run krna hota hai jisse humari request ko check kiya ja sake

// ----------------- Syntax of the Middleware function ----------------- //

app.use((req, res, next) => { // here app respresent express js. Middleware function ko hum app.use() method ki help se use karte hai
    // Middleware code here
    next(); // next() method ko call karna hota hai jisse humara request final route handler tak pahuch sake. Next method k andar hum koi information bhi pass krskte hai
});

app.get('/about', (req, res) => {})

app.get('/gallery', (req, res) => {})

// --------------------- Types of Middleware in express js --------------------- //

1). Application Level Middleware :- Yhh Middleware puri application pr implement hote hai
2). Router Level Middleware :- Agar specific route pr middleware ko implement karna hai to hum router level middleware ka use karte hai
3). Error Handling Middleware :- Yhh middleware error handling k liye use hote hai, agar multiple routes banate waqt koi error aati hai to in that case this middleware is used
4). Built-in Middleware :- Yhh middleware express js k sath by default hote hai jaise ki express.json(), express.urlencoded(), express.static() etc.
5). Third-party Middleware :- Yhh middleware third-party packages hote hai jo humare project mai use hote hai jaise ki cors, helmet, morgan etc.
6). Custom Middleware :- Yhh middleware hum khud create karte hai jo humare project ki zarurat hoti hai
*/