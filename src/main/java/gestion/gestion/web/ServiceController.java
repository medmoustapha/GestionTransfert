package gestion.gestion.web;

import gestion.gestion.entities.Service;
import gestion.gestion.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "services/")
public class ServiceController {
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("getAll")
    public Collection<Service> getAll(){
        return  this.serviceRepository.getAll();
    }
    @PostMapping("addPost")
    public Service addPost(@RequestBody Service service){
        return  this.serviceRepository.save(service);
    }
}
