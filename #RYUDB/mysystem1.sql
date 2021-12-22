create user c##scott identified by tiger;

grant connect, resource to c##scott;

ALTER USER c##scott DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS;
