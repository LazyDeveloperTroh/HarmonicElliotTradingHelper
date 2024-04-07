package com.heth.harmonicelliottradinghelper.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter
public class Plan extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String ticker;

    @Column(nullable = false)
    private String position;

    @Column(nullable = false)
    private String result;

    private Double entryPrice1;
    private Double entryPrice2;
    private Double targetPrice1;
    private Double targetPrice2;
    private Double targetPrice3;
    private Double stopLossPrice1;
    private Double stopLossPrice2;
    private String goodComment;
    private String badComment;
}
