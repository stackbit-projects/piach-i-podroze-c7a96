export default {
    "type": "object",
    "name": "testimonials_section",
    "title": "Testimonials",
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
            "name": "testimonials",
            "title": "Testimonials",
            "description": "A list of testimonials",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "text",
                            "title": "Text",
                            "validation": null
                        },
                        {
                            "type": "object",
                            "name": "author",
                            "title": "Author",
                            "validation": null,
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "name",
                                    "title": "Name",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "location",
                                    "title": "Location",
                                    "validation": null
                                }
                            ]
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "text"
                        }
                    }
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
                    "testimonials_section"
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