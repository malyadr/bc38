package com.greencommute.appliedjobs.service;

import com.greencommute.appliedjobs.vo.Job;
import com.greencommute.appliedjobs.entity.ApplyJob;
import com.greencommute.appliedjobs.exceptions.JobNotFoundException;
import com.greencommute.appliedjobs.repository.ApplyJobRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
 class ApplyJobServiceTest {

    @Mock
    ApplyJobRepository applyJobRepository;

    @InjectMocks
     AppliedJobServiceImpl appliedJobService;

    @Test
     void getAllJobs() throws Exception {
        Job job=new Job(1,"","","","","","");
        ApplyJob applyJob=new ApplyJob(1,job,1);
        applyJobRepository.save(applyJob);
        List<ApplyJob> initial=new ArrayList<>();
        initial.add(applyJob);
        when(appliedJobService.getAllAppliedJobStatus()).thenReturn(initial);
        List<ApplyJob> result=appliedJobService.getAllAppliedJobStatus();
        assertEquals(result,initial);
    }

    @Test
     void getAppliedJobStatusById() throws JobNotFoundException {
        List<ApplyJob> applyJobs= new ArrayList<>();

        Job job=new Job(1,"","","","","","");
        ApplyJob applyJob=new ApplyJob(1,job,0);

        applyJobRepository.save(applyJob);

        applyJobs.add(applyJob);

        when(applyJobRepository.findById(applyJob.getId())).thenReturn(Optional.of(applyJob));

        if(appliedJobService.getAppliedJobStatusById(1L)!=applyJob.getApplied()){
            throw new JobNotFoundException("job not found");
        }
        System.out.println(applyJobRepository.findById(applyJob.getId()));

        Assert.assertEquals(applyJob.getApplied(), appliedJobService.getAppliedJobStatusById(1L));
    }
    @Test
     void update() throws JobNotFoundException{
        List<ApplyJob> applyJobs= new ArrayList<>();

        Job job=new Job(1,"","","","","","");
        ApplyJob applyJob=new ApplyJob(1,job,0);

        applyJobRepository.save(applyJob);

        applyJobs.add(applyJob);

        when(applyJobRepository.findById(applyJob.getId())).thenReturn(Optional.of(applyJob));

        try{
            appliedJobService.updateStatusOfAppliedJob(1L);
            assertEquals( 0,appliedJobService.getAppliedJobStatusById(1L));
        }
        catch (JobNotFoundException e){

        }
    }
}
