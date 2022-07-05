package com.greencommute.savedjobs.repository;

import com.greencommute.savedjobs.entity.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedJobRepository extends JpaRepository<SavedJob,Long> {

}
