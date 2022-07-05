package com.greencommute.skills.repository;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class SkillRepoTest {
    @Autowired
    private SkillRepository skillRepository;
    @Test
    public void getSkill(){
        List<Skill> locations = skillRepository.findAll();

        org.assertj.core.api.Assertions.assertThat(locations.size()).isEqualTo(2);
    }
}