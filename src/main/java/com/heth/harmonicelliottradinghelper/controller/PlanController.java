package com.heth.harmonicelliottradinghelper.controller;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.service.PlanService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plan")
@AllArgsConstructor
@Slf4j
public class PlanController {
    private final PlanService planService;
    @PostMapping("/search")
    public GeneralResponse<Page<PlanDto>> getPlans(@RequestBody PlanSearchCondition condition, Pageable pageable) {
        Page<PlanDto> plans = planService.getPlans(condition, pageable);
        return GeneralResponse.success(plans);
    }

    @PostMapping
    public GeneralResponse<PlanDto> plan(@RequestBody PlanDto planDto) {
        log.info("# 매매일지 등록요청. param: " + planDto);
        PlanDto createdPlanDto = planService.create(planDto);
        return GeneralResponse.success(createdPlanDto);
    }
}
