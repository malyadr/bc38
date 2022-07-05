package com.greencommute.location.service;

import com.greencommute.location.entity.Location;
import com.greencommute.location.exceptions.LocationNotFoundException;
import com.greencommute.location.repository.LocationRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LocationServiceTest {

    @Mock
    LocationRepository locationRepository;

    @InjectMocks
    LocationServiceImpl locationService;

    @Test
    void getAllJobs() {
        Location location = new Location(1, "job", 1);
        locationRepository.save(location);
        List<Location> initial = new ArrayList<>();
        initial.add(location);
        when(locationService.getAllLocations()).thenReturn(initial);
        List<Location> result = locationService.getAllLocations();
        assertEquals(result, initial);
    }

    @Test
    void getAppliedJobStatusById() throws LocationNotFoundException {
        List<Location> locations = new ArrayList<>();

        Location location = new Location(1, "hyd", 0);

        locationRepository.save(location);

        locations.add(location);

        when(locationRepository.findById(location.getId())).thenReturn(Optional.of(location));

        if (locationService.getAqiById(1L) != location.getAqi()) {
            throw new LocationNotFoundException("job not found");
        }
        System.out.println(locationRepository.findById(location.getId()));

        Assert.assertEquals(location.getAqi(), locationService.getAqiById(1L));
    }

    @Test
    void getAppliedJobStatusByName() throws LocationNotFoundException {
        List<Location> locations = new ArrayList<>();

        Location location = new Location(1, "hyd", 0);

        locationRepository.save(location);

        locations.add(location);

        when(locationRepository.findAll()).thenReturn(locations);

        if (locationService.getAqiByLocationName(location.getLocationName()) != location.getAqi()) {
            throw new LocationNotFoundException("job not found");
        }
        System.out.println(locationRepository.findById(location.getId()));

        Assert.assertEquals(location.getAqi(), locationService.getAqiByLocationName(location.getLocationName()));
    }

}
