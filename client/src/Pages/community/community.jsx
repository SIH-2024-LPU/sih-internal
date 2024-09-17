'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, MessageCircle, ThumbsUp, Send } from 'lucide-react'

// Mock data for community posts
// const communityPosts = [
//   {
//     id: 1,
//     author: 'Alice Johnson',
//     avatar: '/placeholder.svg?height=40&width=40',
//     content: 'Just finished my latest project! Excited to share it with the community.',
//     likes: 15,
//     replies: [
//       { id: 101, author: 'Bob Smith', content: 'Looks great! Can\'t wait to see it.' },
//       { id: 102, author: 'Charlie Brown', content: 'Awesome work, Alice!' }
//     ]
//   },
//   {
//     id: 2,
//     author: 'David Lee',
//     avatar: '/placeholder.svg?height=40&width=40',
//     content: 'Anyone have experience with GraphQL? I\'m considering using it for my next project.',
//     likes: 8,
//     replies: [
//       { id: 201, author: 'Eva Green', content: 'I\'ve used it extensively. Feel free to DM me if you have questions!' },
//     ]
//   },
//   // Add more mock posts here...
// ]



const communityPosts = [
    {
      id: 1,
      author: 'Alice Johnson',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      content: 'Just finished my latest project! Excited to share it with the community.',
      likes: 15,
      replies: [
        { id: 101, author: 'Bob Smith', content: 'Looks great! Can\'t wait to see it.' },
        { id: 102, author: 'Charlie Brown', content: 'Awesome work, Alice!' }
      ]
    },
    {
      id: 2,
      author: 'David Lee',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg',
      content: 'Anyone have experience with GraphQL? I\'m considering using it for my next project.',
      likes: 8,
      replies: [
        { id: 201, author: 'Eva Green', content: 'I\'ve used it extensively. Feel free to DM me if you have questions!' },
      ]
    },
    {
      id: 3,
      author: 'Sophia Martinez',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Just published a new blog post on React performance optimization techniques. Would love some feedback!',
      likes: 12,
      replies: [
        { id: 301, author: 'Michael Clark', content: 'Great tips! I applied some of them to my project and saw improvements.' },
        { id: 302, author: 'Olivia Brown', content: 'This is super helpful. Thanks for sharing, Sophia!' }
      ]
    },
    {
      id: 4,
      author: 'Emily Wilson',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'What’s everyone’s take on the latest React 18 features? Do you think it’ll change the way we develop apps?',
      likes: 22,
      replies: [
        { id: 401, author: 'Liam Johnson', content: 'I think the concurrent mode will be a game changer!' },
        { id: 402, author: 'Noah Thompson', content: 'I’ve been waiting for automatic batching, so it’s definitely a welcome update for me.' }
      ]
    },
    {
      id: 5,
      author: 'James Patel',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Does anyone have experience with Tailwind CSS and how it compares to traditional CSS frameworks?',
      likes: 10,
      replies: [
        { id: 501, author: 'Grace Taylor', content: 'I switched to Tailwind and love how it simplifies styling without writing custom CSS.' },
        { id: 502, author: 'Henry White', content: 'I still prefer CSS Modules for larger projects, but Tailwind is amazing for quick setups.' }
      ]
    },
    {
      id: 6,
      author: 'Lily Kim',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'I’m building a personal portfolio. Any suggestions on what projects to include to make it stand out?',
      likes: 19,
      replies: [
        { id: 601, author: 'Ethan Harris', content: 'Make sure to showcase both frontend and backend skills. A full-stack app would really stand out!' },
        { id: 602, author: 'Sophia Martinez', content: 'Focus on real-world problem-solving projects and include a detailed case study for each.' }
      ]
    },
    {
      id: 7,
      author: 'Benjamin Walker',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Just migrated my entire project from REST to GraphQL. The flexibility is amazing, but there’s a learning curve for sure.',
      likes: 30,
      replies: [
        { id: 701, author: 'David Lee', content: 'I’m thinking of doing the same! What was the hardest part for you?' },
        { id: 702, author: 'Lily Kim', content: 'I agree. Once you get used to it though, it’s hard to go back to REST.' }
      ]
    }
  ];
  

export default function ModernCommunityPage() {
  const [expandedPost, setExpandedPost] = useState(null)
  const [visiblePosts, setVisiblePosts] = useState(2)

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 2, communityPosts.length))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Community Discussions</h1>
        <ScrollArea className="h-[70vh] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-6">
          <motion.div layout>
            {communityPosts.slice(0, visiblePosts).map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="mb-6 overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-gray-700">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.author}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Posted 2 hours ago</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      {post.likes} Likes
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {post.replies.length} Replies
                    </Button>
                  </CardFooter>
                  <AnimatePresence>
                    {expandedPost === post.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0 bg-gray-50 dark:bg-gray-600 rounded-b-lg">
                          {post.replies.map((reply) => (
                            <div key={reply.id} className="mt-2 p-3 bg-white dark:bg-gray-700 rounded-md shadow">
                              <p className="font-semibold text-gray-900 dark:text-white">{reply.author}</p>
                              <p className="text-gray-700 dark:text-gray-300">{reply.content}</p>
                            </div>
                          ))}
                          <div className="mt-4 flex items-center">
                            <Input placeholder="Add a reply..." className="flex-grow mr-2" />
                            <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          {visiblePosts < communityPosts.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-6"
            >
              <Button onClick={loadMorePosts} variant="outline" className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                Load More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </ScrollArea>
      </div>
    </div>
  )
}