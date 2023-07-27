import { useEffect, useState } from "react";
import "../../assets/stylesheets/Article.css";
import metamorphosis from "../../assets/images/metamorphosis.png";

export default function Articles(props) {
  let [data, setData] = useState(null);

  var url = `https://newsapi.org/v2/top-headlines?country=us${props.query}&apiKey=1d57d7ce62d6405a8958626940c6ad7a`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((response) => {
        setData(response.articles);
      });
    };

    fetchData();

  }, [url]);

  return (
    <div className="article__wrapper">
      {data ? (
        data.map((a) => {
          let { title, urlToImage, description, publishedAt, url } = a;

          let date = new Date(publishedAt);

          return (
            <div className="article__container" key={title}>
              {urlToImage ? (
                <img alt="" className="article__img" src={urlToImage}></img>
              ) : (
                <img alt="" className="article__logo" src={metamorphosis} />
              )}
              <p className="article__title">{title}</p>
              <p className="article__description">{description}</p>
              <div className="article__footer">
                <p className="article__date">
                  {date.toLocaleDateString("en-US")}
                </p>
                <a
                  className="article__link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div className="article__loading">
          Loading{" "}
          <i id="loading__icon" className="fa-solid fa-rotate fa-spin"></i>
        </div>
      )}
    </div>
  );
}
