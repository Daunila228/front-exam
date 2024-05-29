import React from 'react';
import Header from './components/Header';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from './components/PostCard';
import './App.css'

function App() {
  return (
    <div>
      <Header></Header>
      <PostCard></PostCard>
    </div>
  );
}

export default App;
