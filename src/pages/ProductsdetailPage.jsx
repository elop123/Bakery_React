import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '.././hooks/useGet';
import { CommentInput } from '../components/CommentInput/CommentInput';
import { CommentCard } from '../components/CommentCard/CommentCard';
import { UserContext } from '../context/useContext';
import { Pagination } from '../components/Pagination/Pagination';

export const ProductsdetailPage = () => {
  // Get parameters from the URL
  const { id, category } = useParams();
  console.log('Product ID:', id);

  // Fetch product details using the `id`
  const { data, isLoading, error } = useGet(`https://api.mediehuset.net/bakeonline/products/${id}`);
  console.log('Product', data);

  // User context
  const { userData } = useContext(UserContext);

  // Pagination state
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const [commentStatus, setCommentStatus] = useState();


  // Fetch comments using the `id`
  const comments = useGet(`https://api.mediehuset.net/bakeonline/comments/${id}`,
   userData?.access_token,   commentStatus);

  console.log('Comments', comments);


  

  const pageForward = () => {
    if (endIndex < comments?.data?.items.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
      setPageCount((prev)=>prev + 1)
    }
  };

  const pageBackward = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
      setEndIndex((prev) => prev - 3);
      setPageCount((prev)=>prev - 1)
    }
  };

  useEffect(() => {
    if (data?.item?.title) {
      document.title = data.item.title;
    }
  }, [data]);

  const arrayMonths = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  // Function for setting the date & time
  function convertTimestampToDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate(); // Fixed: Use `getDate()` for the day of the month
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = arrayMonths[month];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let timeString = `${day} ${monthName} kl. ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${year}`;
    return timeString;
  }

  return (
    <>
      <h2 style={{ color: 'black' }}>{data?.item?.title}</h2>
      <img src={data?.item?.image?.fullpath} alt={data?.item?.title} />
      <p>{data?.item?.description}</p>
      <p>{data?.item?.ingredients?.ammount}</p>

      <section>
        {userData ? (
          <>
            <CommentInput productId={id} setCommentStatus={setCommentStatus} />
            {comments?.data?.items?.slice(startIndex, endIndex).map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  comment={comment.comment}
                  profileName={`${comment.user.firstname} ${comment.user.lastname}`}
                  publishedDate={convertTimestampToDate(comment.created)}
                />
              );
            })}
            <Pagination  pageForward={pageForward}
              pageBackward={pageBackward}
              pageCount={pageCount}/>
          </>
        ) : (
          <h4>Du skal være logget ind</h4>
        )}
      </section>
    </>
  );
};
