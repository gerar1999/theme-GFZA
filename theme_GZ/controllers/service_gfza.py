from odoo import http


class gzcatalogue(http.Controller):

    @http.route('/Catalogue', auth="public", type="json", methods=['POST'])
    def all_catalogue(self):
        catalogue = http.request.env['gz.catalogue'].search_read([], ['categories', 'image', 'name', 'description',
                                                                      'link_subscription'])
        return catalogue
