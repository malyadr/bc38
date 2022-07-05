package com.greencommute.skills;
import com.greencommute.skills.controller.SkillController;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.exception.SkillNotFoundException;
import com.greencommute.skills.repository.SkillRepository;
import com.greencommute.skills.service.SkillServiceImpl;
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
@ContextConfiguration(classes = SkillsServiceApplication.class)
@WebMvcTest(SkillController.class)
class SkillControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    SkillRepository repo;

    @MockBean
    SkillServiceImpl skillService;

    @Test
    void getSkillById() throws Exception, SkillNotFoundException {
        when(skillService.findById(1)).thenReturn(Skill.builder().build());
        skillService.findById(1);
        this.mockMvc.perform(get("/skills/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllSkill() throws Exception {
        Skill dummy = new Skill(1, "product designer");
//        repo.save(dummy);

        List<Skill> res = new ArrayList<>();
        res.add(dummy);
        when(skillService.findAll()).thenReturn(res);
        this.mockMvc.perform(get("/skills")).andExpect(MockMvcResultMatchers.status().isOk());
    }


}
