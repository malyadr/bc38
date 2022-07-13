package com.greencommute.location.controller;

import com.greencommute.location.entity.Location;
import com.greencommute.location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("")
    public ResponseEntity<List<Location>> getAllLocations() {
        return new ResponseEntity<>(locationService.getAllLocations(), HttpStatus.OK);
    }

    @GetMapping("/aqi-by-id/{id}")
    public ResponseEntity<Integer> getLocationAqiById(@PathVariable("id") Long id) {
        Integer result = locationService.getAqiById(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/aqi-by-name/{name}")
    public ResponseEntity<Integer> getLocationAqiByName(@PathVariable("name") String name) {
        Integer aqi = locationService.getAqiByLocationName(name);
        return new ResponseEntity<>(aqi, HttpStatus.OK);
    }
}
