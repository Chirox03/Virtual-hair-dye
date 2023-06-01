import React, {useState} from 'react'
function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) =>{
    const file =event.target.files[0] ;
    setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <div>
      <label className='custom-file'>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      Upload image
      </label>
      {selectedImage && (
        <div className='display'>
        <div className='image'>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
        <div className='image'>
          <h2>Dyed Image:</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
