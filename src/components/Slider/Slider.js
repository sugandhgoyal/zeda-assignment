import React, { useState, useEffect } from 'react';
import './slider.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  height: 300px;
  border: 1px solid #b7b6b6;
  border-radius: 8px;
  margin: 20% auto;
  align-items: center;
  .showSlide {
    width: 300px;
    background: #e6e6e6;
  }
`;

const Slide = styled.div`
  width: 33%;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 80%;
    background: #e6e6e6;
  }
`;

const Image = styled.img`
  width: 200px;
`;

export default function Slider() {
  let imagesArray = [image1, image2, image3, image4, image5];
  const [slideIndex, setSlideIndex] = useState(1);
  const ref = React.createRef();
  const nextSlide = n => {
    let slideIndexVal = slideIndex + n;
    setSlideIndex(slideIndexVal);
    displaySlides(slideIndexVal);
  };

  const displaySlides = n => {
    let currentSlides = document.getElementsByClassName('showSlide');
    let container = ref.current;

    if (imagesArray && imagesArray.length > 0) {
      if (n > imagesArray.length - 1) {
        setSlideIndex(1);
        n = 1;
      }

      if (n < 1) {
        setSlideIndex(imagesArray.length - 1);
        n = imagesArray.length - 1;
      }

      for (let i = 0; i < currentSlides.length; i++) {
        if (currentSlides && currentSlides[i])
          currentSlides[i].style.display = 'none';
        if (i !== n) {
          currentSlides[i].style.background = 'none';
          currentSlides[i].style.height = '100%';
          currentSlides[i].style.zIndex = 'none';
          currentSlides[i].style.opacity = 'none';
        }
      }

      if (imagesArray && imagesArray[n] && imagesArray[n - 1]) {
        if (imagesArray[n + 1]) {
          for (let i = n - 1; i < n + 2; i++) {
            let img = document.createElement('img');
            img.src = imagesArray[i];
            img.classList.add('showSlide');
            img.classList.add('fade');
            img.style.display = 'block';
            img.style.height = i === n ? '320px' : '100%';
            img.style.boxShadow =
              i === n ? 'rgb(121 121 123) 10px 10px 27px 5px' : 'none';
            container.appendChild(img);
          }
        } else {
          for (let i = n - 1; i < n + 1; i++) {
            let img = document.createElement('img');
            img.src = imagesArray[i];
            img.classList.add('showSlide');
            img.classList.add('fade');
            img.style.display = 'block';
            img.style.height = i === n ? '320px' : '100%';
            img.style.boxShadow =
              i === n ? 'rgb(121 121 123) 10px 10px 27px 5px' : 'none';
            container.appendChild(img);
          }
          //append 1st element after last element
          let img1 = document.createElement('img');
          img1.src = imagesArray[0];
          img1.classList.add('showSlide');
          img1.classList.add('fade');
          img1.style.display = 'block';
          img1.style.height = n === 0 ? '320px' : '100%';
          img1.style.boxShadow =
            n === 0 ? 'rgb(121 121 123) 10px 10px 27px 5px' : 'none';
          container.appendChild(img1);
        }
      }
    }
  };

  useEffect(() => {
    displaySlides(slideIndex);
  }, []);

  return (
    <div>
      <SliderContainer ref={ref} id="slidercontainer">
        <a className="left" onClick={() => nextSlide(-1)}>
          ❮
        </a>
        <a className="right" onClick={() => nextSlide(1)}>
          ❯
        </a>

        <br />
        <br />
      </SliderContainer>
      <SliderContainer className="slidercontainer">
        <Image src={image1} />
        <Image src={image2} />
        <Image src={image3} />
        <Image src={image4} />
        <Image src={image5} />
      </SliderContainer>
    </div>
  );
}
