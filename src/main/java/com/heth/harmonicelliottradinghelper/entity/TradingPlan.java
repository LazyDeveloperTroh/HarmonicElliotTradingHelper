package com.heth.harmonicelliottradinghelper.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter
public class TradingPlan extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String ticker;
    private String position;
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
