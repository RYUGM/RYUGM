CREATE table KBS(  --1,2
k_name VARCHAR2(20) Not NULL,
k_age number,
k_num number Not NULL PRIMARY key 

);

select k_name from kbs WHERE k_name='�̳���'; --4
delete from students where s_name='�ǿ��'; --3
update kbs SET k_age='25' where k_name='��ȣ��';  --5
update kbs SET k_name='���ֹ�' where k_num='2011080105'; --6

update students set s_name='�ǵ���',s_age='22',s_num='21809' where s_name='��';
update kbs set k_age='25' where k_name='�ڸ�ȸ';

select * from students;--7
select * from kbs;--7

insert into kbs values('�̳���',20,2021090101);
insert into kbs values('�̵���',30,2011080105);
insert into kbs values('��ȣ��',90,2021090108);
insert into kbs values('�ڸ�ȸ',0,2021090105);
insert into kbs values('��ȫ��',30,2021090104);
