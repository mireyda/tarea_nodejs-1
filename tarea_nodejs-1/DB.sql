create database db_estudiantes

CREATE TABLE clientes (
    id_cliente INT(11) AUTO_INCREMENT PRIMARY KEY,
    carne VARCHAR(10),
    nombres VARCHAR(60),
    apellidos VARCHAR(60),
    direccion VARCHAR(100),
    telefono VARCHAR(12),
    fecha_nacimiento DATE,
    correo_electronico VARCHAR(100),
    id_tipo_sangre VARCHAR(15)
);

CREATE TABLE tipos_sangre (
    id_tipo_sangre VARCHAR(10) PRIMARY KEY
);

