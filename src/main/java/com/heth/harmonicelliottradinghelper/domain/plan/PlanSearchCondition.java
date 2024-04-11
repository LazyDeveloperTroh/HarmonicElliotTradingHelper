package com.heth.harmonicelliottradinghelper.domain.plan;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class PlanSearchCondition {
    private String title;
    private String ticker;
    private String position;
    private String result;
    private String startDate;
    private String endDate;
}
