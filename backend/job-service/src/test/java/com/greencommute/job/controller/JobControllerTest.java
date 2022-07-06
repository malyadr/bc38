package com.greencommute.job.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.greencommute.job.entity.Jobs;
import com.greencommute.job.service.JobsServiceImpl;
import com.greencommute.job.valueobjects.Location;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class JobControllerTest {

  @Autowired
  private MockMvc mockMvc;

    @MockBean
    private JobsServiceImpl jobsService;





    @Test
    @DisplayName("GET /jobs/all success")
    void getAllJobs() throws Exception {
        Location location = new Location(1, "Hyderabad", 342);
        Jobs job = new Jobs(1, "developer", "hp", "backend", "10kms", "hp", location, "14hr ago");
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);

        doReturn(Lists.newArrayList(job)).when(jobsService).getAllJobs();

        mockMvc.perform(get("/jobs/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//                .andExpect(header().string(HttpHeaders.LOCATION, "/jobs/all"))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].role", is("developer")));

    }

    @Test
    @DisplayName("GET /jobs/{id} success")
    void getJobById() throws Exception {
        Location location = new Location(1, "Hyderabad", 342);
        Jobs job = new Jobs(1, "developer", "hp", "backend", "10kms", "hp", location, "14hr ago");
        doReturn(job).when(jobsService).getJobById(1);
        mockMvc.perform(get("/jobs/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.role", is("developer")));
    }

    @Test
    @DisplayName("GET /jobs/filter/{data} success")
    void getFilteredData() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        List<String> data = new ArrayList<>();
        data.add("0-10kms");
        data.add("11-20kms");
        String requestJson = mapper.writeValueAsString(data);
        Location location = new Location(1, "Hyderabad", 342);
        Jobs job = new Jobs(1, "developer", "hp", "backend", "0-10kms", "hp", location, "14hr ago");
        doReturn(Lists.newArrayList(job)).when(jobsService).getFilteredJobs(data);
        mockMvc.perform(get("/jobs/filter").contentType(MediaType.APPLICATION_JSON).content(requestJson))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].role", is("developer")));
    }


}
