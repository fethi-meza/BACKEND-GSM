const fs = require('fs')


//get all users
const getUsers =(res, req)=>{
    const usrse = JSON.parse(fs.readFileSync('./DB.json','utf-8')).Users
}

//craet new user
const createUsers =(req, res) => {
    const Users = JSON.parse(fs.readFileSync('./DB.json', 'utf-8')).Users;

    let user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        date: req.body.date
    }

    Users.push(user);

    fs.writeFileSync('../DB.json', JSON.stringify({ Users: Users }));

    res.send('User added successfully'); // Send a response to the client
}


//delet user 

const deletUser =(res,req)=>{
    const users = JSON.parse(fs.readFileSync('../DB.json', 'utf-8')).Users;
const UserIndex = users.findIndex((u)=>u.id ===parseInt(req.params.id))

if (UserIndex ===  -1) return res.status(404).send("User  not find")

Users.splice(userIndex,1);
fs.writeFileSync('../DB.json', JSON.stringify({ users }));
}




module.exports={getUsers ,createUsers , deletUser}
