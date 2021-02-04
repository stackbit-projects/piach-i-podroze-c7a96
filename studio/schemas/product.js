export default {
    "type": "document",
    "name": "product",
    "title": "Product",
    "fields": [
        {
            "type": "string",
            "name": "id",
            "title": "ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": null
        },
        {
            "type": "string",
            "name": "description",
            "title": "Description",
            "validation": null
        },
        {
            "type": "string",
            "name": "price",
            "title": "Price",
            "validation": null
        },
        {
            "type": "number",
            "name": "order",
            "title": "Order",
            "description": "numerical order of sorting products",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "image",
            "name": "default_thumbnail_image",
            "title": "Default Thumbnail Image",
            "validation": null
        },
        {
            "type": "image",
            "name": "default_original_image",
            "title": "Default Original Image",
            "validation": null
        },
        {
            "type": "reference",
            "name": "category",
            "title": "Category",
            "validation": null,
            "to": [
                {
                    "type": "category"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "featured",
            "title": "Featured",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "product"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Directory",
            "description": "The directory path where this file is stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/pages"
                ]
            }
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}