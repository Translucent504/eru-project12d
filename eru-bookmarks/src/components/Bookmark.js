import React from "react"
import "./Bookmark.css"

const Bookmark = ({ bookmark }) => {
  return (
    <div className="container-bookmark">
      <form>
        <div className="labels">
          <label htmlFor="name">Name:</label>
          <label htmlFor="url">Url:</label>
          <label htmlFor="desc">Description:</label>
        </div>
        <div className="inputs">
          <input disabled name="name" value={bookmark.name} type="text" />
          <input disabled className="url" name="url" value={bookmark.url} type="text" />
          <textarea disabled name="desc" value={bookmark.desc} type="text" />
        </div>
      </form>
    </div>
  )
}

export default Bookmark
