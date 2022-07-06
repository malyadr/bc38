package com.greencommute.job.entity;

import com.greencommute.job.repository.JobsRepository;
import com.greencommute.job.valueobjects.Location;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.List;

@SpringBootTest
class JobEntityTest {

    @Autowired
    private JobsRepository locationRepository;

    @Test
    void applyJob() {
        List<Jobs> jobList = locationRepository.findAll();

        int length = jobList.size();
        Location location = new Location(1,"hyd",890);
        location.setLocationName("Hyderabad");
        location.getLocationName();
        location.setId(1);
        location.getId();
        location.setAqi(820);
        location.getAqi();

        Jobs jobs = jobList.get(1);
        jobs.setCompanyName("zemoso");
        jobs.getCompanyName();
        jobs.setRole("software developer");
        jobs.getRole();
        jobs.setDescription("good company");
        jobs.getDescription();
        jobs.setDistance("0-10");
        jobs.getDistance();
        jobs.setImage("hp");
        jobs.getImage();
        jobs.setLocationId(location);
        jobs.getLocationId();
        jobs.setTime("36mins");
        jobs.getTime();



        org.assertj.core.api.Assertions.assertThat(jobList).hasSize(length);

    }

}
