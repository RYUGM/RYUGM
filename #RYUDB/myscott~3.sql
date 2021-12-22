create table cloth
(
pnum varchar2(20) primary key,
color varchar2(20),
type varchar2(20)
);

select * from cloth;

insert into cloth values('1','빨강','후드티');
insert into cloth values('2','파랑','양복');

delete from cloth where pnum ='2';

update cloth set color='핑크' where type='후드티';

SELECT color,type from cloth;
select color,type from cloth where pnum='1';