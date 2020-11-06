import React from "react"
import AddBookmark from "../components/AddBookmark"
import Bookmark from "../components/Bookmark"
import "./index.css"
import { gql, useQuery } from "@apollo/client"

const GET_ALL_BOOKMARKS = gql`
  {
    allBookmarks {
      name
      url
      desc
    }
  }
`

export default function Home() {
  const { data, loading, refetch } = useQuery(GET_ALL_BOOKMARKS)
  return (
    <>
      <AddBookmark refetch={refetch} />
      <div className="bookmark-list">
        {loading && <div className="loading">Loading...</div>}
        {data &&
          data.allBookmarks.map((b, i) => {
            return <Bookmark bookmark={b} key={i} />
          })}
      </div>
    </>
  )
}
