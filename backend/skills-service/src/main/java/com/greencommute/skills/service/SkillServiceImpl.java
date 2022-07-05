package com.greencommute.skills.service;

import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.repository.SkillRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class SkillServiceImpl implements SkillService {
    @Autowired
    private SkillRepository skillRepository;

    public SkillServiceImpl(SkillRepository theSkillRepository) {
        skillRepository = theSkillRepository;
    }
    @Override
    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Skill findById(int id){
        Optional<Skill> result= skillRepository.findById(id);
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