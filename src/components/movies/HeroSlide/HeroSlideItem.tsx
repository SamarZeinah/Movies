
import React, { useEffect, useState } from 'react';
import styles from '../HeroSlide/HeroSlideItem.module.css';
import { Modal, ModalBody } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
 import  actGetDetails  from '../../../Store/Details/actions/actGetDetails';
import { useDispatch } from 'react-redux';
const { sliderbox, slider, leftpart, rightpart, btns, btn1, btn2,content,contentimg ,info
  ,castimg,infocastimg,contentbtn
} = styles;

interface PROPS {
  id:number;
  title: string;          
  overview: string;  
  backdrop_path: string;
  poster_path: string;
  release_date: number;
  vote_average: number;
  vote_count: number;
}

const HeroSlideItem = ({ id,backdrop_path, poster_path, overview, title,key, release_date, vote_average, vote_count }: PROPS) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  // const videoUrl = `https://www.youtube.com/embed/${viedokey}`;
  // console.log("videoUrl:",videoUrl);
  // console.log("video key:", viedokey);

  const[showfirstmodal,setshowfirstmodal]=useState(false);
    const[showsecmodal,setshowsecmodal]=useState(false);
    const [videoKey, setVideoKey] = useState("");

    const dispatch=useDispatch();
 

  
  return (
    <div 
      className={sliderbox} 
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: 'cover',
        height: '99vh', 
        position: 'relative',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        margin:"0px",
        padding:"0px",
        overflow: "hidden",
            // boxShadow: '0 100px 15px rgba(0, 0, 0, 0.5)',

      }}
    >
      <div className={slider}>
        <div className={leftpart}>
          <h2>{title}</h2>
          <p>{overview}</p>
          <div className={btns}>
  <Link style={{ textDecoration: "none", color: "white" }} to={`/MovieDetails/${id}`}>
    <button className={btn1}>Watch now</button>
  </Link>
  <button onClick={() => setshowsecmodal(true)} className={btn2}>Watch trailer</button>
</div>

        </div>

        <div className={rightpart}>
          {poster_path && (
            <img
              src={posterUrl}
              alt={`${title} poster`} // إضافة خاصية alt لتحسين إمكانية الوصول
              className="d-block w-50" 
            />
          )}
        </div>
      </div>

     

          {/* second modal */}
          
                {showsecmodal&&(
            <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal show={showsecmodal} onHide={()=>setshowsecmodal(false)}style={{ marginTop: '100px' }}>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>

              <Modal.Body  >
                <iframe
                width="100%"
                height="315"
                 src={`https://www.youtube.com/embed/${videoKey}`}
                 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title={`YouTube video player${title}`}
                />
                      
                   </Modal.Body>
            </Modal>
          </div>
          )}

    </div>


  );
};





export default HeroSlideItem;


// import React, { useEffect, useState } from 'react';
// import styles from '../HeroSlide/HeroSlideItem.module.css';
// import { Modal } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import actGetDetails from '../../../Store/Details/actions/actGetDetails';
// import { useDispatch } from 'react-redux';

// const { sliderbox, slider, leftpart, rightpart, btns, btn1, btn2 } = styles;

// interface PROPS {
//   id: number;
//   title: string;          
//   overview: string;  
//   backdrop_path: string;
//   poster_path: string;
//   release_date: number;
//   vote_average: number;
//   vote_count: number;
// }

// const HeroSlideItem = ({ id, backdrop_path, poster_path, overview, title, release_date, vote_average, vote_count }: PROPS) => {
//   const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
//   const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
//   const [showsecmodal, setshowsecmodal] = useState(false);
//   const [videoKey, setVideoKey] = useState("");

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const { Videos } = await dispatch(actGetDetails(id));
//       if (Videos && Videos.length > 0) {
//         // ابحث عن الفيديو المميز بناءً على نوعه
//         const specialVideo = Videos.find(video => video.type === 'Trailer' && video.official === true);
//         if (specialVideo) {
//           setVideoKey(specialVideo.key); // استخدم المفتاح الخاص بالفيديو المميز
//         }
//       }
//     };
//     fetchDetails();
//   }, [dispatch, id]);

//   return (
//     <div 
//       className={sliderbox} 
//       style={{
//         backgroundImage: `url(${backdropUrl})`,
//         backgroundSize: 'cover',
//         height: '99vh', 
//         position: 'relative',
//         backgroundPosition: 'center', 
//         backgroundRepeat: 'no-repeat', 
//         margin: "0px",
//         padding: "0px",
//         overflow: "hidden",
//       }}
//     >
//       <div className={slider}>
//         <div className={leftpart}>
//           <h2>{title}</h2>
//           <p>{overview}</p>
//           <div className={btns}>
//             <Link style={{ textDecoration: "none", color: "white" }} to={`/MovieDetails/${id}`}>
//               <button className={btn1}>Watch now</button>
//             </Link>
//             <button onClick={() => setshowsecmodal(true)} className={btn2}>Watch trailer</button>
//           </div>
//         </div>

//         <div className={rightpart}>
//           {poster_path && (
//             <img
//               src={posterUrl}
//               alt={`${title} poster`}
//               className="d-block w-50" 
//             />
//           )}
//         </div>
//       </div>

//       {/* Second Modal */}
//       {showsecmodal && (
//         <Modal show={showsecmodal} onHide={() => setshowsecmodal(false)} style={{ marginTop: '100px' }}>
//           <Modal.Header closeButton>
//             <Modal.Title>{title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <iframe
//               width="100%"
//               height="315"
//               src={`https://www.youtube.com/embed/${videoKey}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//               allowFullScreen
//               title={`YouTube video player ${title}`}
//             />
//           </Modal.Body>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default HeroSlideItem;
