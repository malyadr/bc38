package com.greencommute.appliedjobs.controller;

import com.greencommute.appliedjobs.entity.ApplyJob;
import com.greencommute.appliedjobs.service.ApplyJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApplyJobController {

    @Autowired
    private ApplyJobService applyJobService;

    @GetMapping("/appliedJobs")
    public ResponseEntity<List<ApplyJob>> getAllJobsWithAppliedStatus(){
        return new ResponseEntity(applyJobService.getAllAppliedJobStatus(), HttpStatus.OK);
    }

    @GetMapping("/appliedJobStatus/{Id}")
    public ResponseEntity getAppliedStatusById(@PathVariable("Id") Long Id){
        Integer id = applyJobService.getAppliedJobStatusById(Id);
        return id == null ? ResponseEntity.status(500).body("NO id found") : ResponseEntity.status(200).body(id);
    }

    @PutMapping("updateStatus/{Id}")
    public ResponseEntity updateStatus(@PathVariable("Id") Long id){

        applyJobService.UpdateStatusOfAppliedJob(id);
        return id == null ? ResponseEntity.status(500).body("NO id found") : ResponseEntity.status(200).body(id);

    }
}
