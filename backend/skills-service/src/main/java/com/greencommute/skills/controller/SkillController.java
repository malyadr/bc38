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
@RequestMapping("/api")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/skills")
    public List<Skill> getSkills(){
        List<Skill> skill=skillService.findAll();

        if(skill==null){
            throw new RuntimeException("skills not found ");
        }
        return skill;
    }
    @GetMapping("/skills/{id}")
    public Skill getSkill(@PathVariable int id) throws SkillNotFoundException {
        if( (id<0) ){
            throw new SkillNotFoundException("Location id not Found -"+ id);
        }
        Skill skill = skillService.findById(id);
        if(skill==null) {
            throw new SkillNotFoundException("Location id not Found -"+ id);
        }

        return skill;
    }}