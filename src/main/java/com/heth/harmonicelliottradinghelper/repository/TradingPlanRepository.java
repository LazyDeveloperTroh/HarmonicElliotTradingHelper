package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.entity.TradingPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingPlanRepository extends JpaRepository<TradingPlan, Long>, CustomTradingPlanRepository {
}
