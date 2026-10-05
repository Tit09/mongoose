const mongoose = require('mongoose');
const User = require('./user');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');

        console.log('Connexion réussie');

        const user = await User.create({
            nom: 'Adja',
            email: 'adja@gmail.com',
            age: 25
        });

        console.log('Utilisateur créé :');
        console.log(user);

        const users = await User.find();

        console.log('Liste des utilisateurs :');
        console.log(users);

    } catch (error) {
        console.log('Erreur :', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('Connexion MongoDB fermée');
    }
}

main();