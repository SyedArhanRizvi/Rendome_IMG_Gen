import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [sImg, setSImg] = useState("");
  useEffect(()=>{
    alert("Image category. If set, must be one of the following: nature, city, technology, food, still_life, abstract, wildlife.");
  },[])

  const imgName = (e)=>{
    setSImg(e.target.value);
  }
  const searchImage = async () => {
    // const category = sImg;
    console.log(sImg);
    const apiKey = 'aB/aaH5rPJ47NQl+W/vOkQ==aKmeLtEmbf2ZIm34';
    const url = `https://api.api-ninjas.com/v1/randomimage?category=${sImg}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Accept': 'image/jpg'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const imageBlob = await response.blob();
      const imageObjectUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageObjectUrl);
    } catch (error) {
      console.error('Error:', error.message);
    }
    // console.log(sImg);
  };

  return (
    <div>
     <div> <input type="text" onChange={imgName}/>
      <button onClick={searchImage}>Search Image</button></div>
      <div>
      {imageUrl && <img src={imageUrl} alt="Random Nature" />}</div>
    </div>
  );
}

export default App;
