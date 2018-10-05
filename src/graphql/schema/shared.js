/* 
Export all function that would be shared by schema definitions
*/


// Convert mongodb ObjectId to string
export const prepare = (o) => {
    o=o.toJSON();
    delete o.__v;
    o._id = o._id.toString()
    return o
  }

