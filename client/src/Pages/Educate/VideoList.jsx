// // src/components/VideoList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';

// const VideoList = ({ onEdit }) => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`${config.API_BASE_URL}/videos`);
//         setVideos(response.data);
//       } catch (error) {
//         console.error('Failed to fetch videos', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${config.API_BASE_URL}/videos/${id}`);
//       setVideos(videos.filter((video) => video._id !== id));
//       setSelectedVideo(null);
//     } catch (error) {
//       console.error('Failed to delete video', error);
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/4 p-4">
//         <ul className="space-y-2">
//           {videos.map((video) => (
//             <li key={video._id} className="flex justify-between items-center">
//               <button
//                 onClick={() => setSelectedVideo(video)}
//                 className="text-blue-500 hover:underline"
//               >
//                 {video.title}
//               </button>
//               <div>
//                 <button
//                   onClick={() => onEdit(video)}
//                   className="text-green-500 hover:underline mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(video._id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-3/4 p-4">
//         {selectedVideo ? (
//           <iframe
//             width="100%"
//             height="400"
//             src={`https://www.youtube.com/embed/${selectedVideo.youtubeLink.split('v=')[1]}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title={selectedVideo.title}
//           />
//         ) : (
//           <p>Select a video to watch</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/videos`);
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Failed to fetch videos', error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Video Library</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <div key={video._id} className="border p-4 rounded">
//             <h3 className="font-bold mb-2">{video.title}</h3>
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src={`https://www.youtube.com/embed/${video.youtubeLink.split('v=')[1]}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={video.title}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default VideoList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/videos`);
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Failed to fetch videos', error);
//     }
//   };

//   const handleVideoClick = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="p-4 flex">
//       {/* Video List */}
//       <div className="w-1/3 border-r pr-4">
//         <h2 className="text-2xl font-bold mb-4">Video Library</h2>
//         <ul>
//           {videos.map((video) => (
//             <li
//               key={video._id}
//               className="cursor-pointer mb-2 p-2 border rounded hover:bg-gray-200"
//               onClick={() => handleVideoClick(video)}
//             >
//               {video.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Video Player */}
//       <div className="w-2/3 pl-4">
//         {selectedVideo ? (
//           <div>
//             <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src={`https://www.youtube.com/embed/${selectedVideo.youtubeLink.split('v=')[1]}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={selectedVideo.title}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//         ) : (
//           <p>Select a video to view</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/videos`);
      setVideos(response.data);
    } catch (error) {
      console.error('Failed to fetch videos', error);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="p-4 flex h-screen">
      {/* Video List */}
      <div className="w-1/3 border-r pr-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Learn</h2>
        <ul>
          {videos.map((video) => (
            <li
              key={video._id}
              className="cursor-pointer mb-2 p-2 border rounded hover:bg-gray-200"
              onClick={() => handleVideoClick(video)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>
      {/* Video Player */}
      <div className="w-2/3 pl-4 flex flex-col">
        {selectedVideo ? (
          <div className="flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
            <div className="flex-grow relative">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeLink.split('v=')[1]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        ) : (
          <p className="text-center mt-10">Select a video to view</p>
        )}
      </div>
    </div>
  );
};

export default VideoList;