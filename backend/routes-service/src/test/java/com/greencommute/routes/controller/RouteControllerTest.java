package com.greencommute.routes.controller;

import com.greencommute.routes.RoutesServiceApplication;
import com.greencommute.routes.VO.Job;
import com.greencommute.routes.entity.Route;
import com.greencommute.routes.repository.RouteRepository;
import com.greencommute.routes.service.RouteServiceImpl;
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
@ContextConfiguration(classes = RoutesServiceApplication.class)
@WebMvcTest(RouteController.class)
class RouteControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    RouteRepository repo;

    @MockBean
    RouteServiceImpl routeService;

    @Test
    void getRouteById() throws Exception {
        when(routeService.findById(1)).thenReturn(Route.builder().build());
        routeService.findById(1);
        this.mockMvc.perform(get("/routes/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllRoute() throws Exception {
        Job job=new Job(1,"myntra","ui","this job is good","10km","9","alt.src");
        Route dummy = new Route(1,job,true,true,true,true);
        repo.save(dummy);

        List<Route> res = new ArrayList<>();
        res.add(dummy);
        when(routeService.findAll()).thenReturn(res);
        this.mockMvc.perform(get("/routes")).andExpect(MockMvcResultMatchers.status().isOk());
    }

}
