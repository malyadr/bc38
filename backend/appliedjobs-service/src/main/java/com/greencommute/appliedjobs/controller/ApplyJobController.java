package com.greencommute.appliedjobs.controller;

import com.greencommute.appliedjobs.entity.ApplyJob;
import com.greencommute.appliedjobs.service.ApplyJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApplyJobController {

    @Autowired
    private ApplyJobService applyJobService;

    @GetMapping("/applied-jobs")
    public ResponseEntity<List<ApplyJob>> getAllJobsWithAppliedStatus(){
        return new ResponseEntity<>(applyJobService.getAllAppliedJobStatus(), HttpStatus.OK);
    }

    @GetMapping("/applied-job-status/{id}")
    public ResponseEntity<Integer> getAppliedStatusById(@PathVariable("id") Long id){
        Integer result = applyJobService.getAppliedJobStatusById(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("update-applied-status/{id}")
    public ResponseEntity<Long> updateStatus(@PathVariable("id") Long id){

        applyJobService.updateStatusOfAppliedJob(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
