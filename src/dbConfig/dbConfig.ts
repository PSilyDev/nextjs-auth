import mongoose, { mongo } from 'mongoose';

export async function connect() {
    try{
        mongoose.connect(process.env.DB_URL!);
        const connection = mongoose.connection;

        // once the connection is done check if it is connected
        connection.on('connected', () => {
            console.log('mongoDB connected successfully!');
        })

        // else
        connection.on('error', (err) => {
            console.log('mongoDB connection error - ', err);
            process.exit();
        })
    }
    catch(err){
        console.log('something went wrong');
        console.log(err);
    }
}