package com.greencommute.job.service;

import com.greencommute.job.entity.Jobs;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JobService {
     List<Jobs> getAllJobs() ;
    Jobs getJobById(Integer id);
    List<Jobs> getFilteredJobs(List<String> data);

}
