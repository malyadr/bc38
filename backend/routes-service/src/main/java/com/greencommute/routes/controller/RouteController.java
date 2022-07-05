package com.greencommute.routes.controller;
import com.greencommute.routes.entity.Route;
import com.greencommute.routes.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("/routes")
    public List<Route> getAllRoute(){
        List<Route> route=routeService.findAll();
        return route;
    }
    @GetMapping("/routes/{id}")
    public Route getRouteById(@PathVariable int id)  {
        Route route = routeService.findById(id);


        return route;
    }}