package com.heth.tradinghelper.entity;

import com.heth.tradinghelper.domain.wave.Direction;
import com.heth.tradinghelper.repository.WaveMasterRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@Transactional
@Slf4j
class WaveMasterTest {
    @PersistenceContext
    EntityManager em;

    @Autowired
    WaveMasterRepository repository;

    @Test
    @DisplayName("자동 생성날짜, 수정날짜 테스트")
    public void creatAndUpdateTest() {
        WaveMaster wm = new WaveMaster();
        em.persist(wm);

        /**
         * 생성날짜, 수정날짜 설정확인
         */
        assertNotNull(wm.getCreatedDate());
        assertNotNull(wm.getLastModifiedDate());
        assertTrue(wm.getCreatedDate().equals(wm.getLastModifiedDate()));

        /**
         * 속성 변경 후 수정날짜 확인
         */
        wm.setDirection(Direction.SIDE_TREND);
        em.flush();
        em.clear();
        System.out.println("wm.getCreatedDate() = " + wm.getCreatedDate());
        System.out.println("wm.getLastModifiedDate() = " + wm.getLastModifiedDate());
        assertTrue(wm.getCreatedDate().compareTo(wm.getLastModifiedDate()) == -1);
    }
}