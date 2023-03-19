package com.heth.tradinghelper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.UUID;

@SpringBootApplication
@EnableJpaAuditing
public class HarmonicElliotTradingHelperApplication {

    public static void main(String[] args) {
        SpringApplication.run(HarmonicElliotTradingHelperApplication.class, args);
    }
}
