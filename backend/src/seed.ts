import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Divisi from './models/divisiModels'; // Adjust the path to your Divisi model
import Wawancara from './models/wawancaraModels';
console.log(Divisi);
dotenv.config();
const seedDivisi = async () => {
  try {
    // Connect to MongoDB (replace the URI with your actual connection string)
    await mongoose.connect(`${process.env.MONGODB_URI}`, {serverSelectionTimeoutMS: 20000});
    console.log("connected");

    // Array of division data to be inserted
    const divisiData = [
      {
        judul: 'Backend',
        judulPanjang: 'Backend Development',
        logoDivisi: 'backend_logo.png',
        slot: 10,
        slug: 'backend',
        proker: [
          {
            url: 'https://example.com/backend_proker',
            filename: 'backend_proker.pdf',
            deskripsiProker: 'Backend division project description',
          },
        ],
        deskripsi: 'Responsible for server-side logic and database management.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Complete a backend task.',
          toolsPenugasan: 'Node.js, Express',
          linkPenugasan: 'https://example.com/backend_task',
        },
      },
      {
        judul: 'Frontend',
        judulPanjang: 'Frontend Development',
        logoDivisi: 'frontend_logo.png',
        slot: 8,
        slug: 'frontend',
        proker: [
          {
            url: 'https://example.com/frontend_proker',
            filename: 'frontend_proker.pdf',
            deskripsiProker: 'Frontend division project description',
          },
        ],
        deskripsi: 'Focuses on the visual elements and user experience.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Build a frontend interface.',
          toolsPenugasan: 'React, Vue.js',
          linkPenugasan: 'https://example.com/frontend_task',
        },
      },
      {
        judul: 'UI/UX',
        judulPanjang: 'UI/UX Design',
        logoDivisi: 'uiux_logo.png',
        slot: 5,
        slug: 'uiux',
        proker: [
          {
            url: 'https://example.com/uiux_proker',
            filename: 'uiux_proker.pdf',
            deskripsiProker: 'UI/UX division project description',
          },
        ],
        deskripsi: 'Designs user interfaces and improves user experience.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Design a user-friendly interface.',
          toolsPenugasan: 'Figma, Adobe XD',
          linkPenugasan: 'https://example.com/uiux_task',
        },
      },
      {
        judul: 'Data Science & AI',
        judulPanjang: 'Data Science and Artificial Intelligence',
        logoDivisi: 'dsai_logo.png',
        slot: 6,
        slug: 'dsai',
        proker: [
          {
            url: 'https://example.com/dsai_proker',
            filename: 'dsai_proker.pdf',
            deskripsiProker: 'Data Science division project description',
          },
        ],
        deskripsi: 'Analyzes data and builds AI models.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Create a data analysis project.',
          toolsPenugasan: 'Python, TensorFlow',
          linkPenugasan: 'https://example.com/dsai_task',
        },
      },
      {
        judul: 'Competitive Programming',
        judulPanjang: 'Competitive Programming',
        logoDivisi: 'cp_logo.png',
        slot: 7,
        slug: 'cp',
        proker: [
          {
            url: 'https://example.com/cp_proker',
            filename: 'cp_proker.pdf',
            deskripsiProker: 'Competitive Programming division project description',
          },
        ],
        deskripsi: 'Solves algorithmic challenges and competes in programming competitions.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Solve a programming challenge.',
          toolsPenugasan: 'C++, Java',
          linkPenugasan: 'https://example.com/cp_task',
        },
      },
      {
        judul: 'Mobile Apps',
        judulPanjang: 'Mobile Application Development',
        logoDivisi: 'mobapps_logo.png',
        slot: 6,
        slug: 'mobapps',
        proker: [
          {
            url: 'https://example.com/mobapps_proker',
            filename: 'mobapps_proker.pdf',
            deskripsiProker: 'Mobile Apps division project description',
          },
        ],
        deskripsi: 'Develops mobile applications for Android and iOS.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Create a mobile app.',
          toolsPenugasan: 'Flutter, React Native',
          linkPenugasan: 'https://example.com/mobapps_task',
        },
      },
      {
        judul: 'Game Development',
        judulPanjang: 'Game Development',
        logoDivisi: 'gamedev_logo.png',
        slot: 4,
        slug: 'gamedev',
        proker: [
          {
            url: 'https://example.com/gamedev_proker',
            filename: 'gamedev_proker.pdf',
            deskripsiProker: 'Game Development division project description',
          },
        ],
        deskripsi: 'Develops games for multiple platforms.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Create a game prototype.',
          toolsPenugasan: 'Unity, Unreal Engine',
          linkPenugasan: 'https://example.com/gamedev_task',
        },
      },
      {
        judul: 'Cysec',
        judulPanjang: 'Cyber Security',
        logoDivisi: 'gamedev_logo.png',
        slot: 4,
        slug: 'cysec',
        proker: [
          {
            url: 'https://example.com/gamedevhima_proker',
            filename: 'gamedevhima_proker.pdf',
            deskripsiProker: 'Game Development division project description',
          },
        ],
        deskripsi: 'Develops games for multiple platforms.',
        dipilihOleh: [],
        himakom: false,
        penugasan: {
          deskripsiPenugasan: 'Create a game prototype.',
          toolsPenugasan: 'Unity, Unreal Engine',
          linkPenugasan: 'https://example.com/gamedevhima_task',
        },
      },
      {
        judul: 'Treasurer',
        judulPanjang: 'Basically Bendahara',
        logoDivisi: 'backendhima_logo.png',
        slot: 10,
        slug: 'treasurer',
        proker: [
          {
            url: 'https://example.com/backendhima_proker',
            filename: 'backendhima_proker.pdf',
            deskripsiProker: 'Backendhima division project description',
          },
        ],
        deskripsi: 'Responsible for server-side logic and database management.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Complete a backendhima task.',
          toolsPenugasan: 'Node.js, Express',
          linkPenugasan: 'https://example.com/backendhima_task',
        },
      },
      {
        judul: 'Secretary',
        judulPanjang: 'Penulis',
        logoDivisi: 'frontendhima_logo.png',
        slot: 8,
        slug: 'secretary',
        proker: [
          {
            url: 'https://example.com/frontendhima_proker',
            filename: 'frontendhima_proker.pdf',
            deskripsiProker: 'Frontendhima division project description',
          },
        ],
        deskripsi: 'Focuses on the visual elements and user experience.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Build a frontendhima interface.',
          toolsPenugasan: 'React, Vue.js',
          linkPenugasan: 'https://example.com/frontendhima_task',
        },
      },
      {
        judul: 'HR',
        judulPanjang: 'Human Resources PSDM COK',
        logoDivisi: 'uiux_logo.png',
        slot: 5,
        slug: 'hr',
        proker: [
          {
            url: 'https://example.com/uiuxhima_proker',
            filename: 'uiuxhima_proker.pdf',
            deskripsiProker: 'UI/UX division project description',
          },
        ],
        deskripsi: 'Designs user interfaces and improves user experience.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Design a user-friendly interface.',
          toolsPenugasan: 'Figma, Adobe XD',
          linkPenugasan: 'https://example.com/uiuxhima_task',
        },
      },
      {
        judul: 'IPC',
        judulPanjang: 'Internal Control',
        logoDivisi: 'dsaihima_logo.png',
        slot: 6,
        slug: 'ipc',
        proker: [
          {
            url: 'https://example.com/dsaihima_proker',
            filename: 'dsaihima_proker.pdf',
            deskripsiProker: 'Data Science division project description',
          },
        ],
        deskripsi: 'Analyzes data and builds AI models.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Create a data analysis project.',
          toolsPenugasan: 'Python, TensorFlow',
          linkPenugasan: 'https://example.com/dsaihima_task',
        },
      },
      {
        judul: 'S&F',
        judulPanjang: 'Sponsorship & Fundraising',
        logoDivisi: 'cp_logo.png',
        slot: 7,
        slug: 'snf',
        proker: [
          {
            url: 'https://example.com/cphima_proker',
            filename: 'cphima_proker.pdf',
            deskripsiProker: 'Competitive Programming division project description',
          },
        ],
        deskripsi: 'Solves algorithmic challenges and competes in programming competitions.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Solve a programming challenge.',
          toolsPenugasan: 'C++, Java',
          linkPenugasan: 'https://example.com/cphima_task',
        },
      },
      {
        judul: 'Skilldev',
        judulPanjang: 'Skill Development',
        logoDivisi: 'mobapps_logo.png',
        slot: 6,
        slug: 'skilldev',
        proker: [
          {
            url: 'https://example.com/mobappshima_proker',
            filename: 'mobappshima_proker.pdf',
            deskripsiProker: 'Mobile Apps division project description',
          },
        ],
        deskripsi: 'Develops mobile applications for Android and iOS.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Create a mobile app.',
          toolsPenugasan: 'Flutter, React Native',
          linkPenugasan: 'https://example.com/mobappshima_task',
        },
      },
      {
        judul: 'Media',
        judulPanjang: 'PDD COK DDD',
        logoDivisi: 'gamedev_logo.png',
        slot: 4,
        slug: 'media',
        proker: [
          {
            url: 'https://example.com/gamedevhima_proker',
            filename: 'gamedevhima_proker.pdf',
            deskripsiProker: 'Game Development division project description',
          },
        ],
        deskripsi: 'Develops games for multiple platforms.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Create a game prototype.',
          toolsPenugasan: 'Unity, Unreal Engine',
          linkPenugasan: 'https://example.com/gamedevhima_task',
        },
      },
      {
        judul: 'PR',
        judulPanjang: 'Public Relations',
        logoDivisi: 'gamedev_logo.png',
        slot: 4,
        slug: 'pr',
        proker: [
          {
            url: 'https://example.com/gamedevhima_proker',
            filename: 'gamedevhima_proker.pdf',
            deskripsiProker: 'Game Development division project description',
          },
        ],
        deskripsi: 'Develops games for multiple platforms.',
        dipilihOleh: [],
        himakom: true,
        penugasan: {
          deskripsiPenugasan: 'Create a game prototype.',
          toolsPenugasan: 'Unity, Unreal Engine',
          linkPenugasan: 'https://example.com/gamedevhima_task',
        },
      },
    ];

const wawancaraData = [];
const divisiSlotsHima = {
  treasurer: { sisaSlot: 1, lokasi: 'IUP Room' },
  hr: { sisaSlot: 1, lokasi: 'IUP Room' },
  ipc: { sisaSlot: 1, lokasi: 'IUP Room' },
  pr: { sisaSlot: 1, lokasi: 'IUP Room' },
  skilldev: { sisaSlot: 1, lokasi: 'IUP Room' },
  snf: { sisaSlot: 1, lokasi: 'IUP Room' },
  secretary: { sisaSlot: 1, lokasi: 'IUP Room' },
  media: { sisaSlot: 1, lokasi: 'IUP Room' },
};console.log(divisiSlotsHima);

const divisiSlotsOti = {
  frontend: { sisaSlot: 1, lokasi: 'IUP Room' },
  backend: { sisaSlot: 1, lokasi: 'IUP Room' },
  cysec: { sisaSlot: 1, lokasi: 'IUP Room' },
  uiux: { sisaSlot: 1, lokasi: 'IUP Room' },
  cp: { sisaSlot: 1, lokasi: 'IUP Room' },
  mobapss: { sisaSlot: 1, lokasi: 'IUP Room' },
  gamedev: { sisaSlot: 1, lokasi: 'IUP Room' },
  dsai: { sisaSlot: 1, lokasi: 'IUP Room' },
}; console.log(divisiSlotsOti);
for (let day = 18; day <= 23; day++) {
  const sesi = [];
  const startHour = 18;
  const startMinute = 20;
  const intervalMinutes = 35;

  for (let h = startHour, m = startMinute; h < 20 || (h === 20 && m <= 30); ) {
    sesi.push({
      jam: new Date(2024, 9, day, h, m),
      dipilihOleh: [],
      slotDivisi: JSON.parse(JSON.stringify(divisiSlotsOti)),
    });

    m += intervalMinutes;
    if (m >= 60) {
      h += 1;
      m -= 60;
    }
  }

  wawancaraData.push({
    tanggal: new Date(2024, 9, day),
    himakom: false,
    sesi,
  });
}

console.log(wawancaraData);
    // Insert the data into the Divisi collection
  console.log(divisiData);
    for(const wawancara of wawancaraData){
      const wawancaraBaru = new Wawancara(wawancara);
      await wawancaraBaru.save();
    }
    console.log('Data successfully seeded!');

    await Divisi.deleteMany({}); // Hapus data divisi yang sudah ada (opsional)
  for(const divisi of divisiData){
    const divisiModel = new Divisi(divisi);
    await divisiModel.save();
  console.log(`Added division: ${divisi.judul}`);
  }
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding data:', err);
  }
};

// Run the seed function
seedDivisi();
