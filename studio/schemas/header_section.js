export default {
    "type": "object",
    "name": "header_section",
    "title": "Header section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": null
        },
        {
            "type": "image",
            "name": "background_image",
            "title": "Background image",
            "validation": null
        },
        {
            "type": "string",
            "name": "headline",
            "title": "Headline",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Subtitle",
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
                    "header_section"
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
            "title": "section_id"
        }
    }
}