package com.greencommute.routes.repository;

import com.greencommute.routes.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository <Route,Integer>{
}
