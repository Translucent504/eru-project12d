import React from "react"
import AddBookmark from "../components/AddBookmark"
import Bookmark from "../components/Bookmark"
import "./index.css"

const bookmarks = [
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
  {
    name: "GOOGLE",
    url: "www.google.com",
    desc: "THE SEARCH ENGINE",
  },
]

export default function Home() {
  return (
    <>
      <AddBookmark />
      <div className="bookmark-list">
        {bookmarks.map((b, i) => {
          return <Bookmark bookmark={b} key={i} />
        })}
      </div>
    </>
  )
}
