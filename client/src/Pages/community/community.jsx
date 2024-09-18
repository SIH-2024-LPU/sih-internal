// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { ChevronDown, MessageCircle, ThumbsUp, Send } from 'lucide-react'

// // Mock data for community posts
// // const communityPosts = [
// //   {
// //     id: 1,
// //     author: 'Alice Johnson',
// //     avatar: '/placeholder.svg?height=40&width=40',
// //     content: 'Just finished my latest project! Excited to share it with the community.',
// //     likes: 15,
// //     replies: [
// //       { id: 101, author: 'Bob Smith', content: 'Looks great! Can\'t wait to see it.' },
// //       { id: 102, author: 'Charlie Brown', content: 'Awesome work, Alice!' }
// //     ]
// //   },
// //   {
// //     id: 2,
// //     author: 'David Lee',
// //     avatar: '/placeholder.svg?height=40&width=40',
// //     content: 'Anyone have experience with GraphQL? I\'m considering using it for my next project.',
// //     likes: 8,
// //     replies: [
// //       { id: 201, author: 'Eva Green', content: 'I\'ve used it extensively. Feel free to DM me if you have questions!' },
// //     ]
// //   },
// //   // Add more mock posts here...
// // ]



// const communityPosts = [
//     {
//       id: 1,
//       author: 'Alice Johnson',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
//       content: 'Just finished my latest project! Excited to share it with the community.',
//       likes: 15,
//       replies: [
//         { id: 101, author: 'Bob Smith', content: 'Looks great! Can\'t wait to see it.' },
//         { id: 102, author: 'Charlie Brown', content: 'Awesome work, Alice!' }
//       ]
//     },
//     {
//       id: 2,
//       author: 'David Lee',
//       avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg',
//       content: 'Anyone have experience with GraphQL? I\'m considering using it for my next project.',
//       likes: 8,
//       replies: [
//         { id: 201, author: 'Eva Green', content: 'I\'ve used it extensively. Feel free to DM me if you have questions!' },
//       ]
//     },
//     {
//       id: 3,
//       author: 'Sophia Martinez',
//       avatar: '/placeholder.svg?height=40&width=40',
//       content: 'Just published a new blog post on React performance optimization techniques. Would love some feedback!',
//       likes: 12,
//       replies: [
//         { id: 301, author: 'Michael Clark', content: 'Great tips! I applied some of them to my project and saw improvements.' },
//         { id: 302, author: 'Olivia Brown', content: 'This is super helpful. Thanks for sharing, Sophia!' }
//       ]
//     },
//     {
//       id: 4,
//       author: 'Emily Wilson',
//       avatar: '/placeholder.svg?height=40&width=40',
//       content: 'What’s everyone’s take on the latest React 18 features? Do you think it’ll change the way we develop apps?',
//       likes: 22,
//       replies: [
//         { id: 401, author: 'Liam Johnson', content: 'I think the concurrent mode will be a game changer!' },
//         { id: 402, author: 'Noah Thompson', content: 'I’ve been waiting for automatic batching, so it’s definitely a welcome update for me.' }
//       ]
//     },
//     {
//       id: 5,
//       author: 'James Patel',
//       avatar: '/placeholder.svg?height=40&width=40',
//       content: 'Does anyone have experience with Tailwind CSS and how it compares to traditional CSS frameworks?',
//       likes: 10,
//       replies: [
//         { id: 501, author: 'Grace Taylor', content: 'I switched to Tailwind and love how it simplifies styling without writing custom CSS.' },
//         { id: 502, author: 'Henry White', content: 'I still prefer CSS Modules for larger projects, but Tailwind is amazing for quick setups.' }
//       ]
//     },
//     {
//       id: 6,
//       author: 'Lily Kim',
//       avatar: '/placeholder.svg?height=40&width=40',
//       content: 'I’m building a personal portfolio. Any suggestions on what projects to include to make it stand out?',
//       likes: 19,
//       replies: [
//         { id: 601, author: 'Ethan Harris', content: 'Make sure to showcase both frontend and backend skills. A full-stack app would really stand out!' },
//         { id: 602, author: 'Sophia Martinez', content: 'Focus on real-world problem-solving projects and include a detailed case study for each.' }
//       ]
//     },
//     {
//       id: 7,
//       author: 'Benjamin Walker',
//       avatar: '/placeholder.svg?height=40&width=40',
//       content: 'Just migrated my entire project from REST to GraphQL. The flexibility is amazing, but there’s a learning curve for sure.',
//       likes: 30,
//       replies: [
//         { id: 701, author: 'David Lee', content: 'I’m thinking of doing the same! What was the hardest part for you?' },
//         { id: 702, author: 'Lily Kim', content: 'I agree. Once you get used to it though, it’s hard to go back to REST.' }
//       ]
//     }
//   ];
  

// export default function ModernCommunityPage() {
//   const [expandedPost, setExpandedPost] = useState(null)
//   const [visiblePosts, setVisiblePosts] = useState(2)

//   const loadMorePosts = () => {
//     setVisiblePosts(prev => Math.min(prev + 2, communityPosts.length))
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Community Discussions</h1>
//         <ScrollArea className="h-[70vh] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-6">
//           <motion.div layout>
//             {communityPosts.slice(0, visiblePosts).map((post) => (
//               <motion.div
//                 key={post.id}
//                 layout
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Card className="mb-6 overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-gray-700">
//                   <CardHeader className="flex flex-row items-center gap-4 pb-2">
//                     <Avatar className="h-12 w-12">
//                       <AvatarImage src={post.avatar} alt={post.author} />
//                       <AvatarFallback>{post.author[0]}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.author}</h2>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Posted 2 hours ago</p>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
//                   </CardContent>
//                   <CardFooter className="flex justify-between pt-2">
//                     <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
//                       <ThumbsUp className="mr-2 h-4 w-4" />
//                       {post.likes} Likes
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
//                       className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
//                     >
//                       <MessageCircle className="mr-2 h-4 w-4" />
//                       {post.replies.length} Replies
//                     </Button>
//                   </CardFooter>
//                   <AnimatePresence>
//                     {expandedPost === post.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <CardContent className="pt-0 bg-gray-50 dark:bg-gray-600 rounded-b-lg">
//                           {post.replies.map((reply) => (
//                             <div key={reply.id} className="mt-2 p-3 bg-white dark:bg-gray-700 rounded-md shadow">
//                               <p className="font-semibold text-gray-900 dark:text-white">{reply.author}</p>
//                               <p className="text-gray-700 dark:text-gray-300">{reply.content}</p>
//                             </div>
//                           ))}
//                           <div className="mt-4 flex items-center">
//                             <Input placeholder="Add a reply..." className="flex-grow mr-2" />
//                             <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white">
//                               <Send className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         </CardContent>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//           {visiblePosts < communityPosts.length && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="flex justify-center mt-6"
//             >
//               <Button onClick={loadMorePosts} variant="outline" className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
//                 Load More <ChevronDown className="ml-2 h-4 w-4" />
//               </Button>
//             </motion.div>
//           )}
//         </ScrollArea>
//       </div>
//     </div>
//   )
// }



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { MessageCircle, ThumbsUp, Send } from 'lucide-react';
// import { format } from 'date-fns';
// import config from '../../config';

// export default function TwitterLikeCommunityPage() {
//   const [posts, setPosts] = useState([]);
//   const [newPostContent, setNewPostContent] = useState('');
//   const [user, setUser] = useState(null);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     fetchPosts();
//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [posts]);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/posts`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/auth/me`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const addNewPost = async () => {
//     if (newPostContent.trim() === '') return;
//     try {
//       await axios.post(`${config.API_BASE_URL}/posts`, 
//         { content: newPostContent },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//       setNewPostContent('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error adding new post:', error);
//     }
//   };

//   const toggleLike = async (postId) => {
//     try {
//       await axios.post(`${config.API_BASE_URL}/posts/${postId}/like`, {}, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchPosts();
//     } catch (error) {
//       console.error('Error toggling like:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Community Feed</h1>
//         <Card className="mb-4 p-4 bg-white dark:bg-gray-800">
//           <div className="flex items-center space-x-4">
//             <Avatar className="h-10 w-10">
//               <AvatarImage src={user?.imageUrl} alt={user?.name} />
//               <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
//             </Avatar>
//             <Input
//               value={newPostContent}
//               onChange={(e) => setNewPostContent(e.target.value)}
//               placeholder="What's happening?"
//               className="flex-grow"
//             />
//           </div>
//           <Button onClick={addNewPost} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
//             Post
//           </Button>
//         </Card>
//         <div ref={scrollRef} className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
//           {posts.map((post) => (
//             <motion.div
//               key={post._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="bg-white dark:bg-gray-800">
//                 <CardContent className="pt-4">
//                   <div className="flex items-center space-x-4 mb-2">
//                     <Avatar className="h-10 w-10">
//                       <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
//                       <AvatarFallback>{post.author.name[0]}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <p className="font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {format(new Date(post.createdAt), 'MMM d, yyyy')}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
//                 </CardContent>
//                 <CardFooter className="flex justify-between pt-2">
//                   <Button variant="ghost" size="sm" onClick={() => toggleLike(post._id)} 
//                     className={`text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 ${
//                       post.likes.includes(user?._id) ? 'text-blue-600 dark:text-blue-400' : ''
//                     }`}
//                   >
//                     <ThumbsUp className="mr-2 h-4 w-4" />
//                     {post.likes.length} Likes
//                   </Button>
//                   <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
//                     <MessageCircle className="mr-2 h-4 w-4" />
//                     {post.comments.length} Comments
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, ThumbsUp, Send } from 'lucide-react';
import { format } from 'date-fns';
import config from '../../config';

export default function TwitterLikeCommunityPage() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchPosts();
    if (token) {
      fetchUserData();
    }
  }, [token]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [posts]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const addNewPost = async () => {
    if (!token) {
      alert('Please log in to post.');
      return;
    }
    if (newPostContent.trim() === '') return;
    try {
      await axios.post(`${config.API_BASE_URL}/posts`, 
        { content: newPostContent },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewPostContent('');
      fetchPosts();
    } catch (error) {
      console.error('Error adding new post:', error);
    }
  };

  const toggleLike = async (postId) => {
    if (!token) {
      alert('Please log in to like posts.');
      return;
    }
    try {
      await axios.post(`${config.API_BASE_URL}/posts/${postId}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPosts();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Community Feed</h1>
        {token && (
          <Card className="mb-4 p-4 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.imageUrl} alt={user?.name} />
                <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <Input
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What's happening?"
                className="flex-grow"
              />
            </div>
            <Button onClick={addNewPost} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
              Post
            </Button>
          </Card>
        )}
        {!token && (
          <Card className="mb-4 p-4 bg-white dark:bg-gray-800">
            <p className="text-center text-gray-700 dark:text-gray-300">Please log in to create posts and like content.</p>
          </Card>
        )}
        <div ref={scrollRef} className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          {posts.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="pt-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {format(new Date(post.createdAt), 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleLike(post._id)} 
                    className={`text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 ${
                      post.likes.includes(user?._id) ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}
                    disabled={!token}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    {post.likes.length} Likes
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {post.comments.length} Comments
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}