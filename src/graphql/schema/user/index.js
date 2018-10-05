/* 
index.js :
Combines all the types, queries, input types, mutations and resolvers and export them
 */

import { types, typeResolvers } from './_type';
import { queryTypes, queryResolvers } from './_query';
import inputTypes from './_input';
import { mutationTypes, mutationResolvers } from './_mutation';

export default {
 types: () => [types, queryTypes, inputTypes, mutationTypes],
 resolvers: Object.assign(queryResolvers, mutationResolvers, typeResolvers),
};