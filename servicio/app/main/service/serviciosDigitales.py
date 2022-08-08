from flask import request
from flask_restx import Resource

from app.main.controller.serviciosDigitales import ServiciosDigitales
from ..util.dto import ServicioDigitalDto
from typing import Dict, Tuple

api = ServicioDigitalDto.api
serv_digital = ServicioDigitalDto.serv_digital


@api.route('/registrar')
class Registrar(Resource):
    """
        Registrar Informacion
    """
    @api.doc('Registrar en servicios digitales')
    @api.expect(serv_digital, validate=True)
    #@api.expect(serv_digital, validate=True)
    def post(self) -> Tuple[Dict[str, str], int]:
        # get the post data
        post_data = request.json
        return ServiciosDigitales.registrar_informacion(data=post_data)

@api.route('/consultar')
class Registrar(Resource):
    """
        Consultar Informacion
    """
    @api.doc('Consultar los servicios digitales')
    #@api.expect(serv_digital, validate=True)
    def get(self) -> Tuple[Dict[str, str], int]:
        return ServiciosDigitales.consultar_informacion()
