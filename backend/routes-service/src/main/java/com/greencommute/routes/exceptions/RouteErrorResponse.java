package com.greencommute.routes.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RouteErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
    private int value;
}
