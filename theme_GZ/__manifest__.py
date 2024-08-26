{
    'name': 'GFZA Theme',
    'description': 'GFZA website theme',
    'category': 'Theme',
    'sequence': 10,
    'version': '1.0',
    'depends': ['website'],
    'data': [
        'security/ir.model.access.csv',
        'views/header.xml',
        'views/homepage.xml',
        'views/footer.xml',
        'views/snippets/service_gfza.xml',
        'views/snippets/snippets.xml',
        'views/gz_catalog.xml',

    ],
    'assets': {
        'web.assets_frontend': [
            "theme_GZ/static/src/scss/header.scss",
            "theme_GZ/static/src/scss/homepage.scss",
            "theme_GZ/static/src/scss/footer.scss",
            "theme_GZ/static/src/js/services_gfza.js",

            "theme_GZ/static/src/owlcarousel/assets/owl.carousel.min.css",
            "theme_GZ/static/src/owlcarousel/assets/owl.theme.default.min.css",
            "theme_GZ/static/src/owlcarousel/owl.carousel.min.js",
            "theme_GZ/static/src/js/auto-carousel.js",

        ],

    },

    'images': [
    ],
    'snippet_lists': {
    },
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
