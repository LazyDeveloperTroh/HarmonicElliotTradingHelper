package com.heth.tradinghelper.jpa.generated;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
class TestMember {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
}