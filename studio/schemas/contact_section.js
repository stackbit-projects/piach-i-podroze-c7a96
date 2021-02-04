export default {
    "type": "object",
    "name": "contact_section",
    "title": "Contact Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "validation": null
        },
        {
            "type": "string",
            "name": "address",
            "title": "Address",
            "validation": null
        },
        {
            "type": "string",
            "name": "phone",
            "title": "Phone",
            "validation": null
        },
        {
            "type": "string",
            "name": "email",
            "title": "Email",
            "validation": null
        },
        {
            "type": "string",
            "name": "mapUrl",
            "title": "Map URL",
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
                    "contact_section"
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