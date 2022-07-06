package com.greencommute.job.service;

import com.greencommute.job.entity.Jobs;
import com.greencommute.job.repository.JobsRepository;
import com.greencommute.job.valueObjects.Location;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest
class JobsServiceImplTest {
    @Mock
    JobsRepository jobsRepository;

    @InjectMocks
    JobsServiceImpl jobsServiceImpl;

    @Test
    void getAllJobs() {
        Location location = new Location(1, "delhi", 234);
        Jobs job = new Jobs(1, "", "", "", "", "", location, "");
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);
        when(jobsServiceImpl.getAllJobs()).thenReturn(jobs);
        int size = jobsServiceImpl.getAllJobs().size();
        assertEquals(1, size);
    }

    @Test
    void getJobById() {
        List<Optional<Jobs>> jobs = new ArrayList<>();
        Location location = new Location(1, "delhi", 234);
       Optional<Jobs> job = Optional.of(new Jobs(1, "", "", "", "", "", location, ""));
       jobs.add(job);
       when(jobsRepository.findById(job.get().getId())).thenReturn(job);
        Assert.assertEquals(job.get(), jobsServiceImpl.getJobById(1));
    }

    @Test
    void getFilteredJobs() {
        Location location = new Location(1, "delhi", 234);
        Jobs job = new Jobs(1, "", "", "", "", "", location, "");
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);
        List<String> data = new ArrayList<>();
        data.add("0-10kms");
        data.add("11-20kms");
        when(jobsServiceImpl.getFilteredJobs(data)).thenReturn(jobs);
        List<Jobs> result = jobsServiceImpl.getFilteredJobs(data);
        assertEquals(result, jobs);
    }
}