package com.heth.tradinghelper.entity;

import com.heth.tradinghelper.domain.wave.Direction;
import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "wave_master")
@Getter
public class WaveMaster extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Direction direction;

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

}
