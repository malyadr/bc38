package com.greencommute.skills.controller;
import com.greencommute.skills.entity.Skill;
import com.greencommute.skills.exception.SkillNotFoundException;
import com.greencommute.skills.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("")
    public List<Skill> getAllSkills(){
       return skillService.findAll();

    }
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable int id) throws SkillNotFoundException {

        return skillService.findById(id);



    }}