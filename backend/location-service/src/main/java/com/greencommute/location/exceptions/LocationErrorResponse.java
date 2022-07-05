package com.greencommute.location.exceptions;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
    private int value;
}
