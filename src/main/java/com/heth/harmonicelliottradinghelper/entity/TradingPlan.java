package com.heth.harmonicelliottradinghelper.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
    private Double stoplossPrice1;
    private Double stoplossPrice2;
    private String goodComment;
    private String badComment;
}
