package com.greencommute.savedjobs.controller;

import com.greencommute.savedjobs.entity.SavedJob;
import com.greencommute.savedjobs.service.SavedJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/savedJobs")
public class SavedJobController {

    @Autowired
    private SavedJobService savedJobService;

    @GetMapping("")
    public ResponseEntity<List<SavedJob>> getAllJobsWithSavedStatus() {
        return new ResponseEntity<>(savedJobService.getAllSavedJobStatus(), HttpStatus.OK);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Integer> getSavedStatusById(@PathVariable("id") Long id) {
        Integer result = savedJobService.getSavedJobStatusById(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/update-status/{id}")
    public ResponseEntity<Long> updateStatus(@PathVariable("id") Long id) {

        savedJobService.updateStatusOfSavedJob(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
