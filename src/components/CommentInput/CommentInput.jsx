import React, { useContext, useState } from 'react'
import style from './CommentInput.module.scss'
import { UserContext } from '../../context/useContext';
import { useActionData } from 'react-router-dom';

export const CommentInput = ({num_comments, productId, setCommentStatus}) => {

  const [newComment, setNewComment] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const {userData} =useContext(UserContext)


  const postComment = ()=>{
    let token = userData.access_token;
    let body = new URLSearchParams();
    let url = "https://api.mediehuset.net/bakeonline/comments";
    body.append('title', 'Ny comment');
    body.append('comment', newComment);
    body.append('user_id', userData.user_id);
    body.append('product_id', productId );
    body.append('active', true);
    
        const options = {method:"POST", 
                     body:body, 
                     headers: token ? { Authorization: `Bearer ${token}` } : {},
};

fetch(url, options)
.then ((res)=> res.json())
.then((data)=> setCommentStatus(data))
.catch((err) =>setError(err))
.finally(()=>setIsLoading(false))

  }
  const submitComment = ()=>{
    
  }

  return (
    <div className={style.commentInput}>
        <div><p>Kommentar</p>
        <p>{num_comments}</p>
        </div>
        <div>
            <p>Icon</p>
            <input  onChange={(event)=>setNewComment(event.target.value)} type="text" placeholder='Fortæl os hvad du synes...' />
            <button onClick={()=>postComment()}>Indsat</button>
        </div>
    </div>
  )
}
