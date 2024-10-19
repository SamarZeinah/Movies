

// import React from 'react';
// import styles from './MovieDetailsItem.module.css';
// import { Carousel } from 'react-bootstrap';

// const { firstcontent, poster, info, Castsinfo, castsection, trendimage, videocontainer, imagetitle, youtubeIcon, secondcontent, Thirdcontent ,Background} = styles;

// interface MovieDetailsProps {
//   Details: {
//     id: number;
//     poster_path: string;
//     backdrop_path: string;
//     title: string;
//     genres: { id: number; name: string }[];
//     overview: string;
//   } | null; 
//   Credits: {
//     cast: { id: number; name: string; character: string; profile_path: string }[];
//   };
//   Videos: {
//     id: string;
//     key: string;
//     name: string;
//     site: string;
//     type: string;
//   }[];
//   SimilarMovie: {
//     id: number;
//     title: string;
//     backdrop_path: string;
//     vote_average: number;
//   }[];
// }

// const MovieDetailsItem = ({ Details, Credits, Videos, SimilarMovie }: MovieDetailsProps) => {
//   if (!Details) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//      {/* <div  >
//   <img 
//     src={`https://image.tmdb.org/t/p/w500${Details.backdrop_path}`} 
//     alt="Movie backdrop" 
//     className="backdrop-image" 
//   />
//       </div> */}
//       <div className={firstcontent}>
//         <div className={poster}>
//           <img src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt="Movie Poster" />
//         </div>

//         <div className={info}>
//           <h1>{Details.title}</h1>
//               <h5>
//         {Details.genres.map(genre => (
//             <span key={genre.id} className="genre-circle">
//                 {genre.name}
//             </span>
//         ))}
//             </h5>
//           <p>{Details.overview}</p>

//           <div className={castsection}>
//   <h3>Casts</h3>
//   <div className={Castsinfo}>
//     {Credits.cast.length > 0 ? (
//       Credits.cast.slice(0, 6).map((castMember) => (
//         <div key={castMember.id} className="cast-member">
//           <img 
//             src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`} 
//             alt={castMember.name} 
//             className="cast-image" 
//           />
//           <p className="cast-name">{castMember.name}</p>
//         </div>
//       ))
//     ) : (
//       <p>No cast information available.</p> // نص يظهر في حال عدم وجود كاست
//     )}
     
//   </div>
// </div>


//         </div>
//       </div>

//       <div className={secondcontent}>
//         {Videos.slice(0, 2).map((video) => (
//           <div key={video.id} style={{ marginBottom: '80px' }}>
//              <h3>{video.name}</h3>
//             <iframe 
//               width="100%" 
//               height="700" 
//               src={`https://www.youtube.com/embed/${video.key}`} 
//               title={video.name} 
//               frameBorder="0" 
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//               allowFullScreen 
//             ></iframe>
//           </div>
//         ))}
//       </div>
//       <Carousel indicators={false}>
//         {SimilarMovie.map((movie)=>(
//           <Carousel.Item key={movie.id}>
//           <div className={Thirdcontent}>
//             <p>Similar Movies</p>
//             <div className="d-flex justify-content-between">
//               {SimilarMovie.map((movie) => (
//                 movie.backdrop_path && (
//                   <div key={movie.id} className={videocontainer}>
//                     <img className={trendimage} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
//                     <h3 className={imagetitle}>{movie.title}</h3>
//                     <button>
//           <img
//             className={youtubeIcon}
//             src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" fill="rgba(255, 0, 28, 1)"/></svg>`}
//             alt="YouTube Icon"
//           />
//         </button>
//                   </div>
//                 )
//               ))}
//             </div>
//           </div>
//         </Carousel.Item>
//         ))}
  
// </Carousel>

//     </div>
//   );
// }

// export default MovieDetailsItem;


// // import React from 'react';
// // import styles from './MovieDetailsItem.module.css';
// // import { Carousel } from 'react-bootstrap';

// // const { firstcontent, poster, info, Castsinfo, castsection, trendimage, videocontainer, imagetitle, youtubeIcon, secondcontent, Thirdcontent, Background } = styles;

// // interface MovieDetailsProps {
// //   Details: {
// //     id: number;
// //     poster_path: string;
// //     backdrop_path: string;
// //     title: string;
// //     genres: { id: number; name: string }[];
// //     overview: string;
// //   } | null; 
// //   Credits: {
// //     cast: { id: number; name: string; character: string; profile_path: string }[];
// //   };
// //   Videos: {
// //     id: string;
// //     key: string;
// //     name: string;
// //     site: string;
// //     type: string;
// //   }[];
// //   SimilarMovie: {
// //     id: number;
// //     title: string;
// //     backdrop_path: string;
// //     vote_average: number;
// //   }[];
// // }

// // const MovieDetailsItem = ({ Details, Credits, Videos, SimilarMovie }: MovieDetailsProps) => {
// //   if (!Details) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className={Background}>
// //       <img 
// //         src={`https://image.tmdb.org/t/p/w500${Details.backdrop_path}`} 
// //         alt="Movie backdrop" 
// //         className="backdrop-image" 
// //       />
// //       <div className="overlay">
// //         <div className={firstcontent}>
// //           <div className={poster}>
// //             <img src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt="Movie Poster" />
// //           </div>

// //           <div className={info}>
// //             <h1>{Details.title}</h1>
// //             <h5>
// //               {Details.genres.map(genre => (
// //                 <span key={genre.id} className="genre-circle">
// //                   {genre.name}
// //                 </span>
// //               ))}
// //             </h5>
// //             <p>{Details.overview}</p>

// //             <div className={castsection}>
// //               <h3>Casts</h3>
// //               <div className={Castsinfo}>
// //                 {Credits.cast.length > 0 ? (
// //                   Credits.cast.slice(0, 6).map((castMember) => (
// //                     <div key={castMember.id} className="cast-member">
// //                       <img 
// //                         src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`} 
// //                         alt={castMember.name} 
// //                         className="cast-image" 
// //                       />
// //                       <p className="cast-name">{castMember.name}</p>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No cast information available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className={secondcontent}>
// //           {Videos.slice(0, 2).map((video) => (
// //             <div key={video.id} style={{ marginBottom: '80px' }}>
// //               <h3>{video.name}</h3>
// //               <iframe 
// //                 width="100%" 
// //                 height="700" 
// //                 src={`https://www.youtube.com/embed/${video.key}`} 
// //                 title={video.name} 
// //                 frameBorder="0" 
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// //                 allowFullScreen 
// //               ></iframe>
// //             </div>
// //           ))}
// //         </div>
        
// //         <Carousel indicators={false}>
// //           {SimilarMovie.map((movie) => (
// //             <Carousel.Item key={movie.id}>
// //               <div className={Thirdcontent}>
// //                 <p>Similar Movies</p>
// //                 <div className="d-flex justify-content-between">
// //                   {SimilarMovie.map((movie) => (
// //                     movie.backdrop_path && (
// //                       <div key={movie.id} className={videocontainer}>
// //                         <img className={trendimage} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
// //                         <h3 className={imagetitle}>{movie.title}</h3>
// //                         <button>
// //                           <img
// //                             className={youtubeIcon}
// //                             src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" fill="rgba(255, 0, 28, 1)"/></svg>`}
// //                             alt="YouTube Icon"
// //                           />
// //                         </button>
// //                       </div>
// //                     )
// //                   ))}
// //                 </div>
// //               </div>
// //             </Carousel.Item>
// //           ))}
// //         </Carousel>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MovieDetailsItem;

import React from 'react';
import styles from './MovieDetailsItem.module.css';

const { firstcontent, poster, info, Castsinfo, castsection, trendimage, videocontainer, imagetitle, youtubeIcon, secondcontent, Thirdcontent, Background, overlay } = styles;

interface MovieDetailsProps {
  Details: {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    genres: { id: number; name: string }[];
    overview: string;
  } | null;
  Credits: {
    cast: { id: number; name: string; character: string; profile_path: string }[];
  };
  Videos: {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
  }[];
  SimilarMovie: {
    id: number;
    title: string;
    backdrop_path: string;
    vote_average: number;
  }[];
}

const MovieDetailsItem = ({ Details, Credits, Videos, SimilarMovie }: MovieDetailsProps) => {
  if (!Details) {
    return <p>Loading...</p>;
  }

  return (
    // <div className={Background} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${Details.backdrop_path})` }}>
      <div className={overlay}>
        <div className={firstcontent}>
          <div className={poster}>
            <img src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt="Movie Poster" />
          </div>

          <div className={info}>
            <h1>{Details.title}</h1>
            <h5>
              {Details.genres.map(genre => (
                <span key={genre.id} className="genre-circle">
                  {genre.name}
                </span>
              ))}
            </h5>
            <p>{Details.overview}</p>

            <div className={castsection}>
              <h3>Casts</h3>
              <div className={Castsinfo}>
                {Credits.cast.length > 0 ? (
                  Credits.cast.slice(0, 6).map((castMember) => (
                    <div key={castMember.id} className="cast-member">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                        alt={castMember.name}
                        className="cast-image"
                      />
                      <p className="cast-name">{castMember.name}</p>
                    </div>
                  ))
                ) : (
                  <p>No cast information available.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={secondcontent}>
          {Videos.slice(0, 2).map((video) => (
            <div key={video.id} style={{ marginBottom: '80px' }}>
              <h3>{video.name}</h3>
              <iframe
                width="100%"
                height="700"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
}

export default MovieDetailsItem;
