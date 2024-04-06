package com.heth.harmonicelliottradinghelper.controller;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.service.PlanService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plan")
@AllArgsConstructor
public class PlanController {
    private final PlanService planService;
    @PostMapping
    public GeneralResponse<Page<PlanDto>> getPlans(@RequestBody PlanSearchCondition condition, Pageable pageable) {
        Page<PlanDto> plans = planService.getPlans(condition, pageable);
        return GeneralResponse.success(plans);
    }
}
