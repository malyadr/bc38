package com.greencommute.skills.service;

import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class SkillServiceImpl implements SkillService {
    @Autowired
    private SkillRepo skillRepo;

    public SkillServiceImpl(SkillRepo theSkillRepo) {
        skillRepo = theSkillRepo;
    }
    @Override
    public List<Skill> findAll() {
        return skillRepo.findAll();
    }

    @Override
    public Skill findById(int id){
        Optional<Skill> result=skillRepo.findById(id);
        Skill skill = null;
        if(result.isPresent()){
            skill = result.get();
        }
        else{
            throw new RuntimeException("Didn't Find  Skill with id- "+id);
        }

        return skill;

    }
}