package com.greencommute.skills;

import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepository;
import com.greencommute.skills.service.SkillServiceImpl;
import com.greencommute.skills.exception.SkillNotFoundException;
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
    @Test
    public void getSkillById() throws SkillNotFoundException {
        List<Optional<Skill>> skills= new ArrayList<>();


        Optional<Skill> skill= Optional.of(new Skill(1, "product designer"));



        skills.add(skill);
        when(skillRepository.findById(skill.get().getId())).thenReturn((skill));

        if(skillService.findById(1)!=skill.get()){
            throw new SkillNotFoundException("job not found");
        }


        when(skillRepository.findById(skill.get().getId())).thenReturn((skill));


        System.out.println(skillRepository.findById(skill.get().getId()));

        Assert.assertEquals(skill.get(),skillService.findById(1));
    }
}