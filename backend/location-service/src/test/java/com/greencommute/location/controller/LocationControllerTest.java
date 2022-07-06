package com.greencommute.location.controller;

import com.greencommute.location.LocationServiceApplication;
import com.greencommute.location.entity.Location;
import com.greencommute.location.repository.LocationRepository;
import com.greencommute.location.service.LocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = LocationServiceApplication.class)
@WebMvcTest(LocationController.class)
class LocationControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    LocationRepository repo;

    @MockBean
    LocationServiceImpl locationService;

    @Test
    void getAllLocationAqiWithId() throws Exception {
        when(locationService.getAqiById(1L)).thenReturn(1);
        locationService.getAqiById(1L);
        this.mockMvc.perform(get("/locations/aqi-by-id/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllLocations() throws Exception {
        Location dummy = new Location(1, "hyd", 1);
        repo.save(dummy);

        List<Location> res = new ArrayList<>();
        res.add(dummy);
        when(locationService.getAllLocations()).thenReturn(res);
        this.mockMvc.perform(get("/locations")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllLocationAqiWithName() throws Exception {
        when(locationService.getAqiByLocationName("hyd")).thenReturn(1);
        locationService.getAqiByLocationName("hyd");
        this.mockMvc.perform(get("/locations/aqi-by-name/hyd")).andExpect(MockMvcResultMatchers.status().isOk());
    }
}