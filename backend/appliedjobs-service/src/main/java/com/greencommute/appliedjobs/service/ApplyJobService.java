package com.greencommute.appliedjobs.service;

import com.greencommute.appliedjobs.entity.ApplyJob;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ApplyJobService {
     List<ApplyJob> getAllAppliedJobStatus();

    int getAppliedJobStatusById(Long jobId);

    void updateStatusOfAppliedJob(Long jobId);

}
