drop table plan;

create table plan
(
    id               bigint generated by default as identity,
    title            varchar(255) not null,
    ticker           varchar(255) not null,
    position         varchar(255) not null,
    result           varchar(255) not null,
    entry_price1     float(53),
    entry_price2     float(53),
    target_price1    float(53),
    target_price2    float(53),
    target_price3    float(53),
    stop_loss_price1 float(53),
    stop_loss_price2 float(53),
    good_comment     varchar(255),
    bad_comment      varchar(255),
    created_by       varchar(255) not null,
    created_at       timestamp(6) not null,
    modified_by      varchar(255) not null,
    modified_at      timestamp(6) not null,
    primary key (id)
);

update plan set created_at=now();
select * from plan;