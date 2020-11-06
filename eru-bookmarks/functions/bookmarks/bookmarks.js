const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
const q = faunadb.query

const typeDefs = gql`
  type Query {
    allBookmarks: [Bookmark!]
  }
  type Bookmark {
    name: String!
    url: String!
    desc: String!
  }
  type Mutation {
    createBookmark(name: String!, url: String!, desc: String!): Bookmark
  }
`

const resolvers = {
  Query: {
    allBookmarks: async () => {
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      const result = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("bookmarks"))),
          q.Lambda("bkref", q.Get(q.Var("bkref")))
        )
      )
      return result.data.map(b => b.data)
    },
  },
  Mutation: {
    createBookmark: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      await client.query(
        q.Create(q.Collection("bookmarks"), {
          data: args,
        })
      )
      return args
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
