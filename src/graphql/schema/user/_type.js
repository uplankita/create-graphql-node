/* 
_type.js :
Define the types and type resolver sand export them
 */

import { gql } from 'apollo-server-express';

const User = gql`
 type User {
    _id: ID
   name: String
   email: String
   phoneNumber: String
   password: String
 }
`;

export const types = () => [User];

export const typeResolvers = {

};