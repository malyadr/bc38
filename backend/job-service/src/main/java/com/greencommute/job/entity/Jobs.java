package com.greencommute.job.entity;

import com.greencommute.job.valueObjects.Location;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String role;
    private String companyName;
    private String description;
    private String distance;
    private String image;
    private Integer locationId;
    private String time;

}
