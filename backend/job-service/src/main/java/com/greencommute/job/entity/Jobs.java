package com.greencommute.job.entity;

import com.greencommute.job.valueobjects.Location;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="jobs")
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name="role")
    private String role;

    @Column(name="company_name")
    private String companyName;

    @Column(name="description")
    private String description;

    @Column(name="distance")
    private String distance;

    @Column(name="image")
    private String image;

    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "location_id")
    private Location locationId;

    @Column(name="time")
    private String time;

}
