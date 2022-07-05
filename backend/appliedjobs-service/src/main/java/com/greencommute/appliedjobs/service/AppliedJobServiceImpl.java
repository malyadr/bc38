package com.greencommute.appliedjobs.service;

import com.greencommute.appliedjobs.entity.ApplyJob;
import com.greencommute.appliedjobs.exceptions.JobNotFoundException;
import com.greencommute.appliedjobs.repository.ApplyJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppliedJobServiceImpl implements ApplyJobService{

    @Autowired
    private ApplyJobRepository applyJobRepository;

    @Override
    public List<ApplyJob> getAllAppliedJobStatus() {
        return applyJobRepository.findAll();
    }

    @Override
    public int getAppliedJobStatusById(Long jobId) {
        Optional<ApplyJob> applyJob=(applyJobRepository.findById(jobId));
        if(applyJob.isPresent()){

            return  applyJob.get().getApplied();
        }
        else{
            throw new JobNotFoundException("job not found");
        }
    }

    @Override
    public void updateStatusOfAppliedJob(Long jobId) {
        Optional<ApplyJob> applyJob=(applyJobRepository.findById(jobId));
        if(applyJob.isPresent()){
            ApplyJob dummy=new ApplyJob();
            dummy.setApplied(applyJob.get().getApplied()==1? 0:1);
            dummy.setJobId(applyJob.get().getJobId());
            dummy.setId(applyJob.get().getId());
            applyJobRepository.save(dummy);
        }
        else{
            throw new JobNotFoundException("job not found");
        }


    }
}
