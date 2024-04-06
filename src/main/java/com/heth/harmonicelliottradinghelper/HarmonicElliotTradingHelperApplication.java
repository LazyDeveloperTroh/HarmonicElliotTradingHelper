package com.heth.harmonicelliottradinghelper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Optional;

@SpringBootApplication
@EnableJpaAuditing
public class HarmonicElliotTradingHelperApplication {

    public static void main(String[] args) {
        SpringApplication.run(HarmonicElliotTradingHelperApplication.class, args);
    }

    @Bean
    public AuditorAware<String> auditorAware() {
        return () -> Optional.of("troh");
    }
}
