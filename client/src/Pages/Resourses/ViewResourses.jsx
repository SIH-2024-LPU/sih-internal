// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// const ViewBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const booksPerPage = 10;

//   useEffect(() => {
//     fetchBooks();
//   }, [currentPage]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources`, {
//         params: { page: currentPage, limit: booksPerPage },
//       });
//       setBooks(response.data.books);
//       setTotalPages(Math.ceil(response.data.total / booksPerPage));
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleDownload = async (id) => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources/${id}/download`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'book.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading book:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Available Books</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {books.map((book) => (
//           <Card key={book._id}>
//             <CardHeader>
//               <CardTitle>{book.bookTitle}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <img src={book.imageLink} alt={book.bookTitle} className="w-full h-48 object-cover mb-2" />
//               <p>Publisher: {book.publisherName}</p>
//               <p>Published: {new Date(book.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
//             </CardContent>
//             <CardFooter>
//               <Button onClick={() => handleDownload(book._id)}>Download PDF</Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <div className="mt-4 flex justify-center space-x-2">
//         <Button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <span className="py-2 px-4 border rounded">{currentPage} / {totalPages}</span>
//         <Button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ViewBooksPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Pagination } from '@/components/ui/pagination';
// import { PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
// import { Search } from 'lucide-react';

// const ViewBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const booksPerPage = 12;

//   useEffect(() => {
//     fetchBooks();
//   }, [currentPage, searchQuery]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources`, {
//         params: { page: currentPage, limit: booksPerPage, search: searchQuery },
//       });
//       setBooks(response.data.books);
//       setTotalPages(Math.ceil(response.data.total / booksPerPage));
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleDownload = async (id) => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources/${id}/download`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'book.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading book:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleImageError = (event) => {
//     event.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Library Catalog</h1>
//       <div className="relative mb-8">
//         <Input
//           type="text"
//           placeholder="Search books..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="pl-10"
//         />
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <Card key={book._id} className="flex flex-col">
//             <CardHeader>
//               <CardTitle className="text-lg line-clamp-2">{book.bookTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="flex-grow">
//               <div className="aspect-w-3 aspect-h-4 mb-4">
//                 <img
//                   src={book.imageLink}
//                   alt={book.bookTitle}
//                   className="object-cover rounded-md w-full h-full"
//                   onError={handleImageError}
//                 />
//               </div>
//               <p className="text-sm text-gray-600 mb-1">Publisher: {book.publisherName}</p>
//               <p className="text-sm text-gray-600">
//                 Published: {new Date(book.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button onClick={() => handleDownload(book._id)} className="w-full">
//                 Download PDF
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <Pagination className="mt-8">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             />
//           </PaginationItem>
//           {[...Array(totalPages)].map((_, index) => (
//             <PaginationItem key={index}>
//               <PaginationLink
//                 onClick={() => setCurrentPage(index + 1)}
//                 isActive={currentPage === index + 1}
//               >
//                 {index + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}
//           <PaginationItem>
//             <PaginationNext
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default ViewBooksPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Pagination } from '@/components/ui/pagination';
// import { PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
// import { Search } from 'lucide-react';

// const ViewBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const booksPerPage = 12;

//   useEffect(() => {
//     fetchBooks();
//   }, [currentPage, searchQuery]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources`, {
//         params: { page: currentPage, limit: booksPerPage, search: searchQuery },
//       });
//       setBooks(response.data.books);
//       setTotalPages(Math.ceil(response.data.total / booksPerPage));
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleViewPDF = (pdfLink) => {
//     window.open(pdfLink, '_blank');
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleImageError = (event) => {
//     event.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Library Catalog</h1>
//       <div className="relative mb-8">
//         <Input
//           type="text"
//           placeholder="Search books..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="pl-10"
//         />
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <Card key={book._id} className="flex flex-col">
//             <CardHeader>
//               <CardTitle className="text-lg line-clamp-2">{book.bookTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="flex-grow">
//               <div className="aspect-w-3 aspect-h-4 mb-4">
//                 <img
//                   src={book.imageLink}
//                   alt={book.bookTitle}
//                   className="object-cover rounded-md w-full h-full"
//                   onError={handleImageError}
//                 />
//               </div>
//               <p className="text-sm text-gray-600 mb-1">Publisher: {book.publisherName}</p>
//               <p className="text-sm text-gray-600">
//                 Published: {new Date(book.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button onClick={() => handleViewPDF(book.pdfLink)} className="w-full">
//                 View PDF
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <Pagination className="mt-8">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             />
//           </PaginationItem>
//           {[...Array(totalPages)].map((_, index) => (
//             <PaginationItem key={index}>
//               <PaginationLink
//                 onClick={() => setCurrentPage(index + 1)}
//                 isActive={currentPage === index + 1}
//               >
//                 {index + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}
//           <PaginationItem>
//             <PaginationNext
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default ViewBooksPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search } from "lucide-react";

const ViewBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 12;

  useEffect(() => {
    fetchBooks();
  }, [currentPage, searchQuery]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/resources`, {
        params: { page: currentPage, limit: booksPerPage, search: searchQuery },
      });
      setBooks(response.data.books);
      setTotalPages(Math.ceil(response.data.total / booksPerPage));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleViewPDF = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/300x400?text=No+Image";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Library Catalog</h1>
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearch}
          className="pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book._id} className="flex flex-col h-[420px]">
            <CardContent className="flex-grow p-4">
              <div className="aspect-w-3 aspect-h-4 mb-4 h-48">
                <img
                  src={book.imageLink}
                  alt={book.bookTitle}
                  className="object-fit rounded-md w-full h-full"
                  onError={handleImageError}
                />
              </div>
              <h3 className="text-sm font-semibold line-clamp-2 mb-2">
                {book.bookTitle}
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                Publisher: {book.publisherName}
              </p>
              <p className="text-xs text-gray-600">
                Published:{" "}
                {new Date(book.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleViewPDF(book.pdfLink)}
                className="w-full text-sm"
              >
                View PDF
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ViewBooksPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Button } from "@nextui-org/react";
// import { Card, CardBody, CardFooter } from "@nextui-org/react";
// import { Pagination } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";

// const ViewBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const booksPerPage = 10;

//   useEffect(() => {
//     fetchBooks();
//   }, [currentPage]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources`, {
//         params: { page: currentPage, limit: booksPerPage },
//       });
//       setBooks(response.data.books);
//       setTotalPages(Math.ceil(response.data.total / booksPerPage));
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleDownload = async (id) => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources/${id}/download`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'book.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading book:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Books</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {books.map((book) => (
//           <Card key={book._id} className="max-w-sm">
//             <CardBody>
//               <Image
//                 src={book.imageLink}
//                 alt={book.bookTitle}
//                 className="w-full h-48 object-cover mb-4 rounded-lg"
//               />
//               <h2 className="text-xl font-semibold mb-2">{book.bookTitle}</h2>
//               <p className="text-gray-600 mb-1">Publisher: {book.publisherName}</p>
//               <p className="text-gray-600 mb-4">
//                 Published: {new Date(book.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
//               </p>
//             </CardBody>
//             <CardFooter>
//               <Button color="primary" onClick={() => handleDownload(book._id)}>
//                 Download PDF
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center">
//         <Pagination
//           total={totalPages}
//           initialPage={currentPage}
//           onChange={(page) => setCurrentPage(page)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ViewBooksPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Button, Card, CardBody, CardFooter, Pagination, Image, Input } from "@nextui-org/react";

// const ViewBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const booksPerPage = 9;

//   useEffect(() => {
//     fetchBooks();
//   }, [currentPage, searchQuery]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources`, {
//         params: { page: currentPage, limit: booksPerPage, search: searchQuery },
//       });
//       setBooks(response.data.books);
//       setTotalPages(Math.ceil(response.data.total / booksPerPage));
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleDownload = async (id) => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/resources/${id}/download`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'book.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading book:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Books</h1>
//       <Input
//         type="text"
//         placeholder="Search books..."
//         value={searchQuery}
//         onChange={handleSearch}
//         className="mb-6"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {books.map((book) => (
//           <Card
//             key={book._id}
//             isFooterBlurred
//             radius="lg"
//             className="border-none"
//           >
//             <Image
//               alt={book.bookTitle}
//               className="object-cover"
//               src={book.imageLink}
//               width="100%"
//               height={200}
//             />
//             <CardBody>
//               <h2 className="text-xl font-semibold mb-2">{book.bookTitle}</h2>
//               <p className="text-gray-600 mb-1">Publisher: {book.publisherName}</p>
//               <p className="text-gray-600">
//                 Published: {new Date(book.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
//               </p>
//             </CardBody>
//             <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
//               <p className="text-tiny text-white/80">Download PDF</p>
//               <Button
//                 className="text-tiny text-white bg-black/20"
//                 variant="flat"
//                 color="default"
//                 radius="lg"
//                 size="sm"
//                 onClick={() => handleDownload(book._id)}
//               >
//                 Download
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center">
//         <Pagination
//           total={totalPages}
//           initialPage={currentPage}
//           onChange={(page) => setCurrentPage(page)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ViewBooksPage;
