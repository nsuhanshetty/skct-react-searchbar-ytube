import React from 'react';

const VideoItem = ({ title, description, thumbnailUrl }) => {
    return (
        <li className="media my-4">
            <img src={thumbnailUrl} className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{title}</h5>{description}
            </div>
        </li>
    );
};

export default VideoItem

// [
//     {
//       "videoId": "anV36bvXABc",
//       "title": "Sai Bhajans Jukebox 06 - Best Sathya Sai Baba Bhajans | Top 10 Bhajans",
//       "description": "Listen to the most popular Sai Bhajans collection at one place. Here are the list of songs: 1. Chittachora Yashoda ke 2. Sada Nirantara Hariguna 3. Govind Bolo ...",
//       "thumbnailUrl": "https://i.ytimg.com/vi/anV36bvXABc/default.jpg"
//     },
//     {
//       "videoId": "lim8wnXxuus",
//       "title": "Sai Bhajans Jukebox 05 - Best Sathya Sai Baba Bhajans | Top 10 Bhajans | Best Devotional Songs",
//       "description": "Listen to the most popular Sai Bhajans collection at one place. Here are the list of songs: 1. Vighneswara Gananatha 2. Manasa Bhajare 3. Man Ekbar Hari Bol 4 ...",
//       "thumbnailUrl": "https://i.ytimg.com/vi/lim8wnXxuus/default.jpg"
//     },
//     {
//       "videoId": "r-Tig05ys1A",
//       "title": "Sai Bhajans Jukebox 10 - Best Sathya Sai Baba Bhajans | Top 10 Bhajans | Prasanthi Mandir Bhajans",
//       "description": "Listen to the most popular Sai Bhajans collection at one place. Here are the list of songs: Listen to the other Sai Bhajan Juke Box: Volume 1: ...",
//       "thumbnailUrl": "https://i.ytimg.com/vi/r-Tig05ys1A/default.jpg"
//     },
//     {
//       "videoId": "XAxGeO1lBpw",
//       "title": "Sai Bhajans Medley by Abhirami Ajai",
//       "description": "Abhirami Ajai a leading playback singer from south India, presented beautiful gems of Devotional songs as an offering to Bhagawan Sri Sathya Sai Baba as part ...",
//       "thumbnailUrl": "https://i.ytimg.com/vi/XAxGeO1lBpw/default.jpg"
//     },
//     {
//       "videoId": "aAnsauHb3S0",
//       "title": "Sai Bhajans Jukebox 13 - Best Sathya Sai Baba Bhajans | Top 15 Bhajans | Prasanthi Mandir Bhajans",
//       "description": "Sathya sai Baba Bhajans 00:03 Vighneshwaram Bhajorey Manasa Vighna Haram Bhajorey 03:34 Guru Deva Guru Govinda 08:11 Devi Sai Maa Devi ...",
//       "thumbnailUrl": "https://i.ytimg.com/vi/aAnsauHb3S0/default.jpg"
//     }
//   ]