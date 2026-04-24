# Requirements Document

## Introduction

Esta funcionalidad implementa el backend real del formulario de contacto del sitio web WeByHudson.
Actualmente el formulario en React simula el envío con un `setTimeout`. El objetivo es crear un
servicio Spring Boot que exponga un endpoint REST, persista los contactos en PostgreSQL y envíe
una notificación por email al equipo cada vez que se recibe un nuevo mensaje. El frontend debe
actualizarse para consumir el endpoint real en lugar de la simulación.

## Glossary

- **Contact_API**: Servicio Spring Boot que expone el endpoint REST `/api/contact`.
- **Contact**: Entidad que representa un mensaje enviado desde el formulario, con campos: nombre, email, teléfono (opcional) y mensaje.
- **Contact_Repository**: Componente de acceso a datos responsable de persistir y recuperar entidades `Contact` en PostgreSQL.
- **Email_Service**: Componente responsable de enviar notificaciones por email usando Spring Mail (JavaMail).
- **Frontend**: Aplicación React + Vite que contiene el formulario de contacto (`Form.jsx`).
- **Notification_Email**: Email enviado al equipo de WeByHudson cuando se recibe un nuevo `Contact`.
- **CORS**: Mecanismo de seguridad del navegador (Cross-Origin Resource Sharing) que debe configurarse para permitir peticiones del `Frontend` al `Contact_API`.

---

## Requirements

### Requirement 1: Endpoint de recepción de contactos

**User Story:** Como miembro del equipo de WeByHudson, quiero recibir los datos del formulario de contacto a través de un endpoint REST, para que los mensajes de clientes potenciales lleguen al sistema de forma estructurada.

#### Acceptance Criteria

1. WHEN el `Frontend` envía una petición `POST /api/contact` con un cuerpo JSON válido que contiene `name`, `email` y `message`, THE `Contact_API` SHALL responder con HTTP 201 y el objeto `Contact` creado (incluyendo su `id` y `createdAt`).
2. WHEN el `Frontend` envía una petición `POST /api/contact` con el campo `phone` incluido, THE `Contact_API` SHALL persistir el valor de `phone` junto con los demás campos del `Contact`.
3. WHEN el `Frontend` envía una petición `POST /api/contact` sin el campo `phone`, THE `Contact_API` SHALL aceptar la petición y persistir el `Contact` con `phone` nulo.
4. IF el cuerpo de la petición `POST /api/contact` omite `name`, `email` o `message`, THEN THE `Contact_API` SHALL responder con HTTP 400 y un mensaje de error que identifique el campo faltante.
5. IF el campo `email` del cuerpo de la petición no tiene formato de dirección de correo electrónico válida, THEN THE `Contact_API` SHALL responder con HTTP 400 y un mensaje de error que indique que el email es inválido.
6. THE `Contact_API` SHALL aceptar peticiones `POST /api/contact` provenientes del origen del `Frontend` configurado mediante CORS.

---

### Requirement 2: Persistencia de contactos en PostgreSQL

**User Story:** Como miembro del equipo de WeByHudson, quiero que cada mensaje de contacto quede guardado en la base de datos, para poder consultarlos y hacer seguimiento en cualquier momento.

#### Acceptance Criteria

1. WHEN el `Contact_API` recibe una petición `POST /api/contact` válida, THE `Contact_Repository` SHALL persistir el `Contact` en la base de datos PostgreSQL antes de que el `Contact_API` devuelva la respuesta HTTP 201.
2. THE `Contact_Repository` SHALL asignar un identificador único (`id`) generado automáticamente a cada `Contact` persistido.
3. THE `Contact_Repository` SHALL registrar la fecha y hora de creación (`createdAt`) en cada `Contact` persistido, usando la hora del servidor en UTC.
4. IF la conexión con la base de datos PostgreSQL no está disponible al momento de persistir un `Contact`, THEN THE `Contact_API` SHALL responder con HTTP 503 y un mensaje de error que indique que el servicio no está disponible temporalmente.
5. THE `Contact_Repository` SHALL almacenar el campo `message` con una longitud máxima de 2000 caracteres.
6. IF el campo `message` supera los 2000 caracteres, THEN THE `Contact_API` SHALL responder con HTTP 400 y un mensaje de error que indique que el mensaje excede la longitud máxima permitida.

---

### Requirement 3: Notificación por email al recibir un nuevo contacto

**User Story:** Como miembro del equipo de WeByHudson, quiero recibir un email de notificación cada vez que alguien envía el formulario de contacto, para poder responder al cliente potencial de forma oportuna.

#### Acceptance Criteria

1. WHEN el `Contact_Repository` persiste un nuevo `Contact` exitosamente, THE `Email_Service` SHALL enviar una `Notification_Email` a la dirección de email del equipo configurada.
2. THE `Email_Service` SHALL incluir en la `Notification_Email` el nombre, email, teléfono (si está presente) y mensaje del `Contact`.
3. THE `Email_Service` SHALL incluir en la `Notification_Email` la fecha y hora de recepción (`createdAt`) del `Contact`.
4. IF el `Email_Service` no puede enviar la `Notification_Email` por un error del servidor SMTP, THEN THE `Contact_API` SHALL registrar el error en el log del sistema y SHALL devolver igualmente HTTP 201 al `Frontend`, dado que el `Contact` fue persistido correctamente.
5. THE `Email_Service` SHALL enviar la `Notification_Email` de forma asíncrona para que el tiempo de envío del email no afecte el tiempo de respuesta del endpoint `POST /api/contact`.

---

### Requirement 4: Integración del Frontend con el backend real

**User Story:** Como visitante del sitio web WeByHudson, quiero que al enviar el formulario de contacto mi mensaje llegue realmente al equipo, para tener la certeza de que seré contactado.

#### Acceptance Criteria

1. WHEN el usuario completa los campos requeridos del formulario y hace clic en "Enviar mensaje", THE `Frontend` SHALL enviar una petición `POST /api/contact` al `Contact_API` con los datos del formulario en formato JSON.
2. WHEN el `Contact_API` responde con HTTP 201, THE `Frontend` SHALL mostrar el mensaje de confirmación "¡Mensaje enviado!" al usuario.
3. IF el `Contact_API` responde con HTTP 400, THEN THE `Frontend` SHALL mostrar un mensaje de error descriptivo al usuario sin limpiar los campos del formulario.
4. IF el `Contact_API` responde con HTTP 503 o cualquier error de red, THEN THE `Frontend` SHALL mostrar un mensaje de error genérico que indique al usuario que intente nuevamente más tarde.
5. WHILE el `Frontend` espera la respuesta del `Contact_API`, THE `Frontend` SHALL mostrar un indicador de carga y SHALL deshabilitar el botón de envío para evitar envíos duplicados.
6. THE `Frontend` SHALL enviar las peticiones al `Contact_API` usando la URL base configurada mediante una variable de entorno (`VITE_API_URL`), para permitir distintas configuraciones entre entornos de desarrollo y producción.

---

### Requirement 5: Configuración y seguridad del servicio

**User Story:** Como desarrollador responsable del despliegue, quiero que el servicio esté correctamente configurado y sea seguro, para poder desplegarlo en producción sin exponer datos sensibles.

#### Acceptance Criteria

1. THE `Contact_API` SHALL leer las credenciales de la base de datos PostgreSQL (host, puerto, nombre de base de datos, usuario y contraseña) desde variables de entorno, sin incluirlas en el código fuente.
2. THE `Contact_API` SHALL leer las credenciales del servidor SMTP (host, puerto, usuario y contraseña) desde variables de entorno, sin incluirlas en el código fuente.
3. THE `Contact_API` SHALL leer la dirección de email de destino para las `Notification_Email` desde una variable de entorno.
4. THE `Contact_API` SHALL leer los orígenes permitidos para CORS desde una variable de entorno, para permitir distintas configuraciones entre entornos.
5. WHEN el `Contact_API` inicia, THE `Contact_API` SHALL crear o actualizar automáticamente el esquema de la tabla `contacts` en PostgreSQL mediante migraciones gestionadas por Flyway.
