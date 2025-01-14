import React from 'react'
import style from './CommentCard.module.scss'

export const CommentCard = ({img, profileName,comment, publishedDate  }) => {
  return (
    <section className={style.commentCard}>
        <div>
         
        </div>
        <div className={style.profile}>
            <h5 className={style.profile}>{profileName}</h5>
            <p className={style.date}>{publishedDate}</p>
            <p>{comment}</p>
        </div>
    </section>
  )
}
