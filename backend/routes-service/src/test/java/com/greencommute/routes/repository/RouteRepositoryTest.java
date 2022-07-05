package com.greencommute.routes.repository;
import com.greencommute.routes.entity.Route;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.greencommute.routes.repository.RouteRepository;
import java.util.List;

@SpringBootTest
public class RouteRepositoryTest {
    @Autowired
    private RouteRepository routeRepository;
    @Test
    public void getSkill(){
        List<Route> route = routeRepository.findAll();

        org.assertj.core.api.Assertions.assertThat(route.size()).isEqualTo(5);
    }
}