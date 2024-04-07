package com.heth.harmonicelliottradinghelper.service;

import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
class PlanServiceTest {
    @Autowired
    private PlanService planService;

    private List<PlanDto> planDtoList;
    @BeforeEach
    void init() {
        planDtoList.add(PlanDto.builder()
                .title("title1").ticker("ticker1").position("position1").result("result1")
                .entryPrice1(1000.0).entryPrice2(2000.0)
                .targetPrice1(1000.0).targetPrice2(2000.0).targetPrice3(3000.0)
                .stopLossPrice1(1000.0).stopLossPrice2(2000.0)
                .goodComment("good1").badComment("bad1")
                .createdBy("troh1").createdAt(LocalDateTime.now())
                .modifiedBy("troh1").modifiedAt(LocalDateTime.now())
                .build());
        planDtoList.add(PlanDto.builder()
                .title("title2").ticker("ticker2").position("position2").result("result2")
                .entryPrice1(1000.0).entryPrice2(2000.0)
                .targetPrice1(1000.0).targetPrice2(2000.0).targetPrice3(3000.0)
                .stopLossPrice1(1000.0).stopLossPrice2(2000.0)
                .goodComment("good2").badComment("bad2")
                .createdBy("troh2").createdAt(LocalDateTime.now())
                .modifiedBy("troh2").modifiedAt(LocalDateTime.now())
                .build());
        planDtoList.add(PlanDto.builder()
                .title("title3").ticker("ticker3").position("position3").result("result3")
                .entryPrice1(1000.0).entryPrice2(2000.0)
                .targetPrice1(1000.0).targetPrice2(2000.0).targetPrice3(3000.0)
                .stopLossPrice1(1000.0).stopLossPrice2(2000.0)
                .goodComment("good3").badComment("bad3")
                .createdBy("troh3").createdAt(LocalDateTime.now())
                .modifiedBy("troh3").modifiedAt(LocalDateTime.now())
                .build());
    }

    @Test
    void getPlans() {
    }

    @Test
    @Transactional
    void create() {
        planDtoList.forEach(planDto -> {
            PlanDto savedDto = planService.create(planDto);
            assertThat(savedDto.getId()).isNotNull();
            checkEqualsPlan(savedDto, planDto);
        });
    }

    private void checkEqualsPlan(PlanDto plan, PlanDto planDto) {
        assertThat(plan.getTitle()).isEqualTo(planDto.getTitle());
        assertThat(plan.getTicker()).isEqualTo(planDto.getTicker());
        assertThat(plan.getPosition()).isEqualTo(planDto.getPosition());
        assertThat(plan.getResult()).isEqualTo(planDto.getResult());
        assertThat(plan.getEntryPrice1()).isEqualTo(planDto.getEntryPrice1());
        assertThat(plan.getEntryPrice2()).isEqualTo(planDto.getEntryPrice2());
        assertThat(plan.getTargetPrice1()).isEqualTo(planDto.getTargetPrice1());
        assertThat(plan.getTargetPrice2()).isEqualTo(planDto.getTargetPrice2());
        assertThat(plan.getTargetPrice3()).isEqualTo(planDto.getTargetPrice3());
        assertThat(plan.getStopLossPrice1()).isEqualTo(planDto.getStopLossPrice1());
        assertThat(plan.getStopLossPrice2()).isEqualTo(planDto.getStopLossPrice2());
        assertThat(plan.getGoodComment()).isEqualTo(planDto.getGoodComment());
        assertThat(plan.getBadComment()).isEqualTo(planDto.getBadComment());
    }
}