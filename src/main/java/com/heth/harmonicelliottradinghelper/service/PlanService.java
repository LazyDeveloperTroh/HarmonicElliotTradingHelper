package com.heth.harmonicelliottradinghelper.service;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.repository.PlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;

    public Page<PlanDto> getPlans(PlanSearchCondition search, Pageable pageable) {
        return planRepository.findAll(search, pageable);
    }
}
