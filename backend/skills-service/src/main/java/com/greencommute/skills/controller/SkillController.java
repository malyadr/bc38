package com.greencommute.skills.controller;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.exception.SkillNotFoundException;
import com.greencommute.skills.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/skills")
    public List<Skill> getAllSkills(){
        List<Skill> skill=skillService.findAll();
        return skill;
    }
    @GetMapping("/skills/{id}")
    public Skill getSkillById(@PathVariable int id) throws SkillNotFoundException {

        Skill skill = skillService.findById(id);


        return skill;
    }}