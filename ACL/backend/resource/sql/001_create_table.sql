USE ACL;

CREATE TABLE IF NOT EXISTS users (
    user_id             INT         AUTO_INCREMENT      PRIMARY KEY,
    first_name          CHAR(25)    NOT NULL,
    last_name           CHAR(25)    NOT NULL,
    password            VARBINARY(128)    NOT NULL,
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS groups (
    group_id            INT         AUTO_INCREMENT      PRIMARY KEY,
    group_name          CHAR(25)    NOT NULL,            
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS user_group (
    user_id             INT,
    group_id            INT,
    PRIMARY KEY(user_id,group_id),
    FOREIGN KEY(user_id) 
       REFERENCES users(user_id),
    FOREIGN KEY(group_id) 
       REFERENCES groups(group_id)
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS permission (
    permission_id       INT         AUTO_INCREMENT   PRIMARY KEY,
    descrp              CHAR(30)    NOT NULL
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS folders (
    folder_id           INT         AUTO_INCREMENT   PRIMARY KEY,
    path_name           CHAR(100)   NOT NULL
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS files (
    file_id             INT         AUTO_INCREMENT   PRIMARY KEY,
    path_name           CHAR(100)   NOT NULL 
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS file_in_folder (
    user_id             INT ,
    parent_folder_id    INT ,
    child_file_name     CHAR(40)    NOT NULL,
    child_file_id       INT,
    permission_id       INT,
    PRIMARY KEY(user_id,parent_folder_id,child_file_name),
    FOREIGN KEY(user_id) 
       REFERENCES users(user_id),
    FOREIGN KEY(parent_folder_id) 
       REFERENCES folders(folder_id),
    FOREIGN KEY(child_file_id) 
       REFERENCES files(file_id),
    FOREIGN KEY(permission_id) 
       REFERENCES permission(permission_id)
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS folder_in_folder (
    user_id             INT ,
    parent_folder_id    INT ,
    child_folder_name   CHAR(40)    NOT NULL,
    child_folder_id     INT,
    permission_id       INT,
    PRIMARY KEY(user_id,parent_folder_id,child_folder_name),
    FOREIGN KEY(user_id) 
       REFERENCES users(user_id),
    FOREIGN KEY(parent_folder_id) 
       REFERENCES folders(folder_id),
    FOREIGN KEY(child_folder_id) 
       REFERENCES folders(folder_id),
    FOREIGN KEY(permission_id) 
       REFERENCES permission(permission_id)
)ENGINE = INNODB CHARACTER SET=utf8;

INSERT INTO permission VALUES(1,"READ"),(2,"READ,WRITE");
INSERT INTO folders(path_name) VALUE("");