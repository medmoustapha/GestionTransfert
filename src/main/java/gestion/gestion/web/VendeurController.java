package gestion.gestion.web;

import gestion.gestion.entities.Vendeur;
import gestion.gestion.repository.VendeurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "vendeurs/")
public class VendeurController {
    @Autowired
    private VendeurRepository vendeurRepository;

    @GetMapping(value = "getAll")
    public Collection<Vendeur> getAll(){
        return  vendeurRepository.getdAll();
    }
    @PostMapping(value = "addPost")
    public Vendeur addPost(@RequestBody Vendeur vendeur){
        return  vendeurRepository.save(vendeur);
    }
}
