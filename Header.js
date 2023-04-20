import React from 'react'
import './App.css';

function Header() {
  return (
    <div className="title">
      <h1 style={{
        fontFamily: 'Dancing Script, cursive',
        fontSize: '3rem',
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'white',
      }}>Quote Generator</h1>
      <p style={{
        fontSize: '1.2rem',
        textAlign: 'center',
        marginBottom: '0.5rem',
        color: 'orange',
      }}>Get inspired by our collection of quotes from famous authors, poets, and thinkers.</p>
    </div>
  )
}

export default Header;

