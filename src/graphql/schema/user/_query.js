/* 
_type.js :
Define the queries and query resolvers and export them
 */

import { gql } from 'apollo-server-express';
import Users from '../../../mongo/user';
import { prepare } from '../shared';
import { ObjectId } from 'mongodb';

// Creating the query
const Query = gql`
 extend type Query {
    user(id:String): User
    users:[User]
 }
`;

//Exporting the query type
export const queryTypes = () => [Query];


//Exporting the query resolvers
export const queryResolvers = {
 Query: {
   users: {resolve: () => {
    return new Promise((resolve, reject) => {
      Users.find({},{password:0},(err, todos) => {
        if (err) reject(err)
        else resolve(todos.map(prepare));
      })})}},
   user: async (_,args) => { return prepare( await Users.findOne({_id:ObjectId(args.id)},{password:0}))}
 }
};