package com.greencommute.skills.exception;

public class SkillNotFoundException extends Throwable {
    public SkillNotFoundException(String message) {
        super(message);
    }

    public SkillNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public SkillNotFoundException(Throwable cause) {
        super(cause);
    }
}
