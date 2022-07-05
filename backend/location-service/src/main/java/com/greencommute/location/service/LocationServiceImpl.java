package com.greencommute.location.service;

import com.greencommute.location.entity.Location;
import com.greencommute.location.exceptions.LocationNotFoundException;
import com.greencommute.location.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @Override
    public int getAqiById(Long locationId) {
        Optional<Location> location=(locationRepository.findById(locationId));
        if(location.isPresent()){
            return  location.get().getAqi();
        }
        else{
            throw new LocationNotFoundException("location not found");
        }
    }

    @Override
    public int getAqiByLocationName(String name) {
        List<Location> locations=locationRepository.findAll();
        for(Location i:locations){
            if(i.getLocationName().equals(name)){
                return i.getAqi();
            }
        }
        throw new LocationNotFoundException("location not found");
    }


}
