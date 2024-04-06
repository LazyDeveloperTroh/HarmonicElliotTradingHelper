package com.heth.harmonicelliottradinghelper.controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GeneralResponse<T> {
    private HttpStatus status;
    private T data;
    private String message;

    public static <T> GeneralResponse<T> success(T data) {
        return new GeneralResponse<>(HttpStatus.OK, data, null);
    }
}
