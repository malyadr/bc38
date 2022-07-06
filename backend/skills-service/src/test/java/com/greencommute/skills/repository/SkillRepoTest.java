package com.greencommute.skills.repository;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
 class SkillRepoTest {
    @Autowired
    private SkillRepository skillRepository;
        @Test
        void getSkill(){
        List<Skill> skills = skillRepository.findAll();
        Skill skill=skills.get(1);
        skill.setId(1);
        skill.getId();

        org.assertj.core.api.Assertions.assertThat(skills).hasSize(2);
    }
}