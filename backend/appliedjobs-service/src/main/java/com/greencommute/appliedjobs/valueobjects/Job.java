package com.greencommute.appliedjobs.valueobjects;


import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "companyName")
    private String companyName;

    @Column(name = "role")
    private String role;

    @Column(name = "description")
    private String description;

    @Column(name="distance")
    private String distance;

    @Column(name="time")
    private String time;

    @Column(name="image")
    private String image;
}
