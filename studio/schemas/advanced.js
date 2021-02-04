export default {
    "type": "document",
    "name": "advanced",
    "title": "Advanced Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "page_css_class",
            "title": "Page CSS class",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "white_header",
            "title": "White header",
            "validation": null
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Page sections",
            "validation": null,
            "of": [
                {
                    "type": "hero_section"
                },
                {
                    "type": "header_section"
                },
                {
                    "type": "featured_products_section"
                },
                {
                    "type": "featured_categories_section"
                },
                {
                    "type": "testimonials_section"
                },
                {
                    "type": "promotion_section"
                },
                {
                    "type": "store_section"
                },
                {
                    "type": "faq_section"
                },
                {
                    "type": "bulletpoints_section"
                },
                {
                    "type": "contact_section"
                }
            ]
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "advanced"
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