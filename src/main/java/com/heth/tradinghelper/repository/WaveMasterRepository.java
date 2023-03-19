package com.heth.tradinghelper.repository;

import com.heth.tradinghelper.entity.WaveMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaveMasterRepository extends JpaRepository<WaveMaster, Long> {
}
