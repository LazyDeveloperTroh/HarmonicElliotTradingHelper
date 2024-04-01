package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.entity.TradingPlan;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class TradingPlanRepositoryImpl extends QuerydslRepositorySupport implements CustomTradingPlanRepository {
    public TradingPlanRepositoryImpl() {
        super(TradingPlan.class);
    }
}
