package com.greencommute.location.entity;


import lombok.*;

import javax.persistence.*;

@Table(name = "location")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name="locationName")
    private String locationName;

    @Column(name = "aqi")
    private int aqi;


}