export const movies = [
    {
        id: '1',
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. Faced with an impossible choice, they must decide what is worth fighting for.',
        genre: 'Sci-Fi',
        language: 'English',
        duration: 169,
        rating: 8.7,
        poster: 'https://i.pinimg.com/originals/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg',
        pricePerSeat: 650,
        showtimes: [
            { id: 's1', date: '2026-07-15', time: '13:00', screen: 'Screen 1' },
            { id: 's2', date: '2026-07-15', time: '17:30', screen: 'Screen 2' },
            { id: 's3', date: '2026-07-16', time: '20:00', screen: 'Screen 1' },
        ],
    },
    {
        id: '2',
        title: 'Joker',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral of revolution and bloody crime. A story of one man\'s descent into madness.',
        genre: 'Thriller',
        language: 'English',
        duration: 122,
        rating: 8.4,
        poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        pricePerSeat: 600,
        showtimes: [
            { id: 's4', date: '2026-07-15', time: '15:00', screen: 'Screen 3' },
            { id: 's5', date: '2026-07-16', time: '18:00', screen: 'Screen 2' },
        ],
    },
    {
        id: '3',
        title: 'Dune: Part Two',
        description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
        genre: 'Sci-Fi',
        language: 'English',
        duration: 166,
        rating: 8.5,
        poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
        pricePerSeat: 700,
        showtimes: [
            { id: 's6', date: '2026-07-15', time: '12:00', screen: 'Screen 2' },
            { id: 's7', date: '2026-07-16', time: '16:30', screen: 'Screen 1' },
            { id: 's8', date: '2026-07-17', time: '19:00', screen: 'Screen 3' },
        ],
    },
    {
        id: '4',
        title: 'Oppenheimer',
        description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
        genre: 'Drama',
        language: 'English',
        duration: 180,
        rating: 8.9,
        poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        pricePerSeat: 750,
        showtimes: [
            { id: 's9', date: '2026-07-15', time: '14:00', screen: 'Screen 1' },
            { id: 's10', date: '2026-07-16', time: '20:30', screen: 'Screen 2' },
        ],
    },
    {
        id: '5',
        title: 'Spider-Man: No Way Home',
        description: 'With Spider-Man\'s identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
        genre: 'Action',
        language: 'English',
        duration: 148,
        rating: 8.2,
        poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        pricePerSeat: 600,
        showtimes: [
            { id: 's11', date: '2026-07-15', time: '11:00', screen: 'Screen 3' },
            { id: 's12', date: '2026-07-16', time: '15:00', screen: 'Screen 1' },
            { id: 's13', date: '2026-07-17', time: '21:00', screen: 'Screen 2' },
        ],
    },
    {
        id: '6',
        title: 'The Batman',
        description: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a sadistic killer known as the Riddler.',
        genre: 'Action',
        language: 'English',
        duration: 176,
        rating: 7.8,
        poster: 'https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
        pricePerSeat: 600,
        showtimes: [
            { id: 's14', date: '2026-07-16', time: '13:30', screen: 'Screen 3' },
            { id: 's15', date: '2026-07-17', time: '17:00', screen: 'Screen 1' },
        ],
    },
    {
        id: '7',
        title: 'The Legend of Maula Jatt',
        description: 'A legendary rivalry scales unmatched heights as fierce warrior Maula Jatt takes on the ruthless leader of a brutal clan, Noori Natt, in an ultimate battle for honor.',
        genre: 'Action',
        language: 'Punjabi',
        duration: 153,
        rating: 8.6,
        poster: 'https://th.bing.com/th/id/R.8b36d3f547e85ada75c292ecc0a97c53?rik=wKKaR4FQMc5LEQ&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fpakistan%2f2022%2fposters%2flegend_of_maula_jatt_xlg.jpg&ehk=ZVBHgu3lseIQpucxfmzmy2arsZxUA%2f1v5%2b6cfwnxfAQ%3d&risl=&pid=ImgRaw&r=0',
        pricePerSeat: 800,
        showtimes: [
            { id: 's16', date: '2026-07-15', time: '18:30', screen: 'Screen 1' },
            { id: 's17', date: '2026-07-16', time: '21:30', screen: 'Screen 3' },
        ],
    },
    {
        id: '8',
        title: 'Sherdil',
        description: 'An emotional journey of a young man following his dream to join the Air Force, battling domestic hurdles and high-stakes combat situations to defend his homeland.',
        genre: 'Drama',
        language: 'Urdu',
        duration: 135,
        rating: 7.2,
        poster: 'https://images.justwatch.com/poster/320285459/s718/sherdil-2022.jpg',
        pricePerSeat: 500,
        showtimes: [
            { id: 's18', date: '2026-07-15', time: '14:30', screen: 'Screen 2' },
            { id: 's19', date: '2026-07-17', time: '16:00', screen: 'Screen 1' },
        ],
    },
    {
        id: '10',
        title: 'The Conjuring',
        description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
        genre: 'Horror',
        language: 'English',
        duration: 112,
        rating: 7.5,
        poster: 'https://c8.alamy.com/comp/2JHM32N/movie-poster-the-conjuring-2013-2JHM32N.jpg',
        pricePerSeat: 600,
        showtimes: [
            { id: 's22', date: '2026-07-16', time: '23:00', screen: 'Screen 2' },
            { id: 's23', date: '2026-07-17', time: '23:30', screen: 'Screen 3' },
        ],
    }
];

export const genres = ['All', 'Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Animation'];
export const languages = ['All', 'English', 'Urdu', 'Hindi', 'Punjabi'];

// generates a 5x8 seat grid: rows A-E, columns 1-8
export const generateSeats = (bookedSeats = []) => {
    const rows = ['A', 'B', 'C', 'D', 'E'];
    return rows.map(row =>
        Array.from({ length: 8 }, (_, i) => {
            const id = `${row}${i + 1}`;
            return {
                id,
                row,
                number: i + 1,
                status: bookedSeats.includes(id) ? 'booked' : 'available',
            };
        })
    );
};

export const mockBookings = [
    {
        id: 'b1',
        movieId: '1',
        movieTitle: 'Interstellar',
        moviePoster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIe.jpg',
        showtime: { date: '2026-07-15', time: '13:00', screen: 'Screen 1' },
        seats: ['B3', 'B4'],
        totalPrice: 1300,
        reference: 'PK-7F3A2C',
        status: 'confirmed',
        bookedAt: '2026-07-14T18:30:00.000Z',
    },
    {
        id: 'b2',
        movieId: '4',
        movieTitle: 'Oppenheimer',
        moviePoster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        showtime: { date: '2026-07-16', time: '20:30', screen: 'Screen 2' },
        seats: ['D5'],
        totalPrice: 750,
        reference: 'PK-9B1E4F',
        status: 'confirmed',
        bookedAt: '2026-07-14T20:00:00.000Z',
    },
];