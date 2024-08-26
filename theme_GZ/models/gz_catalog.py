from odoo import models, fields


class catalogue(models.Model):
    _name = 'gz.catalogue'
    categories = fields.Char("categories")
    image = fields.Binary(string='Image', required=True)

    name = fields.Char(required=True)

    link_subscription = fields.Char(required=True, default='http://145.239.54.106:8000/licence')

    description = fields.Text(required=True)

    #catalogues_id = fields.Many2one('gz.catalogue', string='Service',required=False, )
