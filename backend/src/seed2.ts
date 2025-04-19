import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Mahasiswa from './models/mahasiswaModels';

dotenv.config();

const seedMahasiswa = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");

    // Delete existing data (optional)
    await Mahasiswa.deleteMany({});
    console.log("Cleared existing mahasiswa data");

    // NIM data to insert
    const nimList = [
      { NIM: "24/000000/PA/00000" },
      { NIM: "24/111111/PA/11111" },
      { NIM: "24/222222/PA/22222" },
      { NIM: "24/333333/PA/33333" },
      { NIM: "24/444444/PA/44444" },
      { NIM: "24/555555/PA/55555" },
      { NIM: "24/666666/PA/66666" },
      { NIM: "24/777777/PA/77777" },
      { NIM: "24/888888/PA/88888" },
      { NIM: "24/999999/PA/99999" }
    ];

    // Insert the NIM data
    const result = await Mahasiswa.insertMany(nimList);
    console.log(`${result.length} mahasiswa records inserted successfully`);

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding mahasiswa data:", error);
    mongoose.connection.close();
  }
};

// Run the seed function
seedMahasiswa();