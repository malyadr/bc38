package com.greencommute.routes.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;



@ControllerAdvice
public class RouteExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<RouteErrorResponse> handleException(RouteNotFoundException exception) {
        RouteErrorResponse error = new RouteErrorResponse();
        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exception.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<RouteErrorResponse> handleException(Exception exception) {
        RouteErrorResponse error = new RouteErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage("id is incorrect");
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);

    }
}
