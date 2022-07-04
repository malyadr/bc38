package com.greencommute.appliedjobs.entity;

import com.greencommute.appliedjobs.repository.ApplyJobRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
 class ApplyJobEntityTest {

    @Autowired
    private ApplyJobRepository applyJobRepository;

    @Test
     void applyJob(){
        List<ApplyJob> jobList = applyJobRepository.findAll();

        int length=jobList.size();
        jobList.get(1).getApplied();
        ApplyJob applyJob=jobList.get(2);
        applyJob.setApplied(1);

        org.assertj.core.api.Assertions.assertThat(jobList).hasSize(length);

    }


}
