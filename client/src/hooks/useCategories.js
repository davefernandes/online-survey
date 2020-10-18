import { useState, useEffect } from 'react';
import survey from '../apis/survey';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  /**
   * API Request to GET Categories
   */
  const getCategories = async () => {
    const response = await survey.get('/categories');
    //console.log(response.data);
    setCategories(response.data);
  };

  return [categories];
};

export default useCategories;