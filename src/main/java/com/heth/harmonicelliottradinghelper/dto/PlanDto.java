package com.heth.harmonicelliottradinghelper.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlanDto {
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
    private String createdBy;
    private LocalDateTime createdAt;
    private String modifiedBy;
    private LocalDateTime modifiedAt;

    @QueryProjection
    public PlanDto(Long id, String title, String ticker, String position, String result, Double entryPrice1, Double entryPrice2, Double targetPrice1, Double targetPrice2, Double targetPrice3, Double stopLossPrice1, Double stopLossPrice2, String goodComment, String badComment) {
        this.id = id;
        this.title = title;
        this.ticker = ticker;
        this.position = position;
        this.result = result;
        this.entryPrice1 = entryPrice1;
        this.entryPrice2 = entryPrice2;
        this.targetPrice1 = targetPrice1;
        this.targetPrice2 = targetPrice2;
        this.targetPrice3 = targetPrice3;
        this.stopLossPrice1 = stopLossPrice1;
        this.stopLossPrice2 = stopLossPrice2;
        this.goodComment = goodComment;
        this.badComment = badComment;
    }
}
