export default {
    "type": "object",
    "name": "faq_section",
    "title": "FAQ Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": null
        },
        {
            "type": "array",
            "name": "questions",
            "title": "Questions",
            "description": "List of questions to show on the FAQ page",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "question",
                            "title": "Question",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "answer",
                            "title": "Answer",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "question"
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
                    "faq_section"
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