package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.entity.Plan;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class PlanRepositoryTest {
    @Autowired
    PlanRepository planRepository;

    List<Plan> plans;
    @BeforeEach
    void init() {
        plans = List.of(
                Plan.builder()
                        .title("title1")
                        .ticker("ticker1")
                        .position("position1")
                        .result("result1")
                        .goodComment("good1")
                        .badComment("bad1")
                        .createdBy("troh1")
                        .createdAt(LocalDateTime.of(2024, 4, 1, 0, 0,0))
                        .modifiedBy("troh1")
                        .createdAt(LocalDateTime.of(2024, 4, 1, 0, 0,0))
                        .build(),
                Plan.builder()
                        .title("title2")
                        .ticker("ticker2")
                        .position("position2")
                        .result("result2")
                        .goodComment("good2")
                        .badComment("bad2")
                        .createdBy("troh2")
                        .createdAt(LocalDateTime.of(2024, 4, 2, 0, 0,0))
                        .modifiedBy("troh2")
                        .createdAt(LocalDateTime.of(2024, 4, 2, 0, 0,0))
                        .build(),
                Plan.builder()
                        .title("title3")
                        .ticker("ticker3")
                        .position("position3")
                        .result("result3")
                        .goodComment("good3")
                        .badComment("bad3")
                        .createdBy("troh3")
                        .createdAt(LocalDateTime.of(2024, 4, 3, 0, 0,0))
                        .modifiedBy("troh3")
                        .createdAt(LocalDateTime.of(2024, 4, 3, 0, 0,0))
                        .build()
        );
    }

    @Test
    @Transactional
    void findAllConditionByTitle() {
        // given
        planRepository.saveAll(plans);

        // when
        PlanSearchCondition condition = new PlanSearchCondition();
        condition.setTitle(plans.get(0).getTitle());
        Page<PlanDto> planDtos = planRepository.findAll(condition, PageRequest.of(0, 10));

        // then
        assertThat(planDtos.getContent()).hasSize(1);
        PlanDto planDto = planDtos.getContent().get(0);
        checkEqualsPlan(plans.get(0), planDto);
    }

    @Test
    @Transactional
    void findAllConditionByTicker() {
        // given
        planRepository.saveAll(plans);

        // when
        PlanSearchCondition condition = new PlanSearchCondition();
        condition.setTitle(plans.get(1).getTitle());
        condition.setTicker(plans.get(1).getTicker());
        Page<PlanDto> planDtos = planRepository.findAll(condition, PageRequest.of(0, 10));

        // then
        assertThat(planDtos.getContent()).hasSize(1);
        PlanDto planDto = planDtos.getContent().get(0);
        checkEqualsPlan(plans.get(1), planDto);
    }

    @Test
    @Transactional
    void findAllConditionByPosition() {
        // given
        planRepository.saveAll(plans);

        // when
        PlanSearchCondition condition = new PlanSearchCondition();
        condition.setTitle(plans.get(2).getTitle());
        condition.setTicker(plans.get(2).getTicker());
        condition.setPosition(plans.get(2).getPosition());
        Page<PlanDto> planDtos = planRepository.findAll(condition, PageRequest.of(0, 10));

        // then
        assertThat(planDtos.getContent()).hasSize(1);
        PlanDto planDto = planDtos.getContent().get(0);
        checkEqualsPlan(plans.get(2), planDto);
    }

    @Test
    @Transactional
    void findAllConditionByResult() {
        // given
        planRepository.saveAll(plans);

        // when
        PlanSearchCondition condition = new PlanSearchCondition();
        condition.setTitle(plans.get(0).getTitle());
        condition.setTicker(plans.get(0).getTicker());
        condition.setPosition(plans.get(0).getPosition());
        condition.setResult(plans.get(0).getResult());
        Page<PlanDto> planDtos = planRepository.findAll(condition, PageRequest.of(0, 10));

        // then
        assertThat(planDtos.getContent()).hasSize(1);
        PlanDto planDto = planDtos.getContent().get(0);
        checkEqualsPlan(plans.get(0), planDto);
    }

    @Test
    @Transactional
    void findAllConditionByCreatedBy() {
        // given
        planRepository.saveAll(plans);

        // when
        PlanSearchCondition condition = new PlanSearchCondition();
        condition.setTitle(plans.get(1).getTitle());
        condition.setTicker(plans.get(1).getTicker());
        condition.setPosition(plans.get(1).getPosition());
        condition.setResult(plans.get(1).getResult());
        condition.setCreatedBy(plans.get(1).getCreatedBy());
        Page<PlanDto> planDtos = planRepository.findAll(condition, PageRequest.of(0, 10));

        // then
        assertThat(planDtos.getContent()).hasSize(1);
        PlanDto planDto = planDtos.getContent().get(0);
        checkEqualsPlan(plans.get(1), planDto);
    }

    private void checkEqualsPlan(Plan plan1, PlanDto planDto) {
        assertThat(plan1.getTitle()).isEqualTo(planDto.getTitle());
        assertThat(plan1.getTicker()).isEqualTo(planDto.getTicker());
        assertThat(plan1.getPosition()).isEqualTo(planDto.getPosition());
        assertThat(plan1.getResult()).isEqualTo(planDto.getResult());
        assertThat(plan1.getEntryPrice1()).isEqualTo(planDto.getEntryPrice1());
        assertThat(plan1.getEntryPrice2()).isEqualTo(planDto.getEntryPrice2());
        assertThat(plan1.getTargetPrice1()).isEqualTo(planDto.getTargetPrice1());
        assertThat(plan1.getTargetPrice2()).isEqualTo(planDto.getTargetPrice2());
        assertThat(plan1.getTargetPrice3()).isEqualTo(planDto.getTargetPrice3());
        assertThat(plan1.getStopLossPrice1()).isEqualTo(planDto.getStopLossPrice1());
        assertThat(plan1.getStopLossPrice2()).isEqualTo(planDto.getStopLossPrice2());
        assertThat(plan1.getGoodComment()).isEqualTo(planDto.getGoodComment());
        assertThat(plan1.getBadComment()).isEqualTo(planDto.getBadComment());
    }
}