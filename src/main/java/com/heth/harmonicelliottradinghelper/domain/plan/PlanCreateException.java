package com.heth.harmonicelliottradinghelper.domain.plan;

/**
 * 매매일지 등록실패 예외
 */
public class PlanCreateException extends RuntimeException{
    public PlanCreateException(String msg, Throwable t) {
        super(msg, t);
    }
}
