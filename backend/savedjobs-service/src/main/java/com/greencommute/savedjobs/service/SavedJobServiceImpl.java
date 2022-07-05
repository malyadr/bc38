package com.greencommute.savedjobs.service;

import com.greencommute.savedjobs.entity.SavedJob;
import com.greencommute.savedjobs.exceptions.JobNotFoundException;
import com.greencommute.savedjobs.repository.SavedJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SavedJobServiceImpl implements SavedJobService {

    @Autowired
    private SavedJobRepository savedJobRepository;

    @Override
    public List<Long> getAllSavedJobStatus() {

        List<Long> idsOfSavedJobs=new ArrayList<>();
        for(SavedJob savedJob:savedJobRepository.findAll()){
            if(savedJob.getSaved()==1){
                idsOfSavedJobs.add(savedJob.getId());
            }
        }
        return idsOfSavedJobs;
    }

    @Override
    public int getSavedJobStatusById(Long jobId) {
        Optional<SavedJob> savedJob=(savedJobRepository.findById(jobId));
        if(savedJob.isPresent()){

            return  savedJob.get().getSaved();
        }
        else{
            throw new JobNotFoundException("job not found");
        }
    }

    @Override
    public void updateStatusOfSavedJob(Long jobId) {
        Optional<SavedJob> savedJob=(savedJobRepository.findById(jobId));
        if(savedJob.isPresent()){
            SavedJob dummy=new SavedJob();
            dummy.setSaved(savedJob.get().getSaved()==1? 0:1);
            dummy.setJob_id(savedJob.get().getJob_id());
            dummy.setId(savedJob.get().getId());
            savedJobRepository.save(dummy);
        }
        else{
            throw new JobNotFoundException("job not found");
        }


    }
}
