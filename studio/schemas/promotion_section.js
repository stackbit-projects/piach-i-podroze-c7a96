export default {
    "type": "object",
    "name": "promotion_section",
    "title": "Promotion",
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
            "type": "string",
            "name": "subtitle",
            "title": "subtitle",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "validation": null
        },
        {
            "type": "image",
            "name": "background_image",
            "title": "Background Image",
            "validation": null
        },
        {
            "type": "action",
            "name": "cta",
            "title": "Call to action",
            "validation": null
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
                    "promotion_section"
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