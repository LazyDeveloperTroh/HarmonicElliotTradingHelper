package com.heth.tradinghelper.jpa.generated;

import jakarta.persistence.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@Rollback(false)
public class GeneratedValueTest {
    @PersistenceContext
    EntityManager em;

    @Test
    @DisplayName("아이디 생성전략 AUTO 테스트. H2에서는 SEQUENCE로 설정됨")
    public void auto_test() {
        TestMember member = new TestMember();
        em.persist(member);

        TestMember findMember = em.find(TestMember.class, member.getId());
        Assertions.assertEquals(member.getId(), findMember.getId());
    }
}
