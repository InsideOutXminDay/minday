import React, { useState, useEffect, useReducer } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Post from './pages/post';
import Mind from './pages/mind';
import New from './pages/new';
import Edit from './pages/edit';
import Detail from './pages/detail';
import Home from './pages/Home';
import Diary from './pages/Diary';
import NewDiary from './pages/NewDiary.js';
import SettingPage from './pages/SettingPage.js';
import Intro from './pages/Intro.js';
import Contents from './pages/Contents.js';
//import Login from './pages/Login.js';
import LoginForm from './components/Auth/LoginForm.js';
import SignUp from './pages/SignUp.js';
import axios from 'axios';

// diary 데이터
import Ask from './pages/Ask.js';

function App() {
  //인증 관련
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setAuthToken(token);
      window.history.replaceState({}, document.title, window.location.pathname); // remove token from URL
    }
  }, []);

  const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['authorization'];
    }
    setToken(token);
  };

  const handleLogout = () => {
    setAuthToken('');
  };

  return (
    <BrowserRouter>
      <div className="App">
        {token && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home/:id" element={<Home token={token} />} />{' '}
          {
            <Route
              path="/login"
              element={<LoginForm setToken={setAuthToken} />}
            />
          }
          {<Route path="/join" element={<SignUp />} />}
          <Route path="/ask/:id" element={<Ask token={token} />} />{' '} 
          {/* <Route path='/find' element={<회원정보 찾기 />}/> */}
          <Route path="/diary/:id" element={<Diary token={token} />} />{' '}
          <Route path="/newdiary" element={<NewDiary token={token}/>} />{' '} 
          <Route path="/contents" element={<Contents token={token}/>} />{' '}
          <Route path="/setting/:id" element={<SettingPage token={token}/>} />{' '}
          <Route path="/post" element={<Post token={token} />} />
          <Route path="/mind" element={<Mind token={token}/>} />
          <Route path="/new/:id" element={<New token={token}/>} />
          <Route path="/edit/:id" element={<Edit token={token}/>} />
          <Route path="/detail/:id" element={<Detail token={token}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
