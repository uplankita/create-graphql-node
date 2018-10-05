/* 
Create the apollo server using the type definitions and resolvers
*/

import { ApolloServer } from 'apollo-server-express';
import schemaconfig from './schema';

let typeDefs= schemaconfig.typeDefs;
let resolvers= schemaconfig.resolvers;

const apollo = new ApolloServer({ typeDefs, resolvers });

export default  apollo;