import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() =>{
    document.title = `${title} - Travelaro`;
  }, [title])
};

export default useTitle;