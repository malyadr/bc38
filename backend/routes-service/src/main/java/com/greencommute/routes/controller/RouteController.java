package com.greencommute.routes.controller;
import com.greencommute.routes.entity.Route;
import com.greencommute.routes.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("")
    public List<Route> getAllRoute(){
        return routeService.findAll();
    }
    @GetMapping("/{id}")
    public Route getRouteById(@PathVariable int id)  {
        return routeService.findById(id);

    }}