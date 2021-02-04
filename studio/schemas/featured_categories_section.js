export default {
    "type": "object",
    "name": "featured_categories_section",
    "title": "Categories Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": null
        },
        {
            "type": "array",
            "name": "featured_categories",
            "title": "Featured Categories",
            "validation": null,
            "of": [
                {
                    "type": "reference",
                    "to": [
                        {
                            "type": "category"
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
                    "featured_categories_section"
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