package com.greencommute.job.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
    private int value;
}
