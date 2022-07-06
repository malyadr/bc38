package com.greencommute.job.repository;

import com.greencommute.job.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends JpaRepository<Jobs, Integer> {

    List<Jobs> findByDistanceIn(List<String> distances);
}
