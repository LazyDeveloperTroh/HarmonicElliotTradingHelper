package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long>, CustomPlanRepository {
}
