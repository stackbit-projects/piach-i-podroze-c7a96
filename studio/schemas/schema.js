// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import home from './home.js';
import advanced from './advanced.js';
import store from './store.js';
import category from './category.js';
import hero_section from './hero_section.js';
import featured_products_section from './featured_products_section.js';
import featured_categories_section from './featured_categories_section.js';
import store_section from './store_section.js';
import promotion_section from './promotion_section.js';
import testimonials_section from './testimonials_section.js';
import header_section from './header_section.js';
import faq_section from './faq_section.js';
import contact_section from './contact_section.js';
import bulletpoints_section from './bulletpoints_section.js';
import product from './product.js';
import action from './action.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    home,
    advanced,
    store,
    category,
    hero_section,
    featured_products_section,
    featured_categories_section,
    store_section,
    promotion_section,
    testimonials_section,
    header_section,
    faq_section,
    contact_section,
    bulletpoints_section,
    product,
    action
    ])
})
