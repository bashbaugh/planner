export const schema = gql`
  type Task {
    id: String!
    title: String!
    details: String!
    date: DateTime!
    due: DateTime
    completed: Boolean!
  }

  type Query {
    tasks: [Task!]!
  }

  input CreateTaskInput {
    title: String!
    details: String!
    date: DateTime!
    due: DateTime
    completed: Boolean!
  }

  input UpdateTaskInput {
    title: String
    details: String
    date: DateTime
    due: DateTime
    completed: Boolean
  }
`
