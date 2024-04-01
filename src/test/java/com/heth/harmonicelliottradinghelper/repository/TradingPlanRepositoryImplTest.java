package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.entity.TradingPlan;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
class TradingPlanRepositoryImplTest {
    @Autowired
    TradingPlanRepository tradingPlanRepository;

    TradingPlan plan1 = null;
    @BeforeEach
    void init() {
        plan1 = TradingPlan.builder()
                .title("title1")
                .ticker("ticker1")
                .position("position1")
                .result("result1")
                .entryPrice1(null)
                .entryPrice2(null)
                .targetPrice1(null)
                .targetPrice2(null)
                .targetPrice3(null)
                .stoplossPrice1(null)
                .stoplossPrice2(null)
                .goodComment("good")
                .badComment("bad")
                .build();
    }

    @Test
    void save() {
        TradingPlan savedPlan1 = tradingPlanRepository.save(plan1);
        TradingPlan findPlan1 = tradingPlanRepository.findById(savedPlan1.getId()).orElse(null);

        assertThat(findPlan1).isNotNull();
        assertThat(findPlan1.getId()).isNotNull();
        assertThat(findPlan1.getCreatedBy()).isNotNull();
        assertThat(findPlan1.getCreatedAt()).isNotNull();
        assertThat(findPlan1.getModifiedBy()).isNotNull();
        assertThat(findPlan1.getModifiedAt()).isNotNull();
    }
}