
package com.greencommute.routes.entity;
import com.greencommute.routes.VO.Job;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id")
    private Job job_id;
    @Column(name = "cab")
    private boolean cab;
    @Column(name = "bike")
    private boolean bike;
    @Column(name = "bus")
    private boolean bus;
    @Column(name = "metro")
    private boolean metro;



}