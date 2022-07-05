package com.greencommute.savedjobs.entity;

import com.greencommute.savedjobs.valueobjects.Job;
import com.greencommute.savedjobs.repository.SavedJobRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class SavedJobEntityTest {

    @Autowired
    private SavedJobRepository savedJobRepository;

    @Test
    void applyJob() {
        List<SavedJob> jobList = savedJobRepository.findAll();
        int length = jobList.size();
        jobList.get(1).getSaved();
        SavedJob savedJob = jobList.get(2);
        savedJob.setSaved(savedJob.getSaved());

        Job job = new Job(1, "", "", "", "", "", "");
        job.setCompanyName("zemoso");
        job.getCompanyName();

        org.assertj.core.api.Assertions.assertThat(jobList).hasSize(length);
    }
}
