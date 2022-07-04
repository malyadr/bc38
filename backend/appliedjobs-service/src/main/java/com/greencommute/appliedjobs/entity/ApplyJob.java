package com.greencommute.appliedjobs.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.greencommute.appliedjobs.vo.Job;

import javax.persistence.*;

@Table(name = "applied_jobs")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ApplyJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id")
    private Job jobId;

    @Column(name = "applied")
    private int applied;


}