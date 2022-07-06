package com.greencommute.job.service;

import com.greencommute.job.entity.Jobs;
import com.greencommute.job.exceptions.JobNotFoundException;
import com.greencommute.job.repository.JobsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class JobsServiceImpl implements JobService{

    @Autowired
    private JobsRepository jobsRepository;

    public List<Jobs> getAllJobs() {
        log.info("inside get all jobs services");
        return jobsRepository.findAll();
    }

    public Jobs getJobById(Integer id) throws JobNotFoundException {
        log.info("inside get job by id service " + id);

        Optional<Jobs> job = jobsRepository.findById(id);
        if (job.isEmpty()) {
            throw new JobNotFoundException("No Job Exists with jobs Id " + id);
        }
        return job.get();
    }

    public List<Jobs> getFilteredJobs(List<String> data) {
        return jobsRepository.findByDistanceIn(data);
    }

}
