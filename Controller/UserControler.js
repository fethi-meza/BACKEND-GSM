const fs = require('fs');

//get all users
const getUsers = (req, res) => {
    // Get All user from json server
    fs.readFile('../DB.json', 'utf8', (err, data) => {
        const existingData = JSON.parse(data);

        return res.status(200).json(existingData.Users);
    });
};

//craet new user
const createUsers = (req, res) => {
    fs.readFile('../DB.json', 'utf8', (err, data) => {
        const existingData = JSON.parse(data);

        existingData.Users.push({ ...req.body, id: Date.now() });

        console.log(existingData.Users);

        fs.writeFile('../DB.json', JSON.stringify(existingData), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing DB.json');
            }

            res.status(200).json({ message: 'Data added successfully' });
        });
    });
};

// delet user  -not working- ? Now Its Wokring

const deletUser = (req, res) => {
    const userIdToDelete = parseInt(req.params.id);

    // Read the existing JSON file
    fs.readFile('../DB.json', 'utf8', (err, data) => {
        // Parse the existing JSON data
        const existingData = JSON.parse(data);

        // Find the index of the user with the specified ID
        const userIndex = existingData.Users.findIndex(
            (user) => user.id === userIdToDelete
        );

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove the user from the array
        existingData.Users.splice(userIndex, 1);

        // Write the updated data back to the JSON file
        fs.writeFile('../DB.json', JSON.stringify(existingData), (err) => {
            res.status(200).json({ message: 'User deleted successfully' });
        });
    });
};

module.exports = { getUsers, createUsers, deletUser };
