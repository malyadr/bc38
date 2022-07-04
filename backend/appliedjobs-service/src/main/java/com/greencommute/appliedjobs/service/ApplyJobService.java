package com.greencommute.appliedjobs.service;

import com.greencommute.appliedjobs.entity.ApplyJob;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ApplyJobService {
    public List<ApplyJob> getAllAppliedJobStatus();

    public int getAppliedJobStatusById(Long jobId);

    public void UpdateStatusOfAppliedJob(Long jobId);

}
