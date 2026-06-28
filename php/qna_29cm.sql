create table qna_29cm (
    num int not null  auto_increment,
    id varchar(20) not null,
    category varchar(50),
    subject varchar(200) not null,
    content text not null,
    regist_day datetime default current_timestamp,
    primary key(num)
)engine=innoDB charset=utf8;

