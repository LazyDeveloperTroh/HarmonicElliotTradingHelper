package com.heth.tradinghelper.entity;

import com.heth.tradinghelper.domain.wave.Direction;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "wave_master")
@Getter
public class WaveMaster extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Direction direction;

    private String image;

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

}
