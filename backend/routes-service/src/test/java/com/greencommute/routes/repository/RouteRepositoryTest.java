package com.greencommute.routes.repository;
import com.greencommute.routes.valueobject.Job;
import com.greencommute.routes.entity.Route;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class RouteRepositoryTest {
    @Autowired
    private RouteRepository routeRepository;
    @Test
    public void getSkill(){
        List<Route> route = routeRepository.findAll();
        Route route1=route.get(1);
        route1.setBike(false);
        Job job=new Job(1, "","","","","","");
        job.setCompanyName("myntra");

        org.assertj.core.api.Assertions.assertThat(route.size()).isEqualTo(6);
    }
}
