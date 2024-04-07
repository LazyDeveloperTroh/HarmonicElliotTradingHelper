package com.heth.harmonicelliottradinghelper.service;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanCreateException;
import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.entity.Plan;
import com.heth.harmonicelliottradinghelper.repository.PlanRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;
    private final ModelMapper modelMapper;

    public Page<PlanDto> getPlans(PlanSearchCondition search, Pageable pageable) {
        return planRepository.findAll(search, pageable);
    }

    /**
     * @param planDto
     * @return 저장된 매매일지 dto
     * @throws PlanCreateException 매매일지 등록실패
     */
    public PlanDto create(PlanDto planDto) throws PlanCreateException {
        try {
            Plan plan = modelMapper.map(planDto, Plan.class);
            Plan savedPlan = planRepository.save(plan);
            return modelMapper.map(savedPlan, PlanDto.class);
        } catch(Exception e) {
            throw new PlanCreateException(e.getMessage(), e);
        }
    }
}
