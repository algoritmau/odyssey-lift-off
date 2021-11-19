// Our resolvers object's keys will correspond to our schema's types and fields.
const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client

    // From our dataSources object, we'll gain access to our trackAPI
    // (lowercase here as it's the instance of our TrackAPI class extending
    // RESTDataSource) and its getTracks method.
    tracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks()
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
}

module.exports = resolvers
