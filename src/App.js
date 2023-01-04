import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './componentss/Error';
import Header from './componentss/Header';
import FormPage from './componentss/form/FormPage';
import View from './componentss/form/View';
import DisplayData from './componentss/Searchbar_Table/DisplayData';
import Edit from './componentss/form/Edit';
import SignIn from "./componentss/SignIn_SignUp/SignIn"
import SignUp from "./componentss/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} >
          <Route path=":email" element={<Header/>}/>
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/form/:email" element={<FormPage />} />
        <Route path="/edit/:_id" element={<Edit />} />
        <Route path="/display/:email" element={<DisplayData />} />
        <Route path="/view/:_id" element={<View />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>


  )
}

export default App
