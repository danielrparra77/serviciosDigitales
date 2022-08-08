from flask_restx import Namespace, fields


class ServicioDigitalDto:
    api = Namespace('servicios_digitales', description='Operaciones de servicios digitales')
    serv_digital = api.model('servicios_digitales', {
        'plataforma': fields.String(required=True, description='plataforma en la que se ejecuta el evento'),
        'evento': fields.String(required=True, description='evento ejecutado'),
        'cantidad': fields.Integer(required=True, description='cantidad de veces que se ejecuta el evento'),
    })