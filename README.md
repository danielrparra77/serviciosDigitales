# serviciosDigitales

EL PROYECTO ESTA DIVIDIDO EN DOS CARPETAS PRINCIPALES

front: El cual contiene el proyecto FRONT MEncionado en angular Version 7 dando el sigueinte resultado en visión (ver frontimg.png)

Comando de ejecución despues de la instalación de dependencias "ng serve --aot"

Servcio: creado con python FLASK version 3.10 el cual publica los servicios:

GET: /servicios_digitales/consultar

Usado para que el fornt se alimente de datos y mostrar al usuario los servicios digitales por plataforma

POST: /servicios_digitales/registrar

Se opto por tiempo el uso de una base de datos imitando a mongoDB la cual guarda en un archivo plano un JSON con los documentos que representan a un servicio digital el cual contine la sigueinte estructura:

{
    "plataforma":"string" -- nombre de la plataforma que emite el evento
    "evento":"string" --nombre del evento emitido
    "cantidad":"Entero" -- cantidad de veces que se emite el evento
    "fecha_evento":"fecha" -- valor autocalculado con el momento del consumo del servicio
    "costo":"Entero" -- valor auttocalculado cn el valor dele vento por la cantidad
}

Se utilizó blueprint para apoyar en la documentación del mismo y así obtener el servicio listo para compartyir como se ve en la imagen backImg.png

comando de ejecucion "python manage.py run"