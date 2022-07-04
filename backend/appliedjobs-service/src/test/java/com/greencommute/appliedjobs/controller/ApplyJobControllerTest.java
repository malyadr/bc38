package com.greencommute.appliedjobs.controller;

import com.greencommute.appliedjobs.AppliedjobsServiceApplication;
import com.greencommute.appliedjobs.valueobjects.Job;
import com.greencommute.appliedjobs.entity.ApplyJob;
import com.greencommute.appliedjobs.exceptions.JobNotFoundException;
import com.greencommute.appliedjobs.repository.ApplyJobRepository;
import com.greencommute.appliedjobs.service.AppliedJobServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;


@RunWith(SpringRunner.class)
@ContextConfiguration(classes= AppliedjobsServiceApplication.class)
@WebMvcTest(ApplyJobController.class)
 class ApplyJobControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    ApplyJobRepository repo;

    @MockBean
    AppliedJobServiceImpl applyJobServiceImpl;

    @Test
     void getAllJobsWithAppliedStatus() throws Exception {
        when(applyJobServiceImpl.getAppliedJobStatusById(1L)).thenReturn(1);
        int res=applyJobServiceImpl.getAppliedJobStatusById(1L);
        this.mockMvc.perform(get("/applied-job-status/1")).andExpect(MockMvcResultMatchers.status().isOk());

    }

    @Test
     void getAllJobs() throws Exception {

        Job job=new Job(1,"","","","","","");
        ApplyJob applyJob=new ApplyJob(1,job,1);

        repo.save(applyJob);

        List<ApplyJob> res=new ArrayList<>();
        res.add(applyJob);
        when(applyJobServiceImpl.getAllAppliedJobStatus()).thenReturn(res);
        this.mockMvc.perform(get("/applied-jobs")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
     void updateStatus() throws  Exception{

        Job job=new Job(1,"","","","","","");
        ApplyJob applyJob=new ApplyJob(1,job,0);

        repo.save(applyJob);

        doNothing().when(applyJobServiceImpl).updateStatusOfAppliedJob(1L);
        this.mockMvc.perform(put("/update-applied-status/1")).andExpect(MockMvcResultMatchers.status().isOk());

    }
    @Test
     void Exception() throws Exception {
        try{
            this.mockMvc.perform(put("/update-applied-status/100")).andExpect(MockMvcResultMatchers.status().isOk());
        }
        catch(JobNotFoundException job){
            throw new JobNotFoundException("job not found");
        }
    }
}
