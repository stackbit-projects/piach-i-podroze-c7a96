export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "style",
            "title": "Style",
            "initialValue": "primary",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "primary",
                    "secondary",
                    "link"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "arrow",
            "title": "CTA Arrow",
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
                    "action"
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