package com.greencommute.job.controller;

import com.greencommute.job.entity.Jobs;
import com.greencommute.job.exceptions.JobNotFoundException;
import com.greencommute.job.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Slf4j
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:4000")
public class JobsController {

    @Autowired
    private JobService jobService;


    @GetMapping("")
    public ResponseEntity<List<Jobs>> getJobs() {
        log.info("inside get all jobs controller");
        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Jobs> getJobsByJobId(@PathVariable("id") Integer id) throws JobNotFoundException {
        log.info("inside get job by id controller " + id);
        return new ResponseEntity<>(jobService.getJobById(id), HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Jobs>> getFilteredJobs(@RequestBody List<String> data) {
        return new ResponseEntity<>(jobService.getFilteredJobs(data), HttpStatus.OK);
    }

}