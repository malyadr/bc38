package com.greencommute.job.exceptions;

public class JobNotFoundException extends RuntimeException{
   public JobNotFoundException(String message, Throwable cause) {
       super(message, cause);
   }

   public JobNotFoundException(Throwable cause) {
       super(cause);
   }

   public JobNotFoundException(String message) {
       super(message);
   }
}
