import { Suspense } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AddEvent from './components/AddEvent'
import React from 'react';

function App() {

  const EventDetails=React.lazy(()=>import("../src/components/EventDetails"))
  const NotFound=React.lazy(()=>import("./components/NotFound"))
  const Events=React.lazy(()=>import("../src/components/Events"))

  return (
    <>
     <Suspense fallback={<p>loading . . .</p>}>
     <NavigationBar/>
     <Routes>
       <Route path="/events">
        
        <Route index element={<Events/>}/>
        <Route path='AddEvent' element={<AddEvent/>}/>
        <Route path='details/:nom' element={<EventDetails/>}/>
        
       </Route>
       <Route path='AddEvent' element={<AddEvent/>}/>
       <Route path='*' element={<NotFound/>}/>
       
     </Routes>
     </Suspense>
    </>
  )
}

export default App
