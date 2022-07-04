package com.greencommute.appliedjobs.repository;

import com.greencommute.appliedjobs.entity.ApplyJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplyJobRepository extends JpaRepository<ApplyJob,Long> {

}
