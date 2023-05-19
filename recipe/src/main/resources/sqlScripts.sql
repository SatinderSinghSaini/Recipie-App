use recipe;
create table users(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(45) NOT NULL,
password VARCHAR(100) NOT NULL,
enabled INT NOT NULL,
PRIMARY KEY(id)
);
create table authorities (
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(45) NOT NULL,
authority VARCHAR(45) NOT NULL,
PRIMARY KEY(id)
);
Insert ignore into users values(null,'happy','123',1);
insert ignore into authorities values(null,'happy','write');

CREATE TABLE RECIPES(
ID INT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(20) NOT NULL,
DESCRIPTION VARCHAR(250),
PRIMARY KEY (ID)
);
select * from recipes;
insert into recipes values(null,'Mango Shake','Made with Milk, mangoes, sugar powder');