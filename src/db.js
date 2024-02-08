import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1/taskmanagerdb');
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
};

// import sql from 'mssql';

// export const connectDB = async () => {
//     const config = {
//         user: 'your_username',
//         password: 'your_password',
//         server: 'localhost',
//         database: 'your_database',
//     };

//     try {
//         await sql.connect(config);
//         console.log(">>> DB is connected");
//     } catch (error) {
//         console.error('Error connecting to the database', error);
//     }
// };