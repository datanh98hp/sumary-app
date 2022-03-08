import React from 'react'
import "./card.css"
export default function Card() {
  return (
    <div className='card'>
      <div className='group'>
        <h3>Title</h3>
        <img src='https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='img' />
        <div className='content'>
          <p>sub titile</p>
        </div>
      </div>
    </div>
  );
}
