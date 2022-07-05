package com.greencommute.savedjobs.service;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SavedJobService {
     List<Long> getAllSavedJobStatus();

     int getSavedJobStatusById(Long jobId);

     void updateStatusOfSavedJob(Long jobId);

}
