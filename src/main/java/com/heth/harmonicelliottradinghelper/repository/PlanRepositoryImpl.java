package com.heth.harmonicelliottradinghelper.repository;

import com.heth.harmonicelliottradinghelper.domain.plan.PlanSearchCondition;
import com.heth.harmonicelliottradinghelper.dto.PlanDto;
import com.heth.harmonicelliottradinghelper.dto.QPlanDto;
import com.heth.harmonicelliottradinghelper.entity.Plan;
import com.heth.harmonicelliottradinghelper.entity.QPlan;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.springframework.util.StringUtils.hasText;

public class PlanRepositoryImpl extends QuerydslRepositorySupport implements CustomPlanRepository {
    private final JPAQueryFactory jpaQueryFactory;
    private final QPlan plan;
    private final QPlanDto planDto;

    public PlanRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        super(Plan.class);
        this.jpaQueryFactory = jpaQueryFactory;
        plan = QPlan.plan;
        planDto = new QPlanDto(
                plan.id,
                plan.title,
                plan.ticker,
                plan.position,
                plan.result,
                plan.entryPrice1,
                plan.entryPrice2,
                plan.targetPrice1,
                plan.targetPrice2,
                plan.targetPrice3,
                plan.stopLossPrice1,
                plan.stopLossPrice2,
                plan.goodComment,
                plan.badComment,
                plan.createdBy,
                plan.createdAt,
                plan.modifiedBy,
                plan.modifiedAt
        );
    }

    @Override
    public Page<PlanDto> findAll(PlanSearchCondition condition, Pageable pageable) {
        List<PlanDto> contents = jpaQueryFactory
                .select(planDto)
                .from(plan)
                .where(titleEq(condition.getTitle()),
                        tickerEq(condition.getTicker()),
                        positionEq(condition.getPosition()),
                        resultEq(condition.getResult()),
                        createdAtByRange(condition.getStartDate(), condition.getEndDate()))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        Long count = jpaQueryFactory
                .select(plan.count())
                .from(plan)
                .where(titleEq(condition.getTitle()),
                        tickerEq(condition.getTicker()),
                        positionEq(condition.getPosition()),
                        resultEq(condition.getResult()),
                        createdAtByRange(condition.getStartDate(), condition.getEndDate()))
                .fetchOne();

        return new PageImpl<>(contents, pageable, count == null ? 0 : count);
    }

    private BooleanExpression titleEq(String title) {
        return hasText(title) ? plan.title.eq(title) : null;
    }

    private BooleanExpression tickerEq(String ticker) {
        return hasText(ticker) ? plan.ticker.eq(ticker) : null;
    }
    private BooleanExpression positionEq(String position) {
        return hasText(position) ? plan.position.eq(position) : null;
    }
    private BooleanExpression resultEq(String result) {
        return hasText(result) ? plan.result.eq(result) : null;
    }
    private BooleanExpression createdAtByRange(String startDate, String endDate) {
        LocalDate startDateTime = hasText(startDate) ?
                LocalDate.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd")) : LocalDate.now();
        LocalDate endDateTime = hasText(endDate) ?
                LocalDate.parse(endDate, DateTimeFormatter.ofPattern("yyyy-MM-dd")) :  LocalDate.now();
        return plan.createdAt.between(startDateTime.atTime(0, 0, 0),
                endDateTime.atTime(23, 59, 59));
    }
}
