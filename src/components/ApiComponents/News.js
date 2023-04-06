import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './News.css';

export default function News() {
  const [newsArr, setNewsArr] = useState([]);
  const [readMore, setReadMore] = useState(Array(5).fill(false));

  const sendReq = async () => {
    const serverURL = `${process.env.REACT_APP_Backend_Deploy_link}topHeadlines`;
    const response = await fetch(serverURL);
    const data = await response.json();
    setNewsArr(data);
  };

  const toggleReadMore = (index) => {
    setReadMore((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <div className='displayflex my-2'>
        <div className='newsdivone'>
          <div className='innewsone'>

          </div>
          <div className='innewstwo'>
            <div className='mx-4 my-4'>
              <h2>Blogify</h2>
              <p>
                Blogify is a social media platform for sharing posts, engaging in discussions, and fostering a supportive community for self-expression and creativity.

              </p>
            </div>
          </div>
        </div>
        <div className='newsdivtwo'>
          <Carousel>
            {newsArr.slice(10, 15).map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="imginnewscaru d-block w-90"
                  src={item?.urlToImage}
                  alt={item?.title}
                />
                <Carousel.Caption className="News-caption">
                  <h3>
                    {item?.title}
                    <button className='button read-more-button' onClick={() => toggleReadMore(index)}>
                      {readMore[index] ? 'less' : 'more'}
                    </button>
                  </h3>
                  {readMore[index] ? (
                    <p>{item?.description}</p>
                  ) : (
                    <p>{item?.content}</p>
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

