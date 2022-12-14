package com.greencommute.skills.service;

import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.exception.SkillNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface SkillService {
     List<Skill> findAll();

    Skill findById(int id) throws SkillNotFoundException;


}