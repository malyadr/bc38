package com.greencommute.routes.service;

import com.greencommute.routes.entity.Route;

import java.util.List;

public interface RouteService {
    public List<Route> findAll();

    public Route findById(int jobId);

}
