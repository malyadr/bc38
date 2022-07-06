package com.greencommute.job.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class JavaNotFoundExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<JobErrorResponse> handleException(JobNotFoundException exception) {
        JobErrorResponse error = new JobErrorResponse();
        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exception.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<JobErrorResponse> handleException(Exception exception) {
        JobErrorResponse error = new JobErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage("id is incorrect");
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);

    }
}
