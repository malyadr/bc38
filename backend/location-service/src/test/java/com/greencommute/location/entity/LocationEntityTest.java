package com.greencommute.location.entity;

import com.greencommute.location.repository.LocationRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class LocationEntityTest {

    @Autowired
    private LocationRepository locationRepository;

    @Test
    public void applyJob() {
        List<Location> jobList = locationRepository.findAll();

        int length = jobList.size();

        Location location = jobList.get(1);
        location.setLocationName("hyd");
        location.getLocationName();

        org.assertj.core.api.Assertions.assertThat(jobList.size()).isEqualTo(length);

    }

}
