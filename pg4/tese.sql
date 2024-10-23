CREATE TABLE estudantes (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(150) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	cpf CHAR(11) NOT NULL UNIQUE,
	tel VARCHAR(15) NOT NULL,
	registro CHAR(6) UNIQUE,
	data_nasc DATE NOT NULL
);

SELECT * FROM estudantes;


INSERT INTO estudantes(nome, email, cpf, tel, registro, data_nasc)
VALUES (
	'Nicolas',
	'nick234@gmail.com',
	'55577733322',
	'859999999',
	'923487',
	'2024/10/24'
);

SELECT id,
	SUBSTRING(cpf FROM 1 FOR 3) || '***' || SUBSTRING(cpf FROM 10 FOR 11) AS cpf,
	nome || ' - ' || email as usuario,
	'Matriculado' as status
FROM estudantes;



