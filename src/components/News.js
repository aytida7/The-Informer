import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  

   const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles,setArticles]=useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(true);
    const [totalResults,setTotalResults]=useState(0);
//    document.title=`${this.capitalizeFirstLetter(this.props.category)}-News App`;


 

  const  updateNews= async()=>{

    // props.setProgress(10);
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&language=en&category=${props.category}&page=${page}&apiKey=c123a779610e467c92c55fc581889cf0&pagesize=${props.pageSize}`;

    setLoading(true);

    let data=await fetch(url);

    // props.setProgress(30);

    let parsedData=await data.json();

    // props.setProgress(70);

    setArticles(parsedData.articles);
    
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.setProgress(100);

  }


 useEffect(()=>{
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  })

  

  // const leftClick= ()=>{
  //   updateNews();
  //   setPage(page-1);
  // }

  // const rightClick=()=>{
  //   updateNews();
  //   setPage(page+1);
  // }


  const fetchMoreData = async () => {
    

    let url=`https://newsapi.org/v2/top-headlines?country=us&language=en&category=${props.category}&page=${page}&apiKey=c123a779610e467c92c55fc581889cf0&pagesize=${props.pageSize}`;
    setPage(page+1);
    

    let data=await fetch(url);
    let parsedData=await data.json();
    

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
    

  };



  
    return (
      <div>
        <h2 className='d-flex justify-content-center my-3'>Top Head-Lines on {capitalizeFirstLetter(props.category)}</h2>
        <div className="Loader d-flex justify-content-center my-1">
        {/* {!(loading)&&<Loader/>} */}
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length==='undefined'?articles.length:articles.length!==totalResults}
          loader={<Loader/>}
        >
        <div className="row mx-1">
        {articles.map((element)=>{
          return <div className="col-md-4"  key={element.url}>
            
                <NewsItem imgUrl={element.urlToImage?element.urlToImage:element.urlToImage="https://www.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg"} title={element.title} Description={element.description} newsUrl={element.url}/>
                </div>

                

        })}
            
          
          </div>
          </InfiniteScroll>
        
          {/* <div className="buttons d-flex justify-content-around my-5">
       <button disabled={page<=1} type="button" className="btn btn-dark" onClick={leftClick}>&larr; Previous</button>
       <button  disabled={page>= Math.ceil(totalResults/pageSize)} type="button" className="btn btn-dark" onClick={rightClick}>Next &rarr;</button>

       </div> */}
       
      </div>
    )
  
}

export default News
