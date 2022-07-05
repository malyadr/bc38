package com.greencommute.savedjobs.entity;


import lombok.*;
import com.greencommute.savedjobs.valueobjects.Job;

import javax.persistence.*;

@Table(name = "saved_jobs")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class SavedJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id")
    private Job jobId;

    @Column(name = "saved")
    private int saved;


}