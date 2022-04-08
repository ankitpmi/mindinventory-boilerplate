import {useState, useEffect} from 'react';
import {API, PostsRes} from 'app-services';

export const useHomeScreen = () => {
  const [postData, setPostData] = useState<PostsRes[] | []>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const getAllPostsRes = await API.getAllPosts();
      console.log('getAllPostsRes >>> ', getAllPostsRes);
      setPostData(getAllPostsRes);
    } catch (error) {
      console.log('E2 >>> ', error);

      return Promise.reject(error);
    }
  };

  return {
    postData,
  };
};
