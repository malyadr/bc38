package com.greencommute.routes.service;

import com.greencommute.routes.entity.Route;
import com.greencommute.routes.exceptions.RouteNotFoundException;
import com.greencommute.routes.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteServiceImpl implements RouteService{
    @Autowired
    private RouteRepository routeRepository;

    public RouteServiceImpl(RouteRepository theRouteRepository) {
        routeRepository = theRouteRepository;
    }
    @Override
    public List<Route> findAll() {
        return routeRepository.findAll();
    }

    @Override
    public Route findById(int id){
        Optional<Route> result= routeRepository.findById(id);
        Route route = null;
        if(result.isPresent()){
            route = result.get();
        }
        else{
            throw new RouteNotFoundException("Didn't Find  Skill with id- "+id);
        }

        return route;

    }
}