
  function findMovieByGenre(movies, genre) {
    let index = 0;
  
    while (index < movies.length) {
      if (movies[index].genres.includes(genre)) {
        return movies[index];
      }
      index++;
    }
  
    return null; // Return null if the genre is not found in any movie
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title: "Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3", genres: ["Action", "Thriller"] }
  ];
  
  const genreToFind = "Romance";
  const movieWithGenre = findMovieByGenre(movies, genreToFind);
  console.log(movieWithGenre);
  // Output: { title: "Movie 2", genres: ["Drama", "Romance"] }

  

  