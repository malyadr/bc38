package com.greencommute.savedjobs.service;

import com.greencommute.savedjobs.valueobjects.Job;
import com.greencommute.savedjobs.entity.SavedJob;
import com.greencommute.savedjobs.exceptions.JobNotFoundException;
import com.greencommute.savedjobs.repository.SavedJobRepository;
import com.greencommute.savedjobs.valueobjects.Location;
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
class SavedJobServiceTest {

    @Mock
    SavedJobRepository savedJobRepository;

    @InjectMocks
    SavedJobServiceImpl savedJobService;

    @Test
    void getAllJobs() {

        Location location=new Location(1,"hyd",894);
        Job job=new Job(1,"","","","","",location,"");
        SavedJob savedJob=new SavedJob(1,job,1);
        savedJobRepository.save(savedJob);
        List<SavedJob> initial=new ArrayList<>();
        initial.add(savedJob);
        List<SavedJob> savedJobs=new ArrayList<>();
        savedJobs.add(savedJob);
        when(savedJobRepository.findAll()).thenReturn(initial);
        List<SavedJob> result=savedJobService.getAllSavedJobStatus();
        assertEquals(result,savedJobs);
    }

    @Test
    void getSavedJobStatusById() throws JobNotFoundException {
        List<Optional<SavedJob>> savedJobs= new ArrayList<>();


        Location location=new Location(1,"hyd",894);
        Job job=new Job(1,"","","","","",location,"");
        Optional<SavedJob> savedJob= Optional.of(new SavedJob(1, job, 0));

        savedJobs.add(savedJob);

        when(savedJobRepository.findById(savedJob.get().getId())).thenReturn((savedJob));

        if(savedJobService.getSavedJobStatusById(1L)!=savedJob.get().getSaved()){
            throw new JobNotFoundException("job not found");
        }
        System.out.println(savedJobRepository.findById(savedJob.get().getId()));

        assertEquals(savedJob.get().getSaved(), savedJobService.getSavedJobStatusById(1L));
    }
    @Test
    void update() throws JobNotFoundException{
        List<SavedJob> savedJobs= new ArrayList<>();

        Location location=new Location(1,"hyd",894);
        Job job=new Job(1,"","","","","",location,"");
        SavedJob savedJob=new SavedJob(1,job,0);

        savedJobRepository.save(savedJob);
        savedJobs.add(savedJob);

        when(savedJobRepository.findById(1L)).thenReturn(Optional.of(savedJob));
        try{
            savedJobService.updateStatusOfSavedJob(1L);
            assertEquals( 0,savedJobService.getSavedJobStatusById(1L));
        }
        catch (JobNotFoundException e){
            throw new JobNotFoundException("job not found");

        }
    }
}
