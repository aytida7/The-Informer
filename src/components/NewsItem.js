import React from 'react'

const NewsItem =(props)=> {
  
    let {title,imgUrl,newsUrl,Description}=props;
    
    return (
      <div>
              <div className="card">
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{Description}</p>
    <a target={"_blank"} rel="noreferrer" href={newsUrl} className="btn btn-primary">More about News</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
