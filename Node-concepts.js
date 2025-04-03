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
*/