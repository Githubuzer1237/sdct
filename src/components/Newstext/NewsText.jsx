import React, { useState } from 'react'
import s from './NewsText.module.scss'
const NewsText = ( {p, ImgSrc} ) => {
   const [like, setLike] = useState(1753)
   const [liked, setLiked] = useState(false)
  

   const toggleLike = () => {

      if (liked) {
         setLike(like - 1); 
      } else {
         setLike(like + 1); 
      }
      setLiked(!liked); 
   };
  return (
   <>
        <div className={s.news}>
     <div className={s.newstext}>
     <p>{p}</p> <br /><br />
<div className={s.likes}>
   <h1>{like}</h1>
   <button onClick={toggleLike} className={s.like}>
     
   <img
                src={liked ? 'like_icon.svg' :  'empty_like_icon.svg'}
                alt="like icon"
              />

          </button>
</div>

     </div>

     <div className={s.newslogo}>
      <img src={ImgSrc} alt="" />
     </div>


     </div>

   </>
  )
}

export default NewsText
