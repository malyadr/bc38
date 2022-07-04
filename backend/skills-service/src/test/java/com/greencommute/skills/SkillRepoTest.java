package com.greencommute.skills;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class SkillRepoTest {
    @Autowired
    private SkillRepo skillRepo;
    @Test
    public void getSkill(){
        List<Skill> locations = skillRepo.findAll();

        org.assertj.core.api.Assertions.assertThat(locations.size()).isEqualTo(2);
    }
}