package com.greencommute.location.exceptions;

public class LocationNotFoundException extends RuntimeException{
    public LocationNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public LocationNotFoundException(Throwable cause) {
        super(cause);
    }
    public LocationNotFoundException(String s) {
        super(s);
    }


}
