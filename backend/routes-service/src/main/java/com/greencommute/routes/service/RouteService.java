package com.greencommute.routes.service;

import com.greencommute.routes.entity.Route;

import java.util.List;

public interface RouteService {
     List<Route> findAll();

     Route findById(int jobId);

}
