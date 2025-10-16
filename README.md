# ACERCA DE
Herramienta CLI para convertir entre las medidas básicas de medición de almacenamiento: bytes, kilobytes, megabytes, gigabytes y terabytes. Implementado puramente en JS (node.js).

## Características
**Conversión multidireccional:** La herramienta permite convertir utilizando cualquier unidad (de las mencionadas) como entrada hacia cualquiera de ellas como salida.</br>
**Conversión múltiple:** Usando el argumento `all` se convertirá desde la unidad de entrada a todas las restantes.</br>
**Validación robusta** que evita y maneja adecuadamente casos inválidos o potencialmente maliciosos. </br>
**Español:** Interfaz de usuario completamente en español.</br>

## Instalación
### Clonar el repositorio:
`git clone` https://github.com/dystopiaschild/conversor-memoria</br>
`cd conversor-memoria`
### Instalar como comando global:
`npm install -g`

## Uso
### Ejemplos en línea de comandos
`memconvert 500 mb gb`</br>
>Salida: Listo! 500 mb -> 0.4883 gigabytes</br>

`memconvert 1.5 gb mb`</br>
>Salida: Listo! 1.5 gb -> 1536.0000 megabytes</br>

`memconvert 1 gb all`</br>
>Salida: Listo! 1 gb equivale a:</br>
1073741824.0000 bytes</br>
1048576.0000 kilobytes</br>
1024.0000 megabytes</br>
0.0010 terabytes</br>

Modo ayuda: `memconvert --help` o `memconvert -h`
