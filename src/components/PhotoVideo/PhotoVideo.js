import React from "react";
import s from "./photo-video.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import ImageGallery from "react-image-gallery";
import { Player } from "video-react";

// ===== tmp data =======
const gallery = [
  {
    description: 
      'The Colosseum, also known as the Flavian Amphitheatre, is a large artefact or structure in the city of Rome.',
    original:
      "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail:
      "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    description: 
      'The Colosseum, also known as the Flavian Amphitheatre, is a large artefact or structure in the city of Rome.',
    original:
      "https://images.unsplash.com/photo-1517785462693-ded193b8cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1517785462693-ded193b8cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    description: 
      'description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus id sapien semper lobortis eu in mi. Phasellus non lectus in nisl fringilla ullamcorper.',
    original:
      "https://images.unsplash.com/photo-1529414988992-52e2db9372b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1529414988992-52e2db9372b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80",
  },
];
// ====== /tmp data =======

const PhotoVideo = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.gallery}>
        <ImageGallery
          items={gallery}
          showBullets={true}
          showIndex={true}
          thumbnailPosition={"bottom"}
        />
      </div>
      <div className={s.video_player}>
        <Player
          playsInline
          poster={'https://images.unsplash.com/photo-1529414988992-52e2db9372b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80'}
          sizes={'500px'}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
}

export default PhotoVideo;
