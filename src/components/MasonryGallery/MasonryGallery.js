
import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGallery.css'; 

const images = [
 
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 13.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 14.png',),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 20.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 19.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 20.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 14.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 16.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 22.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 21.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 13.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 14.png'),
    require('/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Rectangle 14.png'),
 
  
  
  
];

const breakpointColumnsObj = {
  default: 4, 
  1100: 3,   
  700: 2,    
  400: 1    
};

const MasonryGallery = () => {
  return (
    <Masonry
    
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt="#" />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGallery;
