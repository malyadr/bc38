package com.greencommute.skills.service;

import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepository;
import com.greencommute.skills.service.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SkillServiceImplTest {
    @Mock
    private SkillRepository skillRepository;
    @InjectMocks
    private SkillServiceImpl skillService;
    @Test
    public void getSkills(){
        List<Skill> skills=new ArrayList<>();
        skills.add(new Skill(1,"Product Designer"));
        when(skillRepository.findAll()).thenReturn(skills);
        int actual=skillService.findAll().size();
        int expected=1;
        assertEquals(expected,actual);
    }
}