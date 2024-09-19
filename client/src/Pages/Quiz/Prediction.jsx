// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';
// import { Progress } from '@/components/ui/progress';
// import { Sparkles, X } from 'lucide-react';
// import config from '../../config'


// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];

// const Message = ({ content, isUser, icon }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0 }}
//       className="flex items-start space-x-2 mb-4"
//     >
//       {!isUser && (
//         <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//           {icon}
//         </div>
//       )}
//       <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
//         {content}
//       </div>
//     </motion.div>
//   );
  
//   const CombinedCareerAdvisor = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answers, setAnswers] = useState({});
//     const [showResult, setShowResult] = useState(false);
//     const [progress, setProgress] = useState(0);
//     const [currentAnswer, setCurrentAnswer] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [careerSuggestion, setCareerSuggestion] = useState(null);

//     useEffect(() => {
//       addMessage("Welcome to the Career Advisor! Let's start with a quick quiz to understand your interests and skills.", false, "👋");
//     }, []);
  
//     const addMessage = (content, isUser = false, icon = "") => {
//       setMessages(prev => [...prev, { content, isUser, icon }]);
//     };
  
//     const handleAnswer = (value) => {
//       setCurrentAnswer(value);
//     };
  
//     const handleNext = async () => {
//       if (currentAnswer !== null) {
//         setAnswers({ ...answers, [currentQuestion]: currentAnswer });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           setProgress((currentQuestion + 2) / questions.length * 100);
//           setCurrentAnswer(null);
//         } else {
//           setShowResult(true);
//           setProgress(100);
//           await getGeminiSuggestion();
//         }
//       }
//     };
  
//     // const getGeminiSuggestion = async () => {
//     //   setIsLoading(true);
//     //   addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     //   try {
//     //     const response = await fetch('http://localhost:3001/api/gemini-suggestion', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //       },
//     //       body: JSON.stringify({ answers }),
//     //     });
  
//     //     if (!response.ok) {
//     //       throw new Error('Failed to get career suggestion');
//     //     }
  
//     //     const data = await response.json();
//     //     setCareerSuggestion(data);
//     //     addMessage("Here's your personalized career suggestion:", false, "🚀");
//     //   } catch (error) {
//     //     console.error('Error getting Gemini suggestion:', error);
//     //     addMessage("I'm sorry, there was an error getting your career suggestion. Please try again later.", false, "😓");
//     //   } finally {
//     //     setIsLoading(false);
//     //   }
//     // };
  
//     // const getGeminiSuggestion = async () => {
//     //     setIsLoading(true);
//     //     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
      
//     //     try {
//     //       const response = await fetch('http://localhost:3001/api/gemini-suggestion', {
//     //         method: 'POST',
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({ answers }),
//     //       });
      
//     //       if (!response.ok) {
//     //         const errorData = await response.json();
//     //         throw new Error(errorData.error || 'Failed to get career suggestion');
//     //       }
      
//     //       const data = await response.json();
//     //       setCareerSuggestion(data);
//     //       addMessage("Here's your personalized career suggestion:", false, "🚀");
//     //     } catch (error) {
//     //       console.error('Error getting Gemini suggestion:', error);
//     //       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//     //     } finally {
//     //       setIsLoading(false);
//     //     }
//     //   };


//     // const getGeminiSuggestion = async () => {
//     //     setIsLoading(true);
//     //     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
    
//     //     const quizData = questions.map((q, index) => ({
//     //       question: q.question,
//     //       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     //     }));
    
//     //     try {
//     //       const response = await fetch('http://localhost:3001/api/gemini-suggestion', {
//     //         method: 'POST',
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({ quizData }),
//     //       });
    
//     //       if (!response.ok) {
//     //         const errorData = await response.json();
//     //         throw new Error(errorData.error || 'Failed to get career suggestion');
//     //       }
    
//     //       const data = await response.json();
//     //       setCareerSuggestion(data);
//     //       addMessage("Here's your personalized career suggestion:", false, "🚀");
//     //     } catch (error) {
//     //       console.error('Error getting Gemini suggestion:', error);
//     //       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//     //     } finally {
//     //       setIsLoading(false);
//     //     }
//     //   };


    // const getGeminiSuggestion = async () => {
    //     setIsLoading(true);
    //     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
      
    //     const quizData = questions.map((q, index) => ({
    //       question: q.question,
    //       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
    //     }));
      
    //     try {
    //       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ quizData }),
    //       });
      
    //       if (!response.ok) {
    //         const errorData = await response.json();
    //         throw new Error(errorData.error || 'Failed to get career suggestion');
    //       }
      
    //       const data = await response.json();
          
    //       // Check if the response is already a valid JSON object
    //       if (typeof data === 'object' && data !== null) {
    //         setCareerSuggestion(data);
    //       } else if (typeof data === 'string') {
    //         // If it's a string, try to parse it as JSON
    //         try {
    //           const parsedData = JSON.parse(data);
    //           setCareerSuggestion(parsedData);
    //         } catch (parseError) {
    //           // If parsing fails, try to extract JSON using regex
    //           const jsonMatch = data.match(/\{[\s\S]*\}/);
    //           if (jsonMatch) {
    //             const extractedJson = JSON.parse(jsonMatch[0]);
    //             setCareerSuggestion(extractedJson);
    //           } else {
    //             throw new Error('Unable to parse career suggestion data');
    //           }
    //         }
    //       } else {
    //         throw new Error('Unexpected response format');
    //       }
      
    //       addMessage("Here's your personalized career suggestion:", false, "🚀");
    //     } catch (error) {
    //       console.error('Error getting Gemini suggestion:', error);
    //       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };
//     const resetQuiz = () => {
//       setCurrentQuestion(0);
//       setAnswers({});
//       setShowResult(false);
//       setProgress(0);
//       setCurrentAnswer(null);
//       setMessages([]);
//       setCareerSuggestion(null);
//       addMessage("Let's start over! Ready for the quiz again?", false, "👋");
//     };
  
//     const cardVariants = {
//       hidden: { opacity: 0, y: 50 },
//       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     };
  
//     return (
//       <div className="flex flex-col h-screen bg-gray-50">
//         <div className="bg-white p-4 shadow-sm">
//           <div className="max-w-3xl mx-auto flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Career Advisor</h1>
//             <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={resetQuiz} />
//           </div>
//         </div>
//         <div className="flex-1 overflow-y-auto p-4">
//           <div className="max-w-3xl mx-auto space-y-4">
//             <AnimatePresence>
//               {messages.map((message, index) => (
//                 <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//               ))}
//             </AnimatePresence>
  
//             {!showResult && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//               >
//                 <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//                   <CardHeader className="text-center">
//                     <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Career Exploration Quiz</h2>
//                     <Progress value={progress} className="w-full mt-2" />
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
//                       Question {currentQuestion + 1} of {questions.length}
//                     </p>
//                     <p className="text-gray-700 dark:text-gray-300">{questions[currentQuestion].question}</p>
//                     <RadioGroup onValueChange={handleAnswer} value={currentAnswer} className="space-y-2">
//                       {questions[currentQuestion].options.map((option) => (
//                         <div key={option.value} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
//                           <RadioGroupItem value={option.value} id={option.value} />
//                           <Label htmlFor={option.value} className="flex-grow cursor-pointer">
//                             {option.label}
//                           </Label>
//                         </div>
//                       ))}
//                     </RadioGroup>
//                   </CardContent>
//                   <CardFooter>
//                     <Button 
//                       onClick={handleNext} 
//                       className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
//                       disabled={currentAnswer === null || isLoading}
//                     >
//                       {isLoading ? "Processing..." : (currentQuestion < questions.length - 1 ? "Next" : "Get Results")}
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             )}
  
//             {careerSuggestion && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//               >
//                 <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//                   <CardHeader className="text-center">
//                     <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//                     <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//                     <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//                     <div>
//                       <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//                       <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                         {careerSuggestion.jobProfiles.map((job, index) => (
//                           <li key={index}>{job}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                   <CardFooter>
//                     <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//                       Take Quiz Again
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CombinedCareerAdvisor;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';
// import { Progress } from '@/components/ui/progress';
// import { Sparkles, X } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = ['Technology', 'Science', 'Arts', 'Business'];
// const strengthOptions = ['Analytical', 'Creative', 'Communication', 'Problem-solving'];


// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];

// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className="flex items-start space-x-2 mb-4"
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const LoadingAnimation = () => (
//   <div className="flex justify-center items-center space-x-2">
//     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
//     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//   </div>
// );

// const CombinedCareerAdvisor = () => {
//   const [userType, setUserType] = useState(null);
//   const [studentGrade, setStudentGrade] = useState(null);
//   const [stream, setStream] = useState(null);
//   const [interest, setInterest] = useState(null);
//   const [strength, setStrength] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [currentAnswer, setCurrentAnswer] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);

//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's start by understanding a bit about you.", false, "👋");
//   }, []);

//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleAnswer = (value) => {
//     setCurrentAnswer(value);
//   };

//   const handleNext = async () => {
//     if (currentAnswer !== null) {
//       setAnswers({ ...answers, [currentQuestion]: currentAnswer });
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//         setProgress((currentQuestion + 2) / questions.length * 100);
//         setCurrentAnswer(null);
//       } else {
//         setShowResult(true);
//         setProgress(100);
//         await getGeminiSuggestion();
//       }
//     }
//   };

//   // const getGeminiSuggestion = async () => {
//   //   setIsLoading(true);
//   //   addMessage("AI is analyzing your responses to provide personalized career suggestions...", false, "🤖");

//   //   const userData = {
//   //     userType,
//   //     studentGrade,
//   //     stream,
//   //     interest,
//   //     strength,
//   //     quizAnswers: answers
//   //   };

//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(userData),
//   //     });

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || 'Failed to get career suggestion');
//   //     }

//   //     const data = await response.json();
//   //     setCareerSuggestion(data);
//   //     addMessage("Here's your personalized career suggestion:", false, "🚀");
//   //   } catch (error) {
//   //     console.error('Error getting Gemini suggestion:', error);
//   //     addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

  // const getGeminiSuggestion = async () => {
  //   setIsLoading(true);
  //   addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
  //   const quizData = questions.map((q, index) => ({
  //     question: q.question,
  //     selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
  //   }));
  
  //   try {
  //     const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ quizData }),
  //     });
  
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error || 'Failed to get career suggestion');
  //     }
  
  //     const data = await response.json();
      
  //     // Check if the response is already a valid JSON object
  //     if (typeof data === 'object' && data !== null) {
  //       setCareerSuggestion(data);
  //     } else if (typeof data === 'string') {
  //       // If it's a string, try to parse it as JSON
  //       try {
  //         const parsedData = JSON.parse(data);
  //         setCareerSuggestion(parsedData);
  //       } catch (parseError) {
  //         // If parsing fails, try to extract JSON using regex
  //         const jsonMatch = data.match(/\{[\s\S]*\}/);
  //         if (jsonMatch) {
  //           const extractedJson = JSON.parse(jsonMatch[0]);
  //           setCareerSuggestion(extractedJson);
  //         } else {
  //           throw new Error('Unable to parse career suggestion data');
  //         }
  //       }
  //     } else {
  //       throw new Error('Unexpected response format');
  //     }
  
  //     addMessage("Here's your personalized career suggestion:", false, "🚀");
  //   } catch (error) {
  //     console.error('Error getting Gemini suggestion:', error);
  //     addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
//   const resetQuiz = () => {
//     setUserType(null);
//     setStudentGrade(null);
//     setStream(null);
//     setInterest(null);
//     setStrength(null);
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setProgress(0);
//     setCurrentAnswer(null);
//     setMessages([]);
//     setCareerSuggestion(null);
//     addMessage("Let's start over! Tell me a bit about yourself.", false, "👋");
//   };

//   const renderUserTypeSelection = () => (
//     <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Are you a student or a professional?</h2>
//       </CardHeader>
//       <CardContent>
//         <RadioGroup onValueChange={setUserType} className="space-y-2">
//           {userTypeOptions.map((option) => (
//             <div key={option} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
//               <RadioGroupItem value={option} id={option} />
//               <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>
//     </Card>
//   );

//   const renderStudentGradeSelection = () => (
//     <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Which grade are you in?</h2>
//       </CardHeader>
//       <CardContent>
//         <RadioGroup onValueChange={setStudentGrade} className="space-y-2">
//           {studentGradeOptions.map((option) => (
//             <div key={option} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
//               <RadioGroupItem value={option} id={option} />
//               <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>
//     </Card>
//   );

//   const renderStreamSelection = () => (
//     <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Which stream have you chosen?</h2>
//       </CardHeader>
//       <CardContent>
//         <RadioGroup onValueChange={setStream} className="space-y-2">
//           {streamOptions.map((option) => (
//             <div key={option} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
//               <RadioGroupItem value={option} id={option} />
//               <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>
//     </Card>
//   );

//   const renderInterestAndStrengthSelection = () => (
//     <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Tell us about your interests and strengths</h2>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div>
//           <Label htmlFor="interest" className="text-lg font-medium text-indigo-600 dark:text-indigo-400">What's your main interest?</Label>
//           <Select onValueChange={setInterest}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select your interest" />
//             </SelectTrigger>
//             <SelectContent>
//               {interestOptions.map((option) => (
//                 <SelectItem key={option} value={option}>{option}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <Label htmlFor="strength" className="text-lg font-medium text-indigo-600 dark:text-indigo-400">What's your biggest strength?</Label>
//           <Select onValueChange={setStrength}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select your strength" />
//             </SelectTrigger>
//             <SelectContent>
//               {strengthOptions.map((option) => (
//                 <SelectItem key={option} value={option}>{option}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </CardContent>
//     </Card>
//   );

//   const renderCurrentQuestion = () => (
//     <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Career Exploration Quiz</h2>
//         <Progress value={progress} className="w-full mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
//           Question {currentQuestion + 1} of {questions.length}
//         </p>
//         <p className="text-gray-700 dark:text-gray-300">{questions[currentQuestion].question}</p>
//         <RadioGroup onValueChange={handleAnswer} value={currentAnswer} className="space-y-2">
//           {questions[currentQuestion].options.map((option) => (
//             <div key={option.value} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
//               <RadioGroupItem value={option.value} id={option.value} />
//               <Label htmlFor={option.value} className="flex-grow cursor-pointer">
//                 {option.label}
//               </Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>
//       <CardFooter>
//         <Button 
//           onClick={handleNext} 
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
//           disabled={currentAnswer === null || isLoading}
//         >
//           {currentQuestion < questions.length - 1 ? "Next" : "Get Results"}
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   const renderContent = () => {
//     if (!userType) return renderUserTypeSelection();
//     if (userType === 'Student' && !studentGrade) return renderStudentGradeSelection();
//     if (userType === 'Student' && studentGrade === '12th' && !stream) return renderStreamSelection();
//     if (!interest || !strength) return renderInterestAndStrengthSelection();
//     if (!showResult) return renderCurrentQuestion();
//     if (isLoading) return <LoadingAnimation />;
//     if (careerSuggestion) return renderCareerSuggestion();
//     return null;
//   };

//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <div>
//           <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//             {careerSuggestion.jobProfiles.map((job, index) => (
//               <li key={index}>{job}</li>
//             ))}
//           </ul>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={resetQuiz} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//           </AnimatePresence>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {renderContent()}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CombinedCareerAdvisor;


//Working

  
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Sparkles, X } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = [
//   "Technology", "Science", "Arts", "Business", "Healthcare",
//   "Education", "Sports", "Environment", "Social Sciences", "Engineering"
// ];
// const strengthOptions = [
//   "Problem Solving", "Communication", "Leadership", "Creativity",
//   "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
//   "Technical Skills", "Emotional Intelligence"
// ];

// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];

// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className="flex items-start space-x-2 mb-4"
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const OptionButton = ({ text, onClick }) => (
//   <Button
//     variant="outline"
//     className="mr-2 mb-2"
//     onClick={onClick}
//   >
//     {text}
//   </Button>
// );

// const CombinedCareerAdvisor = () => {
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [userType, setUserType] = useState('');
//   const [studentGrade, setStudentGrade] = useState('');
//   const [stream, setStream] = useState('');
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [selectedStrengths, setSelectedStrengths] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);

//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's create your roadmap!", false, "👋");
//     setTimeout(() => addMessage("Are you a student or a professional?", false, "🤔"), 1000);
//   }, []);

//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleOptionClick = (option) => {
//     addMessage(option, true);
//     processUserInput(option);
//   };

//   const processUserInput = (input) => {
//     switch (currentStep) {
//       case 0:
//         setUserType(input);
//         if (input === "Student") {
//           addMessage("Great! Are you in 10th or 12th class?", false, "🎓");
//           setCurrentStep(1);
//         } else {
//           setCurrentStep(2);
//           addMessage("Excellent! Let's talk about your interests.", false, "🌟");
//           addMessage("What are your top interests? (Select up to 3)", false, "🤔");
//         }
//         break;
//       case 1:
//         setStudentGrade(input);
//         if (input === "12th") {
//           addMessage("Which stream have you chosen?", false, "📚");
//           setCurrentStep(1.5);
//         } else {
//           setCurrentStep(2);
//           addMessage("Great! Now, let's talk about your interests.", false, "🌟");
//           addMessage("What are your top interests? (Select up to 3)", false, "🤔");
//         }
//         break;
//       case 1.5:
//         setStream(input);
//         setCurrentStep(2);
//         addMessage("Perfect! Now, let's talk about your interests.", false, "🌟");
//         addMessage("What are your top interests? (Select up to 3)", false, "🤔");
//         break;
//       case 2:
//         setSelectedInterests(prev => [...prev, input]);
//         if (selectedInterests.length === 2) {
//           setCurrentStep(3);
//           addMessage("Great choices! Now, let's identify your strengths.", false, "💪");
//           addMessage("What are your top strengths? (Select up to 3)", false, "🤔");
//         }
//         break;
//       case 3:
//         setSelectedStrengths(prev => [...prev, input]);
//         if (selectedStrengths.length === 2) {
//           setCurrentStep(4);
//           addMessage("Excellent! Now, let's dive deeper with a few more questions.", false, "🧠");
//           setCurrentQuestion(0);
//           addMessage(questions[0].question, false, "❓");
//         }
//         break;
//       case 4:
//         setAnswers({ ...answers, [currentQuestion]: input });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           addMessage(questions[currentQuestion + 1].question, false, "❓");
//         } else {
//           setShowResult(true);
//           setProgress(100);
//           getGeminiSuggestion();
//         }
//         break;
//       default:
//         addMessage("I'm not sure how to respond to that. Would you like to start over?", false, "😅");
//         break;
//     }
//   };

//   // const getGeminiSuggestion = async () => {

//   //   setIsLoading(true);
//   //   addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//   //   const userData = {
//   //     userType,
//   //     studentGrade,
//   //     stream,
//   //     interests: selectedInterests,
//   //     strengths: selectedStrengths,
//   //     quizAnswers: answers
//   //   };
  
//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(userData),
//   //     });
  
//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || 'Failed to get career suggestion');
//   //     }
  
//   //     const data = await response.json();
      
//   //     if (typeof data === 'object' && data !== null) {
//   //       setCareerSuggestion(data);
//   //     } else if (typeof data === 'string') {
//   //       try {
//   //         const parsedData = JSON.parse(data);
//   //         setCareerSuggestion(parsedData);
//   //       } catch (parseError) {
//   //         const jsonMatch = data.match(/\{[\s\S]*\}/);
//   //         if (jsonMatch) {
//   //           const extractedJson = JSON.parse(jsonMatch[0]);
//   //           setCareerSuggestion(extractedJson);
//   //         } else {
//   //           throw new Error('Unable to parse career suggestion data');
//   //         }
//   //       }
//   //     } else {
//   //       throw new Error('Unexpected response format');
//   //     }
  
//   //     addMessage("Here's your personalized career suggestion:", false, "🚀");
//   //   } catch (error) {
//   //     console.error('Error getting Gemini suggestion:', error);
//   //     addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   const getGeminiSuggestion = async () => {
//     setIsLoading(true);
//     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     const quizData = questions.map((q, index) => ({
//       question: q.question,
//       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     }));
  
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quizData }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to get career suggestion');
//       }
  
//       const data = await response.json();
      
//       // Check if the response is already a valid JSON object
//       if (typeof data === 'object' && data !== null) {
//         setCareerSuggestion(data);
//       } else if (typeof data === 'string') {
//         // If it's a string, try to parse it as JSON
//         try {
//           const parsedData = JSON.parse(data);
//           setCareerSuggestion(parsedData);
//         } catch (parseError) {
//           // If parsing fails, try to extract JSON using regex
//           const jsonMatch = data.match(/\{[\s\S]*\}/);
//           if (jsonMatch) {
//             const extractedJson = JSON.parse(jsonMatch[0]);
//             setCareerSuggestion(extractedJson);
//           } else {
//             throw new Error('Unable to parse career suggestion data');
//           }
//         }
//       } else {
//         throw new Error('Unexpected response format');
//       }
  
//       addMessage("Here's your personalized career suggestion:", false, "🚀");
//     } catch (error) {
//       console.error('Error getting Gemini suggestion:', error);
//       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const resetQuiz = () => {
//     setUserType('');
//     setStudentGrade('');
//     setStream('');
//     setSelectedInterests([]);
//     setSelectedStrengths([]);
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setProgress(0);
//     setMessages([]);
//     setCareerSuggestion(null);
//     setCurrentStep(0);
//     addMessage("Let's start over! Are you a student or a professional?", false, "👋");
//   };

//   const renderOptions = () => {
//     switch (currentStep) {
//       case 0:
//         return userTypeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1:
//         return studentGradeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1.5:
//         return streamOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 2:
//         return interestOptions
//           .filter(interest => !selectedInterests.includes(interest))
//           .map(interest => (
//             <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
//           ));
//       case 3:
//         return strengthOptions
//           .filter(strength => !selectedStrengths.includes(strength))
//           .map(strength => (
//             <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
//           ));
//       case 4:
//         return questions[currentQuestion].options.map(option => (
//           <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
//         ));
//       default:
//         return null;
//     }
//   };

//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <div>
//           <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//             {careerSuggestion.jobProfiles.map((job, index) => (
//               <li key={index}>{job}</li>
//             ))}
//           </ul>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={resetQuiz} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//             </AnimatePresence>

// {!showResult && (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.5 }}
//     className="mt-4"
//   >
//     {renderOptions()}
//   </motion.div>
// )}

// {showResult && !isLoading && careerSuggestion && (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     {renderCareerSuggestion()}
//   </motion.div>
// )}

// {isLoading && (
//   <div className="flex justify-center items-center">
//     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//   </div>
// )}

// <div ref={messagesEndRef} />
// </div>
// </div>
// </div>
// );
// };

// export default CombinedCareerAdvisor;


// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Sparkles, X } from 'lucide-react';
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = [
//   "Technology", "Science", "Arts", "Business", "Healthcare",
//   "Education", "Sports", "Environment", "Social Sciences", "Engineering"
// ];
// const strengthOptions = [
//   "Problem Solving", "Communication", "Leadership", "Creativity",
//   "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
//   "Technical Skills", "Emotional Intelligence"
// ];

// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   // ... (other questions remain the same)
// ];

// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className={`flex items-start space-x-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'} max-w-[70%]`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const OptionButton = ({ text, onClick }) => (
//   <Button
//     variant="outline"
//     className="mr-2 mb-2"
//     onClick={onClick}
//   >
//     {text}
//   </Button>
// );

// const CombinedCareerAdvisor = () => {
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [userType, setUserType] = useState('');
//   const [studentGrade, setStudentGrade] = useState('');
//   const [stream, setStream] = useState('');
//   const [selectedInterest, setSelectedInterest] = useState('');
//   const [selectedStrength, setSelectedStrength] = useState('');
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);

//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's create your roadmap!", false, "👋");
//     setTimeout(() => addMessage("Are you a student or a professional?", false, "🤔"), 1000);
//   }, []);

//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleOptionClick = (option) => {
//     addMessage(option, true);
//     processUserInput(option);
//     scrollToBottom();
//   };

//   const processUserInput = (input) => {
//     switch (currentStep) {
//       case 0:
//         setUserType(input);
//         if (input === "Student") {
//           addMessage("Great! Are you in 10th or 12th class?", false, "🎓");
//           setCurrentStep(1);
//         } else {
//           setCurrentStep(2);
//           addMessage("Excellent! Let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1:
//         setStudentGrade(input);
//         if (input === "12th") {
//           addMessage("Which stream have you chosen?", false, "📚");
//           setCurrentStep(1.5);
//         } else {
//           setCurrentStep(2);
//           addMessage("Great! Now, let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1.5:
//         setStream(input);
//         setCurrentStep(2);
//         addMessage("Perfect! Now, let's talk about your interests.", false, "🌟");
//         addMessage("What is your top interest?", false, "🤔");
//         break;
//       case 2:
//         setSelectedInterest(input);
//         setCurrentStep(3);
//         addMessage("Great choice! Now, let's identify your strength.", false, "💪");
//         addMessage("What is your top strength?", false, "🤔");
//         break;
//       case 3:
//         setSelectedStrength(input);
//         setCurrentStep(4);
//         addMessage("Excellent! Now, let's dive deeper with a few more questions.", false, "🧠");
//         setCurrentQuestion(0);
//         addMessage(questions[0].question, false, "❓");
//         break;
//       case 4:
//         setAnswers({ ...answers, [currentQuestion]: input });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           addMessage(questions[currentQuestion + 1].question, false, "❓");
//         } else {
//           setShowResult(true);
//           getGeminiSuggestion();
//         }
//         break;
//       default:
//         addMessage("I'm not sure how to respond to that. Would you like to start over?", false, "😅");
//         break;
//     }
//   };

//   const getGeminiSuggestion = async () => {
//     setIsLoading(true);
//     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     const quizData = questions.map((q, index) => ({
//       question: q.question,
//       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     }));
  
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quizData }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to get career suggestion');
//       }
  
//       const data = await response.json();
      
//       if (typeof data === 'object' && data !== null) {
//         setCareerSuggestion(data);
//       } else if (typeof data === 'string') {
//         try {
//           const parsedData = JSON.parse(data);
//           setCareerSuggestion(parsedData);
//         } catch (parseError) {
//           const jsonMatch = data.match(/\{[\s\S]*\}/);
//           if (jsonMatch) {
//             const extractedJson = JSON.parse(jsonMatch[0]);
//             setCareerSuggestion(extractedJson);
//           } else {
//             throw new Error('Unable to parse career suggestion data');
//           }
//         }
//       } else {
//         throw new Error('Unexpected response format');
//       }
  
//       addMessage("Here's your personalized career suggestion:", false, "🚀");
//     } catch (error) {
//       console.error('Error getting Gemini suggestion:', error);
//       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   const resetQuiz = () => {
//     setUserType('');
//     setStudentGrade('');
//     setStream('');
//     setSelectedInterest('');
//     setSelectedStrength('');
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setMessages([]);
//     setCareerSuggestion(null);
//     setCurrentStep(0);
//     addMessage("Let's start over! Are you a student or a professional?", false, "👋");
//   };

//   const renderOptions = () => {
//     switch (currentStep) {
//       case 0:
//         return userTypeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1:
//         return studentGradeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1.5:
//         return streamOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 2:
//         return interestOptions.map(interest => (
//           <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
//         ));
//       case 3:
//         return strengthOptions.map(strength => (
//           <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
//         ));
//       case 4:
//         return questions[currentQuestion].options.map(option => (
//           <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
//         ));
//       default:
//         return null;
//     }
//   };

//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <div>
//           <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//             {careerSuggestion.jobProfiles.map((job, index) => (
//               <li key={index}>{job}</li>
//             ))}
//           </ul>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={resetQuiz} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//           </AnimatePresence>

//           {!showResult && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mt-4"
//             >
//               {renderOptions()}
//             </motion.div>
//           )}

//           {showResult && !isLoading && careerSuggestion && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {renderCareerSuggestion()}
//             </motion.div>
//           )}

//           {isLoading && (
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CombinedCareerAdvisor;


// FULLY WORKING



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Sparkles, X } from 'lucide-react';
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = [
//   "Technology", "Science", "Arts", "Business", "Healthcare",
//   "Education", "Sports", "Environment", "Social Sciences", "Engineering"
// ];
// const strengthOptions = [
//   "Problem Solving", "Communication", "Leadership", "Creativity",
//   "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
//   "Technical Skills", "Emotional Intelligence"
// ];

// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];
// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className={`flex items-start space-x-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'} max-w-[70%]`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const OptionButton = ({ text, onClick }) => (
//   <Button
//     variant="outline"
//     className="mr-2 mb-2"
//     onClick={onClick}
//   >
//     {text}
//   </Button>
// );

// const CombinedCareerAdvisor = () => {
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [userType, setUserType] = useState('');
//   const [studentGrade, setStudentGrade] = useState('');
//   const [stream, setStream] = useState('');
//   const [selectedInterest, setSelectedInterest] = useState('');
//   const [selectedStrength, setSelectedStrength] = useState('');
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);

//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's create your roadmap!", false, "👋");
//     setTimeout(() => addMessage("Are you a student or a professional?", false, "🤔"), 1000);
//   }, []);

//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleOptionClick = (option) => {
//     addMessage(option, true);
//     processUserInput(option);
//   };

//   const processUserInput = (input) => {
//     switch (currentStep) {
//       case 0:
//         setUserType(input);
//         if (input === "Student") {
//           addMessage("Great! Are you in 10th or 12th class?", false, "🎓");
//           setCurrentStep(1);
//         } else {
//           setCurrentStep(2);
//           addMessage("Excellent! Let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1:
//         setStudentGrade(input);
//         if (input === "12th") {
//           addMessage("Which stream have you chosen?", false, "📚");
//           setCurrentStep(1.5);
//         } else {
//           setCurrentStep(2);
//           addMessage("Great! Now, let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1.5:
//         setStream(input);
//         setCurrentStep(2);
//         addMessage("Perfect! Now, let's talk about your interests.", false, "🌟");
//         addMessage("What is your top interest?", false, "🤔");
//         break;
//       case 2:
//         setSelectedInterest(input);
//         setCurrentStep(3);
//         addMessage("Great choice! Now, let's identify your strength.", false, "💪");
//         addMessage("What is your top strength?", false, "🤔");
//         break;
//       case 3:
//         setSelectedStrength(input);
//         setCurrentStep(4);
//         addMessage("Excellent! Now, let's dive deeper with a few more questions.", false, "🧠");
//         setCurrentQuestion(0);
//         addMessage(questions[0].question, false, "❓");
//         break;
//       case 4:
//         setAnswers({ ...answers, [currentQuestion]: input });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           addMessage(questions[currentQuestion + 1].question, false, "❓");
//         } else {
//           setShowResult(true);
//           getGeminiSuggestion();
//         }
//         break;
//       default:
//         addMessage("I'm not sure how to respond to that. Would you like to start over?", false, "😅");
//         break;
//     }
//   };

//   const getGeminiSuggestion = async () => {
//     setIsLoading(true);
//     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     const quizData = questions.map((q, index) => ({
//       question: q.question,
//       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     }));
  
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quizData }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to get career suggestion');
//       }
  
//       const data = await response.json();
      
//       if (typeof data === 'object' && data !== null) {
//         setCareerSuggestion(data);
//       } else if (typeof data === 'string') {
//         try {
//           const parsedData = JSON.parse(data);
//           setCareerSuggestion(parsedData);
//         } catch (parseError) {
//           const jsonMatch = data.match(/\{[\s\S]*\}/);
//           if (jsonMatch) {
//             const extractedJson = JSON.parse(jsonMatch[0]);
//             setCareerSuggestion(extractedJson);
//           } else {
//             throw new Error('Unable to parse career suggestion data');
//           }
//         }
//       } else {
//         throw new Error('Unexpected response format');
//       }
  
//       addMessage("Here's your personalized career suggestion:", false, "🚀");
//     } catch (error) {
//       console.error('Error getting Gemini suggestion:', error);
//       addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   const resetQuiz = () => {
//     setUserType('');
//     setStudentGrade('');
//     setStream('');
//     setSelectedInterest('');
//     setSelectedStrength('');
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setMessages([]);
//     setCareerSuggestion(null);
//     setCurrentStep(0);
//     addMessage("Let's start over! Are you a student or a professional?", false, "👋");
//   };

//   const renderOptions = () => {
//     switch (currentStep) {
//       case 0:
//         return userTypeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1:
//         return studentGradeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1.5:
//         return streamOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 2:
//         return interestOptions.map(interest => (
//           <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
//         ));
//       case 3:
//         return strengthOptions.map(strength => (
//           <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
//         ));
//       case 4:
//         return questions[currentQuestion].options.map(option => (
//           <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
//         ));
//       default:
//         return null;
//     }
//   };

//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <div>
//           <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//             {careerSuggestion.jobProfiles.map((job, index) => (
//               <li key={index}>{job}</li>
//             ))}
//           </ul>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={resetQuiz} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//           </AnimatePresence>

//           {!showResult && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mt-4"
//             >
//               {renderOptions()}
//             </motion.div>
//           )}

//           {showResult && !isLoading && careerSuggestion && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {renderCareerSuggestion()}
//             </motion.div>
//           )}

//           {isLoading && (
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CombinedCareerAdvisor;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Sparkles, X } from 'lucide-react';
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = [
//   "Technology", "Science", "Arts", "Business", "Healthcare",
//   "Education", "Sports", "Environment", "Social Sciences", "Engineering"
// ];
// const strengthOptions = [
//   "Problem Solving", "Communication", "Leadership", "Creativity",
//   "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
//   "Technical Skills", "Emotional Intelligence"
// ];

// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];

// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className={`flex items-start space-x-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'} max-w-[70%]`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const OptionButton = ({ text, onClick }) => (
//   <Button
//     variant="outline"
//     className="mr-2 mb-2"
//     onClick={onClick}
//   >
//     {text}
//   </Button>
// );

// const CombinedCareerAdvisor = () => {
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [userType, setUserType] = useState('');
//   const [studentGrade, setStudentGrade] = useState('');
//   const [stream, setStream] = useState('');
//   const [selectedInterest, setSelectedInterest] = useState('');
//   const [selectedStrength, setSelectedStrength] = useState('');
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);
//   const [jobTitles, setJobTitles] = useState([]);

//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's create your roadmap!", false, "👋");
//     setTimeout(() => addMessage("Are you a student or a professional?", false, "🤔"), 1000);
//   }, []);

//   useEffect(() => {
//     if (careerSuggestion) {
//       checkJobTitles(careerSuggestion.jobProfiles);
//     }
//   }, [careerSuggestion]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, currentStep]);

//   const scrollToBottom = () => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   };

//   const handleClose = () => {
//     navigate('/');
//   };

//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleOptionClick = (option) => {
//     addMessage(option, true);
//     processUserInput(option);
//   };

//   const processUserInput = (input) => {
//     switch (currentStep) {
//       case 0:
//         setUserType(input);
//         if (input === "Student") {
//           addMessage("Great! Are you in 10th or 12th class?", false, "🎓");
//           setCurrentStep(1);
//         } else {
//           setCurrentStep(2);
//           addMessage("Excellent! Let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1:
//         setStudentGrade(input);
//         if (input === "12th") {
//           addMessage("Which stream have you chosen?", false, "📚");
//           setCurrentStep(1.5);
//         } else {
//           setCurrentStep(2);
//           addMessage("Great! Now, let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1.5:
//         setStream(input);
//         setCurrentStep(2);
//         addMessage("Perfect! Now, let's talk about your interests.", false, "🌟");
//         addMessage("What is your top interest?", false, "🤔");
//         break;
//       case 2:
//         setSelectedInterest(input);
//         setCurrentStep(3);
//         addMessage("Great choice! Now, let's identify your strength.", false, "💪");
//         addMessage("What is your top strength?", false, "🤔");
//         break;
//       case 3:
//         setSelectedStrength(input);
//         setCurrentStep(4);
//         addMessage("Excellent! Now, let's dive deeper with a few more questions.", false, "🧠");
//         setCurrentQuestion(0);
//         addMessage(questions[0].question, false, "❓");
//         break;
//       case 4:
//         setAnswers({ ...answers, [currentQuestion]: input });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           addMessage(questions[currentQuestion + 1].question, false, "❓");
//         } else {
//           setShowResult(true);
//           getGeminiSuggestion();
//         }
//         break;
//       default:
//         addMessage("I'm not sure how to respond to that. Would you like to start over?", false, "😅");
//         break;
//     }
//   };

//   // const getGeminiSuggestion = async () => {
//   //   setIsLoading(true);
//   //   addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//   //   const quizData = questions.map((q, index) => ({
//   //     question: q.question,
//   //     selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//   //   }));
  
//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ quizData }),
//   //     });
  
//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || 'Failed to get career suggestion');
//   //     }
  
//   //     const data = await response.json();
      
//   //     if (typeof data === 'object' && data !== null) {
//   //       setCareerSuggestion(data);
//   //     } else if (typeof data === 'string') {
//   //       try {
//   //         const parsedData = JSON.parse(data);
//   //         setCareerSuggestion(parsedData);
//   //       } catch (parseError) {
//   //         const jsonMatch = data.match(/\{[\s\S]*\}/);
//   //         if (jsonMatch) {
//   //           const extractedJson = JSON.parse(jsonMatch[0]);
//   //           setCareerSuggestion(extractedJson);
//   //         } else {
//   //           throw new Error('Unable to parse career suggestion data');
//   //         }
//   //       }
//   //     } else {
//   //       throw new Error('Unexpected response format');
//   //     }
  
//   //     addMessage("Here's your personalized career suggestion:", false, "🚀");
//   //   } catch (error) {
//   //     console.error('Error getting Gemini suggestion:', error);
//   //     addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   // const handleShowInsights = () => {
//   //   navigate('/dummyinfo');
//   // };

//   const validJobTitles = [
//     "Civil Engineer", "Product Manager", "Pharmacist", "Psychologist",
//     "Architect", "Data Scientist", "Software Engineer", "Financial Analyst",
//     "Biomedical Engineer", "Marketing Analyst", "Mechanical Engineer",
//     "Journalist", "Environmental Scientist", "HR Manager", "Economist"
//   ];

//   const getGeminiSuggestion = async () => {
//     setIsLoading(true);
//     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     const quizData = questions.map((q, index) => ({
//       question: q.question,
//       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     }));
  
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quizData, validJobTitles }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to get career suggestion');
//       }
  
//       const data = await response.json();
      
//       if (typeof data === 'object' && data !== null && validJobTitles.includes(data.career)) {
//         setCareerSuggestion(data);
//         addMessage("Here's your personalized career suggestion:", false, "🚀");
//       } else {
//         throw new Error('Invalid career suggestion');
//       }
//     } catch (error) {
//       console.error('Error getting Maxii suggestion:', error);
//       addMessage(`I'm sorry, there was an error getting your career suggestion. Let's try again.`, false, "😓");
//       resetQuiz();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleShowMore = (jobTitle) => {
//     navigate('/job-info', { state: { jobTitle } });
//   };


//   // const checkJobTitles = async (jobProfiles) => {
//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/job/job-titles`);
//   //     const allJobTitles = await response.json();
//   //     const existingTitles = jobProfiles.filter(profile => allJobTitles.includes(profile));
//   //     setJobTitles(existingTitles);
//   //   } catch (error) {
//   //     console.error('Error checking job titles:', error);
//   //   }
//   // };


//   const checkJobTitles = async (jobProfiles) => {
//     if (!jobProfiles || jobProfiles.length === 0) {
//       console.log('No job profiles to check');
//       return;
//     }
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/job/job-titles`);
//       const allJobTitles = await response.json();
//       const existingTitles = jobProfiles.filter(profile => allJobTitles.includes(profile));
//       setJobTitles(existingTitles);
//     } catch (error) {
//       console.error('Error checking job titles:', error);
//     }
//   };
//   const resetQuiz = () => {
//     setUserType('');
//     setStudentGrade('');
//     setStream('');
//     setSelectedInterest('');
//     setSelectedStrength('');
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setMessages([]);
//     setCareerSuggestion(null);
//     setCurrentStep(0);
//     setJobTitles([]);
//     addMessage("Let's start over! Are you a student or a professional?", false, "👋");
//   };

//   const renderOptions = () => {
//     switch (currentStep) {
//       case 0:
//         return userTypeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1:
//         return studentGradeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1.5:
//         return streamOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 2:
//         return interestOptions.map(interest => (
//           <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
//         ));
//       case 3:
//         return strengthOptions.map(strength => (
//           <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
//         ));
//       case 4:
//         return questions[currentQuestion].options.map(option => (
//           <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
//         ));
//       default:
//         return null;
//     }
//   };

//   // const renderCareerSuggestion = () => (
//   //   <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//   //     <CardHeader className="text-center">
//   //       <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//   //       <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//   //     </CardHeader>
//   //     <CardContent className="space-y-4">
//   //       <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//   //       <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//   //       <div>
//   //         <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//   //         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//   //           {careerSuggestion.jobProfiles.map((job, index) => (
//   //             <li key={index} className="flex items-center justify-between mb-2">
//   //               <span>{job}</span>
//   //               {jobTitles.includes(job) && (
//   //                 <Button
//   //                   onClick={() => handleShowMore(job)}
//   //                   className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded"
//   //                 >
//   //                   Show More
//   //                 </Button>
//   //               )}
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       </div>
//   //     </CardContent>
//   //     <CardFooter>
//   //       <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//   //         Start Over
//   //       </Button>
//   //     </CardFooter>
//   //   </Card>
//   // );

//   // const renderCareerSuggestion = () => (
//   //   <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//   //     <CardHeader className="text-center">
//   //       <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//   //       <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//   //     </CardHeader>
//   //     <CardContent className="space-y-4">
//   //       <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//   //       <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//   //       <div>
//   //         <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//   //         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//   //           {careerSuggestion.jobProfiles.map((job, index) => (
//   //             <li key={index} className="flex items-center justify-between mb-2">
//   //               <span>{job}</span>
//   //               {jobTitles.includes(job) && (
//   //                 <Button
//   //                   onClick={() => handleShowMore(job)}
//   //                   className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded"
//   //                 >
//   //                   Show More
//   //                 </Button>
//   //               )}
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       </div>
//   //       <Button
//   //         onClick={handleShowInsights}
//   //         className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//   //       >
//   //         Show Insights
//   //       </Button>
//   //     </CardContent>
//   //     <CardFooter>
//   //       <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//   //         Start Over
//   //       </Button>
//   //     </CardFooter>
//   //   </Card>
//   // );
//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <Button
//           onClick={() => handleShowMore(careerSuggestion.career)}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white"
//         >
//           More Insights
//         </Button>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={handleClose} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4" ref={chatContainerRef}>
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//           </AnimatePresence>

//           {!showResult && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mt-4"
//             >
//               {renderOptions()}
//             </motion.div>
//           )}

//           {showResult && !isLoading && careerSuggestion && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {renderCareerSuggestion()}
//             </motion.div>
//           )}

//           {isLoading && (
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CombinedCareerAdvisor;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Sparkles, X } from 'lucide-react';
// import config from '../../config';

// const userTypeOptions = ['Student', 'Professional'];
// const studentGradeOptions = ['10th', '12th'];
// const streamOptions = ['Science', 'Arts', 'Commerce'];
// const interestOptions = [
//   "Technology", "Science", "Arts", "Business", "Healthcare",
//   "Education", "Sports", "Environment", "Social Sciences", "Engineering"
// ];
// const strengthOptions = [
//   "Problem Solving", "Communication", "Leadership", "Creativity",
//   "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
//   "Technical Skills", "Emotional Intelligence"
// ];

// const questions = [
//   {
//     question: "Which subject do you enjoy the most?",
//     options: [
//       { value: 'a', label: 'Mathematics or Computer Science' },
//       { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
//       { value: 'c', label: 'Social Sciences or Humanities' },
//       { value: 'd', label: 'Languages or Creative Arts' },
//     ],
//   },
//   {
//     question: "When faced with a problem, how do you prefer to solve it?",
//     options: [
//       { value: 'a', label: 'Using logic, algorithms, or data analysis' },
//       { value: 'b', label: 'Through experimentation and empirical observation' },
//       { value: 'c', label: 'By considering historical context or social implications' },
//       { value: 'd', label: 'Through creative expression or communication' },
//     ],
//   },
//   {
//     question: "Which of these activities do you find most engaging?",
//     options: [
//       { value: 'a', label: 'Coding or working with advanced technologies' },
//       { value: 'b', label: 'Conducting scientific research or experiments' },
//       { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
//       { value: 'd', label: 'Creating digital content or multimedia projects' },
//     ],
//   },
//   {
//     question: "What type of project excites you the most?",
//     options: [
//       { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
//       { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
//       { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
//       { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
//     ],
//   },
//   {
//     question: "How do you prefer to learn new concepts?",
//     options: [
//       { value: 'a', label: 'Through interactive coding platforms or data visualization' },
//       { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
//       { value: 'c', label: 'By participating in online forums or digital think tanks' },
//       { value: 'd', label: 'Through creative software or collaborative online platforms' },
//     ],
//   },
// ];

// const Message = ({ content, isUser, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0 }}
//     className={`flex items-start space-x-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
//   >
//     {!isUser && (
//       <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
//         {icon}
//       </div>
//     )}
//     <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'} max-w-[70%]`}>
//       {content}
//     </div>
//   </motion.div>
// );

// const OptionButton = ({ text, onClick }) => (
//   <Button
//     variant="outline"
//     className="mr-2 mb-2"
//     onClick={onClick}
//   >
//     {text}
//   </Button>
// );

// const CombinedCareerAdvisor = () => {
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [userType, setUserType] = useState('');
//   const [studentGrade, setStudentGrade] = useState('');
//   const [stream, setStream] = useState('');
//   const [selectedInterest, setSelectedInterest] = useState('');
//   const [selectedStrength, setSelectedStrength] = useState('');
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [careerSuggestion, setCareerSuggestion] = useState(null);
//   const [jobTitles, setJobTitles] = useState([]);



//   useNavigate()
//   useEffect(() => {
//     addMessage("Welcome to the Career Advisor! Let's create your roadmap!", false, "👋");
//     setTimeout(() => addMessage("Are you a student or a professional?", false, "🤔"), 1000);
//   }, []);

//   useEffect(() => {
//     if (careerSuggestion) {
//       checkJobTitles(careerSuggestion.jobProfiles);
//     }
//   }, [careerSuggestion]);

//   const handleClose = () => {
//     navigate('/');
//   };


//   const addMessage = (content, isUser = false, icon = "") => {
//     setMessages(prev => [...prev, { content, isUser, icon }]);
//   };

//   const handleOptionClick = (option) => {
//     addMessage(option, true);
//     processUserInput(option);
//   };

//   const processUserInput = (input) => {
//     switch (currentStep) {
//       case 0:
//         setUserType(input);
//         if (input === "Student") {
//           addMessage("Great! Are you in 10th or 12th class?", false, "🎓");
//           setCurrentStep(1);
//         } else {
//           setCurrentStep(2);
//           addMessage("Excellent! Let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1:
//         setStudentGrade(input);
//         if (input === "12th") {
//           addMessage("Which stream have you chosen?", false, "📚");
//           setCurrentStep(1.5);
//         } else {
//           setCurrentStep(2);
//           addMessage("Great! Now, let's talk about your interests.", false, "🌟");
//           addMessage("What is your top interest?", false, "🤔");
//         }
//         break;
//       case 1.5:
//         setStream(input);
//         setCurrentStep(2);
//         addMessage("Perfect! Now, let's talk about your interests.", false, "🌟");
//         addMessage("What is your top interest?", false, "🤔");
//         break;
//       case 2:
//         setSelectedInterest(input);
//         setCurrentStep(3);
//         addMessage("Great choice! Now, let's identify your strength.", false, "💪");
//         addMessage("What is your top strength?", false, "🤔");
//         break;
//       case 3:
//         setSelectedStrength(input);
//         setCurrentStep(4);
//         addMessage("Excellent! Now, let's dive deeper with a few more questions.", false, "🧠");
//         setCurrentQuestion(0);
//         addMessage(questions[0].question, false, "❓");
//         break;
//       case 4:
//         setAnswers({ ...answers, [currentQuestion]: input });
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           addMessage(questions[currentQuestion + 1].question, false, "❓");
//         } else {
//           setShowResult(true);
//           getGeminiSuggestion();
//         }
//         break;
//       default:
//         addMessage("I'm not sure how to respond to that. Would you like to start over?", false, "😅");
//         break;
//     }
//   };

//   // const getGeminiSuggestion = async () => {
//   //   setIsLoading(true);
//   //   addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//   //   const quizData = questions.map((q, index) => ({
//   //     question: q.question,
//   //     selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//   //   }));
  
//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ quizData }),
//   //     });
  
//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || 'Failed to get career suggestion');
//   //     }
  
//   //     const data = await response.json();
      
//   //     if (typeof data === 'object' && data !== null) {
//   //       setCareerSuggestion(data);
//   //     } else if (typeof data === 'string') {
//   //       try {
//   //         const parsedData = JSON.parse(data);
//   //         setCareerSuggestion(parsedData);
//   //       } catch (parseError) {
//   //         const jsonMatch = data.match(/\{[\s\S]*\}/);
//   //         if (jsonMatch) {
//   //           const extractedJson = JSON.parse(jsonMatch[0]);
//   //           setCareerSuggestion(extractedJson);
//   //         } else {
//   //           throw new Error('Unable to parse career suggestion data');
//   //         }
//   //       }
//   //     } else {
//   //       throw new Error('Unexpected response format');
//   //     }
  
//   //     addMessage("Here's your personalized career suggestion:", false, "🚀");
//   //   } catch (error) {
//   //     console.error('Error getting Gemini suggestion:', error);
//   //     addMessage(`I'm sorry, there was an error getting your career suggestion: ${error.message}. Please try again later.`, false, "😓");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   // const handleShowInsights = () => {
//   //   navigate('/dummyinfo');
//   // };

//   const validJobTitles = [
//     "Civil Engineer", "Product Manager", "Pharmacist", "Psychologist",
//     "Architect", "Data Scientist", "Software Engineer", "Financial Analyst",
//     "Biomedical Engineer", "Marketing Analyst", "Mechanical Engineer",
//     "Journalist", "Environmental Scientist", "HR Manager", "Economist"
//   ];

//   const getGeminiSuggestion = async () => {
//     setIsLoading(true);
//     addMessage("Analyzing your responses to provide personalized career suggestions...", false, "🤔");
  
//     const quizData = questions.map((q, index) => ({
//       question: q.question,
//       selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
//     }));
  
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quizData, validJobTitles }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to get career suggestion');
//       }
  
//       const data = await response.json();
      
//       if (typeof data === 'object' && data !== null && validJobTitles.includes(data.career)) {
//         setCareerSuggestion(data);
//         addMessage("Here's your personalized career suggestion:", false, "🚀");
//       } else {
//         throw new Error('Invalid career suggestion');
//       }
//     } catch (error) {
//       console.error('Error getting Maxii suggestion:', error);
//       addMessage(`I'm sorry, there was an error getting your career suggestion. Let's try again.`, false, "😓");
//       resetQuiz();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleShowMore = (jobTitle) => {
//     navigate('/job-info', { state: { jobTitle } });
//   };


//   // const checkJobTitles = async (jobProfiles) => {
//   //   try {
//   //     const response = await fetch(`${config.API_BASE_URL}/job/job-titles`);
//   //     const allJobTitles = await response.json();
//   //     const existingTitles = jobProfiles.filter(profile => allJobTitles.includes(profile));
//   //     setJobTitles(existingTitles);
//   //   } catch (error) {
//   //     console.error('Error checking job titles:', error);
//   //   }
//   // };


//   const checkJobTitles = async (jobProfiles) => {
//     if (!jobProfiles || jobProfiles.length === 0) {
//       console.log('No job profiles to check');
//       return;
//     }
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/job/job-titles`);
//       const allJobTitles = await response.json();
//       const existingTitles = jobProfiles.filter(profile => allJobTitles.includes(profile));
//       setJobTitles(existingTitles);
//     } catch (error) {
//       console.error('Error checking job titles:', error);
//     }
//   };
//   const resetQuiz = () => {
//     setUserType('');
//     setStudentGrade('');
//     setStream('');
//     setSelectedInterest('');
//     setSelectedStrength('');
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResult(false);
//     setMessages([]);
//     setCareerSuggestion(null);
//     setCurrentStep(0);
//     setJobTitles([]);
//     addMessage("Let's start over! Are you a student or a professional?", false, "👋");
//   };

//   const renderOptions = () => {
//     switch (currentStep) {
//       case 0:
//         return userTypeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1:
//         return studentGradeOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 1.5:
//         return streamOptions.map(option => (
//           <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
//         ));
//       case 2:
//         return interestOptions.map(interest => (
//           <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
//         ));
//       case 3:
//         return strengthOptions.map(strength => (
//           <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
//         ));
//       case 4:
//         return questions[currentQuestion].options.map(option => (
//           <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
//         ));
//       default:
//         return null;
//     }
//   };

//   // const renderCareerSuggestion = () => (
//   //   <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//   //     <CardHeader className="text-center">
//   //       <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//   //       <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//   //     </CardHeader>
//   //     <CardContent className="space-y-4">
//   //       <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//   //       <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//   //       <div>
//   //         <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//   //         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//   //           {careerSuggestion.jobProfiles.map((job, index) => (
//   //             <li key={index} className="flex items-center justify-between mb-2">
//   //               <span>{job}</span>
//   //               {jobTitles.includes(job) && (
//   //                 <Button
//   //                   onClick={() => handleShowMore(job)}
//   //                   className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded"
//   //                 >
//   //                   Show More
//   //                 </Button>
//   //               )}
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       </div>
//   //     </CardContent>
//   //     <CardFooter>
//   //       <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//   //         Start Over
//   //       </Button>
//   //     </CardFooter>
//   //   </Card>
//   // );

//   // const renderCareerSuggestion = () => (
//   //   <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//   //     <CardHeader className="text-center">
//   //       <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//   //       <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//   //     </CardHeader>
//   //     <CardContent className="space-y-4">
//   //       <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//   //       <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//   //       <div>
//   //         <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Potential job titles:</h4>
//   //         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//   //           {careerSuggestion.jobProfiles.map((job, index) => (
//   //             <li key={index} className="flex items-center justify-between mb-2">
//   //               <span>{job}</span>
//   //               {jobTitles.includes(job) && (
//   //                 <Button
//   //                   onClick={() => handleShowMore(job)}
//   //                   className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded"
//   //                 >
//   //                   Show More
//   //                 </Button>
//   //               )}
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       </div>
//   //       <Button
//   //         onClick={handleShowInsights}
//   //         className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//   //       >
//   //         Show Insights
//   //       </Button>
//   //     </CardContent>
//   //     <CardFooter>
//   //       <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//   //         Start Over
//   //       </Button>
//   //     </CardFooter>
//   //   </Card>
//   // );
//   const renderCareerSuggestion = () => (
//     <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
//       <CardHeader className="text-center">
//         <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Your Career Suggestion</h2>
//         <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
//         <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
//         <Button
//           onClick={() => handleShowMore(careerSuggestion.career)}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white"
//         >
//           More Insights
//         </Button>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//           Start Over
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Career Advisor</h1>
//           <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={handleClose} />
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           <AnimatePresence>
//             {messages.map((message, index) => (
//               <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
//             ))}
//           </AnimatePresence>

//           {!showResult && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mt-4"
//             >
//               {renderOptions()}
//             </motion.div>
//           )}

//           {showResult && !isLoading && careerSuggestion && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {renderCareerSuggestion()}
//             </motion.div>
//           )}

//           {isLoading && (
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CombinedCareerAdvisor;


import React, { useState, useEffect, useRef  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Sparkles, X, Globe } from 'lucide-react';
import config from '../../config';

// Multilingual support
const languages = {
  en: {
    welcome: "Welcome to the Career Advisor! Let's create your roadmap!",
    userType: "Are you a student or a professional?",
    student: "Student",
    professional: "Professional",
    grade: "Great! Are you in 10th or 12th class?",
    stream: "Which stream have you chosen?",
    interest: "What is your top interest?",
    strength: "What is your top strength?",
    analyzing: "Analyzing your responses to provide personalized career suggestions...",
    suggestion: "Here's your personalized career suggestion:",
    startOver: "Start Over",
    moreInsights: "More Insights",
    error: "I'm sorry, there was an error getting your career suggestion. Let's try again.",
    careerSuggestion: "Your Career Suggestion",
    potentialJobs: "Potential job titles:",
    showMore: "Show More",
  },
  es: {
    welcome: "¡Bienvenido al Asesor de Carreras! ¡Creemos tu hoja de ruta!",
    userType: "¿Eres estudiante o profesional?",
    student: "Estudiante",
    professional: "Profesional",
    grade: "¡Genial! ¿Estás en 10º o 12º grado?",
    stream: "¿Qué rama has elegido?",
    interest: "¿Cuál es tu principal interés?",
    strength: "¿Cuál es tu mayor fortaleza?",
    analyzing: "Analizando tus respuestas para proporcionarte sugerencias de carrera personalizadas...",
    suggestion: "Aquí está tu sugerencia de carrera personalizada:",
    startOver: "Comenzar de nuevo",
    moreInsights: "Más información",
    error: "Lo siento, hubo un error al obtener tu sugerencia de carrera. Intentémoslo de nuevo.",
    careerSuggestion: "Tu Sugerencia de Carrera",
    potentialJobs: "Posibles títulos de trabajo:",
    showMore: "Mostrar más",
  },
  // Add more languages as needed
};

const userTypeOptions = ['Student', 'Professional'];
const studentGradeOptions = ['10th', '12th'];
const streamOptions = ['Science', 'Arts', 'Commerce'];
const interestOptions = [
  "Technology", "Science", "Arts", "Business", "Healthcare",
  "Education", "Sports", "Environment", "Social Sciences", "Engineering"
];
const strengthOptions = [
  "Problem Solving", "Communication", "Leadership", "Creativity",
  "Analytical Thinking", "Teamwork", "Adaptability", "Time Management",
  "Technical Skills", "Emotional Intelligence"
];

const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: [
      { value: 'a', label: 'Mathematics or Computer Science' },
      { value: 'b', label: 'Natural Sciences (Physics, Chemistry, Biology)' },
      { value: 'c', label: 'Social Sciences or Humanities' },
      { value: 'd', label: 'Languages or Creative Arts' },
    ],
  },
  {
    question: "When faced with a problem, how do you prefer to solve it?",
    options: [
      { value: 'a', label: 'Using logic, algorithms, or data analysis' },
      { value: 'b', label: 'Through experimentation and empirical observation' },
      { value: 'c', label: 'By considering historical context or social implications' },
      { value: 'd', label: 'Through creative expression or communication' },
    ],
  },
  {
    question: "Which of these activities do you find most engaging?",
    options: [
      { value: 'a', label: 'Coding or working with advanced technologies' },
      { value: 'b', label: 'Conducting scientific research or experiments' },
      { value: 'c', label: 'Analyzing societal trends or engaging in debates' },
      { value: 'd', label: 'Creating digital content or multimedia projects' },
    ],
  },
  {
    question: "What type of project excites you the most?",
    options: [
      { value: 'a', label: 'Developing an AI algorithm or a blockchain application' },
      { value: 'b', label: 'Designing a sustainable energy solution or a new medical treatment' },
      { value: 'c', label: 'Creating a policy proposal or a social impact initiative' },
      { value: 'd', label: 'Producing a digital marketing campaign or a multimedia presentation' },
    ],
  },
  {
    question: "How do you prefer to learn new concepts?",
    options: [
      { value: 'a', label: 'Through interactive coding platforms or data visualization' },
      { value: 'b', label: 'Via virtual labs or augmented reality simulations' },
      { value: 'c', label: 'By participating in online forums or digital think tanks' },
      { value: 'd', label: 'Through creative software or collaborative online platforms' },
    ],
  },
];

const Message = ({ content, isUser, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className={`flex items-start space-x-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
  >
    {!isUser && (
      <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
        {icon}
      </div>
    )}
    <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'} max-w-[70%]`}>
      {content}
    </div>
  </motion.div>
);

const OptionButton = ({ text, onClick }) => (
  <Button
    variant="outline"
    className="mr-2 mb-2"
    onClick={onClick}
  >
    {text}
  </Button>
);

const CombinedCareerAdvisor = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [stream, setStream] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');
  const [selectedStrength, setSelectedStrength] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [careerSuggestion, setCareerSuggestion] = useState(null);
  const [jobTitles, setJobTitles] = useState([]);
  const [language, setLanguage] = useState('en');
  const scrollableContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollableContainerRef.current) {
      const scrollHeight = scrollableContainerRef.current.scrollHeight;
      const height = scrollableContainerRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      scrollableContainerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStep, showResult]);

  useEffect(() => {
    addMessage(languages[language].welcome, false, "👋");
    setTimeout(() => addMessage(languages[language].userType, false, "🤔"), 1000);
  }, [language]);

  useEffect(() => {
    if (careerSuggestion) {
      checkJobTitles(careerSuggestion.jobProfiles);
    }
  }, [careerSuggestion]);

  const handleClose = () => {
    navigate('/');
  };

  const addMessage = (content, isUser = false, icon = "") => {
    setMessages(prev => [...prev, { content, isUser, icon }]);
  };

  const handleOptionClick = (option) => {
    addMessage(option, true);
    processUserInput(option);
  };

  const processUserInput = (input) => {
    switch (currentStep) {
      case 0:
        setUserType(input);
        if (input === languages[language].student) {
          addMessage(languages[language].grade, false, "🎓");
          setCurrentStep(1);
        } else {
          setCurrentStep(2);
          addMessage(languages[language].interest, false, "🤔");
        }
        break;
      case 1:
        setStudentGrade(input);
        if (input === "12th") {
          addMessage(languages[language].stream, false, "📚");
          setCurrentStep(1.5);
        } else {
          setCurrentStep(2);
          addMessage(languages[language].interest, false, "🤔");
        }
        break;
      case 1.5:
        setStream(input);
        setCurrentStep(2);
        addMessage(languages[language].interest, false, "🤔");
        break;
      case 2:
        setSelectedInterest(input);
        setCurrentStep(3);
        addMessage(languages[language].strength, false, "💪");
        break;
      case 3:
        setSelectedStrength(input);
        setCurrentStep(4);
        addMessage(questions[0].question, false, "❓");
        break;
      case 4:
        setAnswers({ ...answers, [currentQuestion]: input });
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          addMessage(questions[currentQuestion + 1].question, false, "❓");
        } else {
          setShowResult(true);
          getGeminiSuggestion();
        }
        break;
      default:
        addMessage(languages[language].error, false, "😅");
        break;
    }
  };

  const validJobTitles = [
    "Civil Engineer", "Product Manager", "Pharmacist", "Psychologist",
    "Architect", "Data Scientist", "Software Engineer", "Financial Analyst",
    "Biomedical Engineer", "Marketing Analyst", "Mechanical Engineer",
    "Journalist", "Environmental Scientist", "HR Manager", "Economist"
  ];

  const getGeminiSuggestion = async () => {
    setIsLoading(true);
    addMessage(languages[language].analyzing, false, "🤔");
  
    const quizData = questions.map((q, index) => ({
      question: q.question,
      selectedAnswer: q.options.find(option => option.value === answers[index])?.label || "Not answered"
    }));
  
    try {
      const response = await fetch(`${config.API_BASE_URL}/gemini-suggestion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizData, validJobTitles, language }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get career suggestion');
      }
  
      const data = await response.json();
      
      if (typeof data === 'object' && data !== null && validJobTitles.includes(data.career)) {
        setCareerSuggestion(data);
        addMessage(languages[language].suggestion, false, "🚀");
      } else {
        throw new Error('Invalid career suggestion');
      }
    } catch (error) {
      console.error('Error getting Maxii suggestion:', error);
      addMessage(languages[language].error, false, "😓");
      resetQuiz();
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = (jobTitle) => {
    navigate('/job-info', { state: { jobTitle, language } });
  };

  const checkJobTitles = async (jobProfiles) => {
    if (!jobProfiles || jobProfiles.length === 0) {
      console.log('No job profiles to check');
      return;
    }
    try {
      const response = await fetch(`${config.API_BASE_URL}/job/job-titles`);
      const allJobTitles = await response.json();
      const existingTitles = jobProfiles.filter(profile => allJobTitles.includes(profile));
      setJobTitles(existingTitles);
    } catch (error) {
      console.error('Error checking job titles:', error);
    }
  };

  const resetQuiz = () => {
    setUserType('');
    setStudentGrade('');
    setStream('');
    setSelectedInterest('');
    setSelectedStrength('');
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setMessages([]);
    setCareerSuggestion(null);
    setCurrentStep(0);
    setJobTitles([]);
    addMessage(languages[language].welcome, false, "👋");
    setTimeout(() => addMessage(languages[language].userType, false, "🤔"), 1000);
  };

  const renderOptions = () => {
    switch (currentStep) {
      case 0:
        return [languages[language].student, languages[language].professional].map(option => (
          <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
        ));
      case 1:
        return studentGradeOptions.map(option => (
          <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
        ));
      case 1.5:
        return streamOptions.map(option => (
          <OptionButton key={option} text={option} onClick={() => handleOptionClick(option)} />
        ));
      case 2:
        return interestOptions.map(interest => (
          <OptionButton key={interest} text={interest} onClick={() => handleOptionClick(interest)} />
        ));
      case 3:
        return strengthOptions.map(strength => (
          <OptionButton key={strength} text={strength} onClick={() => handleOptionClick(strength)} />
        ));
      case 4:
        return questions[currentQuestion].options.map(option => (
          <OptionButton key={option.value} text={option.label} onClick={() => handleOptionClick(option.value)} />
        ));
      default:
        return null;
    }
  };

  const renderCareerSuggestion = () => (
    <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-900 shadow-lg">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{languages[language].careerSuggestion}</h2>
        <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{careerSuggestion.career}</h3>
        <p className="text-gray-700 dark:text-gray-300">{careerSuggestion.description}</p>
        <Button
          onClick={() => handleShowMore(careerSuggestion.career)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          {languages[language].moreInsights}
        </Button>
      </CardContent>
      <CardFooter>
        <Button onClick={resetQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
          {languages[language].startOver}
        </Button>
      </CardFooter>
    </Card>
  );

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    resetQuiz();
  };

  // Fun fact generator
  const [funFact, setFunFact] = useState('');

  const generateFunFact = async () => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/fun-fact`);
      const data = await response.json();
      setFunFact(data.fact);
    } catch (error) {
      console.error('Error fetching fun fact:', error);
    }
  };

  useEffect(() => {
    generateFunFact();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Career Advisor</h1>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              {/* Add more language options here */}
            </select>
            <X className="w-6 h-6 text-gray-500 cursor-pointer" onClick={handleClose} />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-4">
        <div 
          ref={scrollableContainerRef}
          className="max-w-3xl mx-auto h-full overflow-y-auto space-y-4 pb-4"
        >
          <AnimatePresence>
            {messages.map((message, index) => (
              <Message key={index} content={message.content} isUser={message.isUser} icon={message.icon} />
            ))}
          </AnimatePresence>

          {!showResult && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              {renderOptions()}
            </motion.div>
          )}

          {showResult && !isLoading && careerSuggestion && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderCareerSuggestion()}
            </motion.div>
          )}

          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedCareerAdvisor;