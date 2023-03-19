package com.heth.tradinghelper.domain.wave;

public enum FibonacciRatio {
    FIB_236(23.6),
    FIB_382(38.2),
    FIB_500(50.0),
    FIB_618(61.8),
    FIB_786(78.6);

    private Double ratio;

    FibonacciRatio(Double ratio) {
        this.ratio = ratio;
    }

    public Double getRatio() {
        return this.ratio;
    }
}
