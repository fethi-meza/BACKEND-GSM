const fs = require('fs')


//get all prodects 
const getProdects =(res, req)=>{
    const usrse = JSON.parse(fs.readFileSync('../DB.json','utf-8')).prodects
    res.json(usrse)
}

//create new prodects 


//craet new user
const createProdect =(req, res) => {
    const Users = JSON.parse(fs.readFileSync('./DB.json', 'utf-8')).prodects;

    let prodect = {
        id: Date.now(),
        name: req.body.name,
        date: req.body.date
    }

    Users.push(prodect);

    fs.writeFileSync('../DB.json', JSON.stringify({ prodects: prodect }));

    res.send('User added successfully'); // Send a response to the client
}

module.exports={getProdects ,createProdect}
