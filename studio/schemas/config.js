export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "path_prefix",
            "title": "Base URL",
            "description": "The base URL of this site. Useful for sites hosted under specific path, e.g.: https://www.example.com/my-site/",
            "hidden": true,
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "initialValue": "green",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "cyan",
                    "green",
                    "yellow"
                ]
            }
        },
        {
            "type": "string",
            "name": "snipcart_api_key",
            "title": "Snipcart public API key",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "favicon",
            "title": "Favicon",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo_light",
            "title": "Logo Light",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "logo_dark",
            "title": "Logo Dark",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "hamburger_background_image",
            "title": "Hamburger Menu Background Image",
            "validation": null
        },
        {
            "type": "image",
            "name": "bg_image_primary",
            "title": "Product Left Background Image",
            "validation": null
        },
        {
            "type": "number",
            "name": "bg_image_primary_opacity",
            "title": "Product Left Background Image Opacity",
            "description": "An integer between 0 and 100. A lower value makes the image more transparent",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "image",
            "name": "bg_image_secondary",
            "title": "Product Right Background Image",
            "validation": null
        },
        {
            "type": "image",
            "name": "bg_image_product",
            "title": "Product Nav Background Image",
            "validation": null
        },
        {
            "type": "array",
            "name": "main_menu",
            "title": "Navigation Links",
            "description": "List of navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "footer_text",
            "title": "Footer Text",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Site Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/data/config.json"
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}