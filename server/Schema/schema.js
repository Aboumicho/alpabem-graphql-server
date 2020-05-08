const graphql = require("graphql");
const axios = require("axios")
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLList, GraphQLBoolean} = graphql;

// ****** POSTS *************


const content = new GraphQLObjectType({
    name: "content",
    fields: () => ({
        rendered: {type: GraphQLString}
    })
})

const excerpt = new GraphQLObjectType({
    name: "excerpt",
    fields: () => ({
        rendered: {type: GraphQLString},
        protected: {type: GraphQLBoolean}
    })
})

const title = new GraphQLObjectType({
    name: "title",
    fields: () => ({
        rendered: {type: GraphQLString},
    })
})


const PostType = new GraphQLObjectType({
    name: "Posts",
    fields: () => ({
        id: {type: GraphQLInt},
        status: {type: GraphQLString},
        slug: {type: GraphQLString},
        date: {type: GraphQLString},
        date_gmt: {type: GraphQLString},
        status: {type: GraphQLString},
        author: {type: GraphQLInt},
        featured_media: {type: GraphQLInt},
        comment_status: {type: GraphQLString},
        ping_status: {type: GraphQLString},
        sticky: {type: GraphQLBoolean},
        template: {type: GraphQLString},
        content: {type: content},
        excerpt: {type: excerpt},
        modified: {type: GraphQLString},
        modified_gmt: {type: GraphQLString},
        title: {type: title},
        format: {type: GraphQLString}
    })
});

//********* PAGES ******/

const PagesType = new GraphQLObjectType({
    name: "Pages",
    fields: () => ({
        id: {type: GraphQLInt},
        date: {type: GraphQLString},
        date_gmt: {type: GraphQLString},
        guid: {type: title},
        modified: {type: GraphQLString},
        slug: {type: GraphQLString},
        status: {type: GraphQLString},
        type: {type: GraphQLString},
        title: {type: title},
        content: {type: content},
        excerpt: {type: excerpt},
        author: {type: GraphQLInt},
        featured_media: {type: GraphQLInt},
        parent: {type: GraphQLInt},
        comment_status: {type: GraphQLString},
        menu_order: {type: GraphQLInt},
        ping_status: {type: GraphQLString},
    })
})

//********** MEDIA */
const thumbnail = new GraphQLObjectType({
    name: "thumbnail",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const medium = new GraphQLObjectType({
    name: "medium",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const medium_large = new GraphQLObjectType({
    name: "medium_large",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const tiny_lazy = new GraphQLObjectType({
    name: "tiny_lazy",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const mtsnb_thumb = new GraphQLObjectType({
    name: "mtsnb_thumb",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const rpwe_thumbnail = new GraphQLObjectType({
    name: "rpwe_thumbnail",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const woocommerce_thumbnail = new GraphQLObjectType({
    name: "woocommerce_thumbnail",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const woocommerce_single = new GraphQLObjectType({
    name: "woocommerce_single",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const woocommerce_gallery_thumbnail = new GraphQLObjectType({
    name: "woocommerce_gallery_thumbnail",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const shop_catalog = new GraphQLObjectType({
    name: "shop_catalog",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const shop_single = new GraphQLObjectType({
    name: "shop_single",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const shop_thumbnail = new GraphQLObjectType({
    name: "shop_thumbnail",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const full = new GraphQLObjectType({
    name: "full",
    fields: () => ({
        file: {type: GraphQLString},
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        source_url: {type: GraphQLString}
    })
})

const sizes = new GraphQLObjectType({
    name: "sizes",
    fields: ()=> ({
      thumbnail: {type: thumbnail},
      medium: {type: medium},
      medium_large: {type: medium_large},
      tiny_lazy: {type: tiny_lazy},
      mtsnb_thumb: {type: mtsnb_thumb},
      rpwe_thumbnail: {type: rpwe_thumbnail},
      woocommerce_thumbnail : {type: woocommerce_thumbnail},
      woocommerce_single: {type: woocommerce_single},
      woocommerce_gallery_thumbnail: {type: woocommerce_gallery_thumbnail},
      shop_catalog: {type: shop_catalog},
      shop_single: {type: shop_single},
      shop_thumbnail: {type: shop_thumbnail},
      full: {type: full}
    })
})

const mediaDetails = new GraphQLObjectType({
    name: "media_details",
    fields:() => ({
        width: {type: GraphQLInt},
        height: {type: GraphQLInt},
        file: {type: GraphQLString},
        sizes: {type: sizes}
    })
})

const MediaType = new GraphQLObjectType({
    name: "media_type",
    fields: () => ({
        id: {type: GraphQLInt},
        date: {type: GraphQLString},
        date_gmt: {type: GraphQLString},
        guid: {type: title},
        modified: {type: GraphQLString},
        slug: {type: GraphQLString},
        status: {type: GraphQLString},
        type: {type: GraphQLString},
        title: {type: title},
        description: {type: content},
        excerpt: {type: excerpt},
        caption: {type: excerpt},
        author: {type: GraphQLInt},
        alt_text: {type: GraphQLString},
        media_type: {type: GraphQLString},
        mime_type: {type: GraphQLString},
        featured_media: {type: GraphQLInt},
        parent: {type: GraphQLInt},
        comment_status: {type: GraphQLString},
        menu_order: {type: GraphQLInt},
        ping_status: {type: GraphQLString},
        media_details: {type: mediaDetails}
        
    })
})

//******************** Product */
const ProductType = new GraphQLObjectType({
    name: "product",
    fields: () => ({
        id: {type: GraphQLInt},
        date: {type: GraphQLString},
        date_gmt: {type: GraphQLString},
        guid: {type: title},
        modified: {type: GraphQLString},
        slug: {type: GraphQLString},
        status: {type: GraphQLString},
        type: {type: GraphQLString},
        title: {type: title},
        content: {type: content},
        excerpt: {type: excerpt},
        featured_media: {type: GraphQLInt},
        comment_status: {type: GraphQLString},
        ping_status: {type: GraphQLString},
        template: {type: GraphQLString}
    })
})


const RootPost = new GraphQLObjectType({
    name: 'RootPostType',
    fields: {
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return axios.get('https://alpabem.qc.ca/wp-json/wp/v2/posts').then(res => res.data);
            }
        },
        pages: {
            type: new GraphQLList(PagesType),
            resolve(parent, args){
                return axios.get("https://alpabem.qc.ca/wp-json/wp/v2/pages").then(res => res.data)
            }
        },
        media_type: {
            type: new GraphQLList(MediaType),
            resolve(parent, args){
                return axios.get("https://alpabem.qc.ca/wp-json/wp/v2/media").then(res=>res.data)
            }
        },
        product: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return axios.get("https://alpabem.qc.ca/wp-json/wp/v2/product").then(res=>res.data)
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootPost
})