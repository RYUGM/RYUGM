CREATE table KBS(  --1,2
k_name VARCHAR2(20) Not NULL,
k_age number,
k_num number Not NULL PRIMARY key 

);

select k_name from kbs WHERE k_name='이나겸'; --4
delete from students where s_name='권용규'; --3
update kbs SET k_age='25' where k_name='박호범';  --5
update kbs SET k_name='이주민' where k_num='2011080105'; --6

update students set s_name='권도균',s_age='22',s_num='21809' where s_name='문';
update kbs set k_age='25' where k_name='박명회';

select * from students;--7
select * from kbs;--7

insert into kbs values('이나겸',20,2021090101);
insert into kbs values('이동준',30,2011080105);
insert into kbs values('박호범',90,2021090108);
insert into kbs values('박명회',0,2021090105);
insert into kbs values('김홍근',30,2021090104);
