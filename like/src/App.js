import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import buttonStyle from "./main.css"

// Replicate the following behavior using React.

// start like button at 0
let likeNums = 0
// storage for 'likes' and 'like'
const likes = ["likes", "like"]

function App() {
  // The count on the button should increase upon click
  const [likeNum, addLike] = useState(0)

  // increment likeNums by 1 per click
  function handleClick() {
    addLike(likeNums++)
  }

  // The text on the like button should correctly pluralize itself. For example: 0 likes, 1 like, 2 likes ...
  function pluralLikes(e) {
    if (likeNums === 1) {
      return (e = e[1])
    } else {
      return (e = e[0])
    }
  }

  return (
    <div className="buttonDiv">
      <button className="likeButton" onClick={handleClick}>
        {likeNums} {pluralLikes(likes)}
      </button>
    </div>
  )
}

export default App
