package com.greencommute.savedjobs.service;

import com.greencommute.savedjobs.entity.SavedJob;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SavedJobService {
     List<SavedJob> getAllSavedJobStatus();

     int getSavedJobStatusById(Long jobId);

     void updateStatusOfSavedJob(Long jobId);

}
