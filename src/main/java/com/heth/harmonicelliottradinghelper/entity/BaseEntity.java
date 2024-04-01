package com.heth.harmonicelliottradinghelper.entity;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {
    @CreatedBy
    private String createdBy;
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedBy
    private String modifiedBy;
    @LastModifiedDate
    private LocalDateTime modifiedAt;
}
