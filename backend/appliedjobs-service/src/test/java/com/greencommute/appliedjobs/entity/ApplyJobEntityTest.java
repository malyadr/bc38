package com.greencommute.appliedjobs.entity;

import com.greencommute.appliedjobs.repository.ApplyJobRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ApplyJobEntityTest {

    @Autowired
    private ApplyJobRepository applyJobRepository;

    @Test
    public void applyJob(){
        List<ApplyJob> jobList = applyJobRepository.findAll();

        int length=jobList.size();

        org.assertj.core.api.Assertions.assertThat(jobList.size()).isEqualTo(length);

    }


}
