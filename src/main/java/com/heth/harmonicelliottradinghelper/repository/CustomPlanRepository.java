package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomPlanRepository {
    Page<PlanDto> findAll(PlanSearchCondition condition, Pageable pageable);
}
