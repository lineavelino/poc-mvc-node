import mongoose from 'mongoose';

try {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.htfl5.mongodb.net/?retryWrites=true&w=majority`)
} catch (error) {
    console.log(error)
}

export const db = mongoose.connection