# CasoPractio3

Objetivo
Bootcamp Desarrollo Web
En esta tarea, utilizarás el patrón Modelo-Vista-Controlador (MVC)
para crear una aplicación web que consulte y muestre
información sobre usuarios utilizando la API pública
JSONPlaceholder.
1
2
DWEB_G04_Caso practico mensual 3.pdf
Pasos a seguir:
Bootcamp Desarrollo Web
1. Descargar archivos:
Descarga los archivos HTML y JavaScript
proporcionados en este ejercicio, que incluyen los archivos para
el modelo, la vista y el controlador.
2. Entender la estructura del proyecto:
Examina cuidadosamente
la estructura del proyecto y la relación entre los archivos
UserModel.js
,
UserView.js
,
UserController.js
y
script.js
. Observa
cómo se han dividido las responsabilidades en el patrón MVC.
Pasos a seguir:
Bootcamp Desarrollo Web
3- Implementar el Modelo (UserModel.js):
Completa la
implementación del modelo (UserModel) en el archivo UserModel.js.
Utiliza Fetch API(Jquery o AXIOS) para realizar una solicitud GET a la
API JSONPlaceholder y obtener los datos de usuarios. Almacena
estos datos en una propiedad de clase users.
4- Implementar la Vista (UserView.js):
Completa la implementación
de la vista (UserView) en el archivo UserView.js. Define un método
displayUsers que reciba los datos de usuarios y los muestre en la
página HTML. Utiliza jQuery para manipular el DOM y crear
elementos HTML dinámicamente.
3
4
DWEB_G04_Caso practico mensual 3.pdf
Pasos a seguir:
Bootcamp Desarrollo Web
5- Implementar el Controlador (UserController.js):
Completa la
implementación del controlador (UserController) en el archivo
UserController.js. Define un método fetchAndDisplayUsers que utilice
el modelo para obtener los datos de usuarios y la vista para
mostrarlos en la página.
6- Integrar el Controlador en el script principal (script.js):
En el
archivo script.js, crea instancias del modelo (UserModel), la vista
(UserView) y el controlador (UserController). Llama al método
fetchAndDisplayUsers del controlador para iniciar el proceso de
obtención y visualización de datos.
Pasos a seguir:
Bootcamp Desarrollo Web
7- Probar la aplicación:
Abre el archivo HTML en tu navegador y
verifica que la aplicación funcione correctamente. Deberías ver
una lista de usuarios cargada desde la API JSONPlaceholder.
8- Personalización opcional:
Si te sientes cómodo, experimenta con
la personalización de la aplicación agregando nuevas
funcionalidades o mejorando el diseño visual.
5
6
DWEB_G04_Caso practico mensual 3.pdf
