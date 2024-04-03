package com.heth.harmonicelliottradinghelper.domain.plan;

import lombok.Data;

@Data
public class PlanSearchCondition {
    private String title;
    private String ticker;
    private String position;
    private String result;
    private String createdBy;
}
