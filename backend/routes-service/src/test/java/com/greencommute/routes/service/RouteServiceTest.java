package com.greencommute.routes.service;

import com.greencommute.routes.valueobject.Job;
import com.greencommute.routes.entity.Route;
import com.greencommute.routes.repository.RouteRepository;
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
public class RouteServiceTest {
    @Mock
    private RouteRepository routeRepository;
    @InjectMocks
    private RouteServiceImpl routeService;
    @Test
    public void getRoute(){
        List<Route> routes=new ArrayList<>();
        Job job=new Job(1,"myntra","ui","this job is good","10km","9","alt.src");
        routes.add(new Route(1,job,true,true,true,true));
        when(routeRepository.findAll()).thenReturn(routes);
        int actual=routeService.findAll().size();
        int expected=1;
        assertEquals(expected,actual);
    }

    @Test
    void getRouteById() {
        List<Optional<Route>> routes= new ArrayList<>();

        Job job=new Job(1,"","","","","","");
        Optional<Route> route= Optional.of(new Route(1, job,true,true,true,true));



        routes.add(route);

        when(routeRepository.findById(route.get().getId())).thenReturn((route));


        System.out.println(routeRepository.findById(route.get().getId()));

        Assert.assertEquals(route.get(),routeService.findById(1));
    }

}
