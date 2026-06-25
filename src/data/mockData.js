// src/data/mockData.js

// 1. Core Movie Catalogue with Direct Official Theatrical Poster URLs
export const movies = [
  {
    id: '1',
    title: 'Interstellar',
    rating: '8.7',
    genre: 'Sci-Fi',
    language: 'English',
    duration: '169 min',
    tags: 'Sci-Fi • English • 169 min',
    posterUrl: 'https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_2000x.jpg?v=1574284010'
  },
  {
    id: '2',
    title: 'Joker',
    rating: '8.4',
    genre: 'Thriller',
    language: 'English',
    duration: '122 min',
    tags: 'Thriller • English • 122 min',
    posterUrl: 'https://tse4.mm.bing.net/th/id/OIP.4SzxxHd6AhrJIjmE39oKZwHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '3',
    title: 'Dune: Part Two',
    rating: '8.5',
    genre: 'Sci-Fi',
    language: 'English',
    duration: '166 min',
    tags: 'Sci-Fi • English • 166 min',
    posterUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dgrxbla-08323b91-4ca1-43dc-8fec-ed42a3d55e1b.png/v1/fill/w_1280,h_1867,q_80,strp/dune_part_2_poster_fixed_by_andrewvm_dgrxbla-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2NyIsInBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGdyeGJsYS0wODMyM2I5MS00Y2ExLTQzZGMtOGZlYy1lZDQyYTNkNTVlMWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.57g7WxgV9SK-LtLr22hplRtUTNcBJiCKlLBiAtIW_80'
  },
  {
    id: '4',
    title: 'Oppenheimer',
    rating: '8.9',
    genre: 'Drama',
    language: 'English',
    duration: '180 min',
    tags: 'Drama • English • 180 min',
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e53620176533255.64c6e08a61680.jpg'
  },
  {
    id: '5',
    title: 'Spider-Man: No Way Home',
    rating: '8.2',
    genre: 'Action',
    language: 'English',
    duration: '148 min',
    tags: 'Action • English • 148 min',
    posterUrl: 'https://static1.tribute.ca/poster/660x980/spider-man-no-way-home-163783.jpg'
  },
  {
    id: '6',
    title: 'The Batman',
    rating: '7.8',
    genre: 'Action',
    language: 'English',
    duration: '176 min',
    tags: 'Action • English • 176 min',
    posterUrl: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article-content/QK8b7gIF0cz8Ku73DNzItMeW5hyEW5.jpg'
  },
  {
    id: '7',
    title: 'The Legend of Maula Jatt',
    rating: '8.6',
    genre: 'Action',
    language: 'Punjabi',
    duration: '153 min',
    tags: 'Action • Punjabi • 153 min',
    posterUrl: 'https://www.kinot.fi/app/uploads/2022/10/FINAL-MAULA_NOORI_DUO_VERTICAL-MovieGoers-576x800.jpg'
  },
  {
    id: '8',
    title: 'Sherdil',
    rating: '7.2',
    genre: 'Drama',
    language: 'Urdu',
    duration: '135 min',
    tags: 'Drama • Urdu • 135 min',
    posterUrl: 'https://images.justwatch.com/poster/320285459/s718/sherdil-2022.jpg'
  }
];

// 2. Interactive Seating Layout Generator Engine
export const generateSeats = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;
  const seatList = [];

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      seatList.push({
        id: `${row}${i}`,
        row: row,
        number: i,
        isBooked: Math.random() < 0.2,
        price: row === 'E' || row === 'F' ? 800 : 650
      });
    }
  });

  return seatList;
};

// 3. Centralized Electronic Booking Passes Data
export const bookings = [
  { 
    id: '1', 
    title: 'Interstellar', 
    date: 'Tue, 14 Jul 2026', 
    time: '13:00', 
    screen: 'Screen 1', 
    seats: 'B3, B4', 
    total: 'PKR 1,300', 
    ref: 'PK-7F3A2C', 
    status: 'Confirmed', 
    posterUrl: 'https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_2000x.jpg?v=1574284010' 
  },
  { 
    id: '2', 
    title: 'Oppenheimer', 
    date: 'Wed, 15 Jul 2026', 
    time: '20:30', 
    screen: 'Screen 2', 
    seats: 'D5', 
    total: 'PKR 750', 
    ref: 'PK-9B1E4F', 
    status: 'Confirmed', 
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e53620176533255.64c6e08a61680.jpg' 
  }
];