from app.main.model.serviciosDigitales import serviciosDigitalesModel
from datetime import datetime
from typing import Dict, Tuple

_serviciosDigitalesModel = serviciosDigitalesModel()

class ServiciosDigitales:

    @staticmethod
    def registrar_informacion(data: Dict[str, str]) -> Tuple[Dict[str, str], int]:
        try:
            # fetch the data
            plataforma=data.get('plataforma')
            evento=data.get('evento')
            cantidad=data.get('cantidad')
            fecha_evento=datetime.now()
            _serviciosDigitalesModel.addServicio({
                "plataforma":plataforma,
                "evento":evento,
                "cantidad":cantidad,
                "fecha_evento":fecha_evento.strftime("%Y-%m-%d %H:%M")
            })
            response_object = {
                'status': 'success',
                'message': 'Información registrada exitosamente'
            }
            return response_object, 200

        except Exception as e:
            print(e)
            response_object = {
                'status': 'fail',
                'message': 'Try again',
                'e': e
            }
            return response_object, 500

    @staticmethod
    def consultar_informacion() -> Tuple[Dict[str, str], int]:
        try:
            servicios = _serviciosDigitalesModel.getData()
            response_object = {
                'status': 'success',
                'servicios': servicios,
                'message': 'Información consultada exitosamente'
            }
            return response_object, 200

        except Exception as e:
            print(e)
            response_object = {
                'status': 'fail',
                'message': 'Try again'
            }
            return response_object, 500
