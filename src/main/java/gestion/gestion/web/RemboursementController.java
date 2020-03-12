package gestion.gestion.web;

import gestion.gestion.entities.Remboursement;
import gestion.gestion.repository.RemboursementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;

@RestController
@RequestMapping(value = "remboursement/")
public class RemboursementController {
    @Autowired
    private RemboursementRepository remboursementRepository;
    @GetMapping(value = "getAll")
    public Collection<Remboursement> getall(){
        return this.remboursementRepository.findAll();
    }
    @PostMapping(value = "addPost")
    public Remboursement addPost(@RequestBody Remboursement remboursement){
        remboursement.setDate(new Date());
        return  remboursementRepository.save(remboursement);
    }
}
