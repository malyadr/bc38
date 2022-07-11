package com.greencommute.savedjobs.controller;

import com.greencommute.savedjobs.SavedjobsServiceApplication;
import com.greencommute.savedjobs.valueobjects.Job;
import com.greencommute.savedjobs.entity.SavedJob;
import com.greencommute.savedjobs.exceptions.JobNotFoundException;
import com.greencommute.savedjobs.repository.SavedJobRepository;
import com.greencommute.savedjobs.service.SavedJobServiceImpl;
import com.greencommute.savedjobs.valueobjects.Location;
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
@ContextConfiguration(classes= SavedjobsServiceApplication.class)
@WebMvcTest(SavedJobController.class)
 class SavedJobControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    SavedJobRepository repo;

    @MockBean
    SavedJobServiceImpl savedJobService;

    @Test
    void getAllJobsWithSavedStatus() throws Exception {
        when(savedJobService.getSavedJobStatusById(1L)).thenReturn(1);
        savedJobService.getSavedJobStatusById(1L);
        this.mockMvc.perform(get("/savedJobs/status/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllJobs() throws Exception {

        Location location=new Location(1,"hyd",894);
        Job job=new Job(1,"","","","","",location,"");
        SavedJob savedJob=new SavedJob(1,job,1);

        repo.save(savedJob);

        List<SavedJob> result=new ArrayList<>();
        result.add(savedJob);
        when(savedJobService.getAllSavedJobStatus()).thenReturn(result);
        this.mockMvc.perform(get("/savedJobs")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void updateStatus() throws  Exception{

        Location location=new Location(1,"hyd",894);
        Job job=new Job(1,"","","","","",location,"");
        SavedJob savedJob=new SavedJob(1,job,0);

        repo.save(savedJob);

        doNothing().when(savedJobService).updateStatusOfSavedJob(1L);
        this.mockMvc.perform(put("/savedJobs/update-status/1")).andExpect(MockMvcResultMatchers.status().isOk());

    }
    @Test
    void Exception() throws Exception {
        try{
            this.mockMvc.perform(put("/savedJobs/update-status/100")).andExpect(MockMvcResultMatchers.status().isOk());
        }
        catch(JobNotFoundException job){
            throw new JobNotFoundException("job not found");
        }
    }
}
