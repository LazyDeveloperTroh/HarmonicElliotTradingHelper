package com.heth.tradinghelper.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "wave_master")
@Getter
public class WaveMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
}
