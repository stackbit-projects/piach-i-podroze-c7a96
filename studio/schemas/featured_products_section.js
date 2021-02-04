export default {
    "type": "object",
    "name": "featured_products_section",
    "title": "Featured Products Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "light_title",
            "title": "Light title",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "icon",
            "title": "Show Heart Icon",
            "validation": null
        },
        {
            "type": "array",
            "name": "featured_products",
            "title": "Featured Products",
            "validation": null,
            "of": [
                {
                    "type": "reference",
                    "to": [
                        {
                            "type": "product"
                        }
                    ]
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "featured_products_section"
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
                    "object"
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