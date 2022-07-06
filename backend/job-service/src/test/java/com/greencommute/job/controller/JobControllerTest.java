package com.greencommute.job.controller;

import com.greencommute.job.JobServiceApplication;
import com.greencommute.job.entity.Jobs;
import com.greencommute.job.repository.JobsRepository;
import com.greencommute.job.service.JobsServiceImpl;
import com.greencommute.job.valueObjects.Location;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;


import java.util.ArrayList;
import java.util.List;


@RunWith(SpringRunner.class)
@ContextConfiguration(classes= JobServiceApplication.class)
@WebMvcTest(JobsController.class)
public class JobControllerTest {

    @Autowired
    MockMvc mockMvc;


    @MockBean
    JobsRepository jobsRepository;

    @MockBean
    JobsServiceImpl jobsService;

    @Test
    public void getAllJobs() throws Exception {
        Location location = new Location(1, "delhi", 234);
        Jobs job = new Jobs(1, "role", "hp", "developer", "12", "234", location, "34");
        jobsRepository.save(job);
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);

        when(jobsService.getAllJobs()).thenReturn(jobs);
        this.mockMvc.perform(get("/jobs/all")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void getJobById() throws Exception {
        Location location = new Location(1, "delhi", 234);
        Jobs job = new Jobs(1, "role", "hp", "developer", "12", "234", location, "34");

        when(jobsService.getJobById(1)).thenReturn(job);
        this.mockMvc.perform(get("/jobs/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }


    @Test
    public void getFilteredJobs() throws Exception {
        Location location = new Location(1, "delhi", 234);
        List<String> data = new ArrayList<>();
        data.add("0-10kms");
        Jobs job = new Jobs(1, "role", "hp", "developer", "0-10kms", "234",location, "34");
        jobsRepository.save(job);
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);
        when(jobsService.getFilteredJobs(data)).thenReturn(jobs);
        this.mockMvc.perform(get("/jobs/filter/data")).andExpect(MockMvcResultMatchers.status().isOk());
    }
}
