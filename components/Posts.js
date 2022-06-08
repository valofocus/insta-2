import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';

const posts = [
    {
        id: '123',
        username: 'valeron',
        userImg: '2-img.jpg',
        img: '1-img.jpg',
        caption: 'THIS IS DOPE FOLLOW ME ON INSTAGRAM!!',
    },
    {
        id: '123',
        username: 'valeron',
        userImg: '2-img.jpg',
        img: '1-img.jpg',
        caption: 'THIS IS DOPE FOLLOW ME ON INSTAGRAM!!',
    },
]

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
       onSnapshot(
           query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
           (snapshot) => {
            setPosts(snapshot.docs);
        }
        ),     
     [db]
     );

     console.log(posts);


  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id} 
            id={post.id} 
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}            
            />
        ))}
    </div>
  )
}

export default Posts