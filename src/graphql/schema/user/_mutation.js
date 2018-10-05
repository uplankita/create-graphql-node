/* 
_mutation.js :
Define the mutations and their resolvers and export them
 */

import { gql } from 'apollo-server-express';
import Users from '../../../mongo/user';
import { prepare } from '../shared';



const Mutation = gql`
  extend type Mutation {
    addUser(name: String, email: String, phoneNumber: String, password: String) : User
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
    Mutation: {
    addUser: async (root, args, context, info) => {
        const res = await Users.create(args)   
        console.log(res);
        //  insert(args)
        return prepare(await Users.findOne({_id: res._id}))
      }
}
}