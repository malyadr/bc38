package com.greencommute.location.service;

import com.greencommute.location.entity.Location;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LocationService {
    List<Location> getAllLocations();

    int getAqiById(Long locationId);

    int getAqiByLocationName(String name);


}
