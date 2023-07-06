import React from 'react'
import { NewsData, searchNews } from '../services/cryptoNewsAPi';
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'


const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchData,setSearchData]= useState("")
  const dispatch = useDispatch();
  const { news ,newsSearch} = useSelector((state) => state.appnews);

  useEffect(() => {
    dispatch(NewsData());
    dispatch(searchNews(searchData))
  }, [dispatch,searchData]);

  useEffect(() => {
    if (news) {
      const data = news?.data;
      console.log(data);
      setNewsData(data);
    }
   
  
  }, [news]);


  return (
  <>
  
  <div class="p-4">
    <input
      type="text"
      class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search..."
      onChange={(e)=>setSearchData(e.target.value)}
    />
  </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-4">
       {newsData &&
        newsData.filter((ele)=>{
          if(newsSearch.length===0){
            return ele
          }else{
            return ele.title.toLowerCase().includes(newsSearch.toLowerCase())
          }
        })
       .map((news,index) => (
             <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white" key={newsData.id}>
                 <img src={news.thumbnail} alt={news.title} className="w-full" />
             <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">{news.title}</div>
               <p className="text-gray-700 text-base">{news.description}</p>
             </div>
             <div className="px-6 py-4">
               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                 {news.createdAt}
               </span>
             </div>
             <div className="px-6 py-4">
              
             </div>
           </div>
       
      ))}
      </div>
  </>
  )
}

export default News;