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
    @DisplayName("생성날짜, 수정날짜 Auditing 테스트")
    public void creatAndUpdateTest() throws InterruptedException {
        WaveMaster wm = new WaveMaster();
        em.persist(wm);

        em.flush();
        em.clear();

        /**
         * 생성날짜, 수정날짜 설정확인
         */
        WaveMaster findWm1 = em.find(WaveMaster.class, wm.getId());
        assertNotNull(findWm1.getCreatedDate());
        assertNotNull(findWm1.getLastModifiedDate());
        System.out.println("findWm1.getCreatedDate() = " + findWm1.getCreatedDate());
        System.out.println("findWm1.getLastModifiedDate() = " + findWm1.getLastModifiedDate());
        assertTrue(findWm1.getCreatedDate().equals(findWm1.getLastModifiedDate()));

        /**
         * 속성 변경 후 수정날짜 확인
         */
        Thread.sleep(1000);
        findWm1.setDirection(Direction.SIDE_TREND);
        em.flush();
        em.clear();

        WaveMaster findWm2 = em.find(WaveMaster.class, wm.getId());
        System.out.println("findWm2.getCreatedDate() = " + findWm2.getCreatedDate());
        System.out.println("findWm2.getLastModifiedDate() = " + findWm2.getLastModifiedDate());
        assertTrue(wm.getCreatedDate().compareTo(findWm2.getLastModifiedDate()) == -1);
    }
}