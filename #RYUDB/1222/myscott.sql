create table mytable(
name varchar2(20),
id number(20) primary key
);

insert into mytable values('�ǿ��',1);
insert into mytable values('�̵���',2);
insert into mytable (id,name) values (3,'�����');
update mytable SET name='222' WHERE id='2';
delete mytable WHERE id='3';

select * from mytable;


