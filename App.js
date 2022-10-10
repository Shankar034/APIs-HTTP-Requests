
// import React from 'react'

// function App(){
//     return React.createElement(
//         'div',
//          {className: 'container'}, 
//     React.createElement('h1', {}, 'My App')
//     )
// }


// function App(){
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id:1, text: 'Comment one'},
//         {id:2, text: 'Comment two'},
//         {id:3, text: 'Comment three'},
//     ]

//     const  loading = false
//     const showComments = true

//     if(loading) return <h1> Loading...</h1>

//     const commentBlock = (
//         <div className="comments">
//             <h3> Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
//     )
//     return (
//         <>
//         <Header/>
//         <div className="container">
//         <h1> {title.toUpperCase()}</h1>
//         <p> {body}</p>

//         {showComments && commentBlock}


//         </div >
//         </>
//  )
// }

// export default App
// import FeedbackItem from "./components/FeedbackItem"

// import {BrowserRouter as Router, Route } from' react-router-dom'
//  import { useState } from 'react'
// import Header from "./components/Header"
// // import FeedbackData from './data/FeedbackData'
// import FeedbackList from './components/FeedbackList'
// import Card from "./components/shared/Card"
// import FeedbackStats from './components/FeedbackStats'
// import FeedbackForm from './components/FeedbackForm'
// import AboutPage from './pages/AboutPage'

// import { FeedbackProvider } from "./context/FeedbackContext"

// import AboutIconLink from "./components/AboutIconLink"
// function App(){

//     // const [feedback, setFeedback] = useState(FeedbackData)

//     // const addFeedback =(newFeedback) =>{
//     //     newFeedback.id = uuidv4()
//     //   setFeedback([newFeedback, ...feedback])

//     // }
//     // const deleteFeedback = (id) => {
//     //     if(window.confirm('Are you sure you want to delete?')){
//     //         setFeedback(feedback.filter((item) => item.id !== id))
//     //     }
//     // }


//     return (
//         <FeedbackProvider>
//         <Router>
//         <Header />
//         <div className="container">
//         <Route exact path='/'>
//         <FeedbackForm handleAdd ={addFeedback} />
//         <FeedbackStats />
//         <FeedbackList  />
//         </Route>
//         <Route path="/about " element={ <AboutPage/>}/>
       

//        <AboutIconLink/>
//         </div>
//         </Router>
//         </FeedbackProvider>
//  )
// }
// export default App

import {BrowserRouter as  Router, Route  } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"
function App(){

    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
        
        <Route exact path='/'
        components={
            <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList  />
        </>
        }
        ></Route>
        <Route path="/about " components={ <AboutPage/>}/>
      

       <AboutIconLink/>
        </div>
        </Router>
        </FeedbackProvider>
 )
}
export default App