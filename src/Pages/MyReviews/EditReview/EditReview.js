import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
  const review = useLoaderData();
  console.log(review);
  return (
    <div>
      
    </div>
  );
};

export default EditReview;