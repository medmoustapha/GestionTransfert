package gestion.gestion.web;

import gestion.gestion.entities.Versement;
import gestion.gestion.repository.VersementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;

@RestController
@RequestMapping(value="versement/")
public class VersementController {

    @Autowired
    private VersementRepository versementRepository;

    @GetMapping(value = "getAll")
    public Collection<Versement> getAll(){
        return  this.versementRepository.findAll();
    }
    @PostMapping(value = "addPost")
    public Versement addPost(@RequestBody Versement versement){

        versement.setDate(new Date());
        return  this.versementRepository.save(versement);
    }
}
