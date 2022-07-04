package com.greencommute.skills.service;

import com.greencommute.skills.entity.Skill;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface SkillService {
    public List<Skill> findAll();

    public  Skill findById(int id);


}