// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import category from './Categories'
import restaurant from './Restaurant'
import dish from './Dish'
import featured from './Featured'
import users from './Users'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    restaurant,
    category,
    dish,
    featured,
    users,
  ]),
})

