package com.greencommute.job.controller;

import com.greencommute.job.entity.Jobs;
import com.greencommute.job.exceptions.JobNotFoundException;
import com.greencommute.job.service.JobsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Slf4j
@RequestMapping("/jobs")
public class JobsController {

    @Autowired
    private JobsService jobsService;


    @RequestMapping("/all")
    public ResponseEntity<List<Jobs>> getJobs() {
        log.info("inside get all jobs controller");
        return new ResponseEntity<>(jobsService.getAllJobs(), HttpStatus.OK);
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Jobs> getJobsByJobId(@PathVariable("id") Integer id) throws JobNotFoundException {
        log.info("inside get job by id controller " + id);
        return new ResponseEntity<>(jobsService.getJobById(id), HttpStatus.OK);
    }

    @GetMapping("/filter/{data}")
    public ResponseEntity<List<Jobs>> getFilteredJobs(@PathVariable("data") List<String> data) {
        return new ResponseEntity<>(jobsService.getFilteredJobs(data), HttpStatus.OK);
    }

}