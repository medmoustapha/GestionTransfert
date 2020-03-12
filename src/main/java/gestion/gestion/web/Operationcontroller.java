package gestion.gestion.web;

import gestion.gestion.entities.Operation;
import gestion.gestion.repository.OperationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.Date;

@RestController
@RequestMapping(value = "operations/")
public class Operationcontroller {
    @Autowired
    private OperationRepository operationRepository;

    @GetMapping(value = "getOprations/{type}")
    public Collection<Operation> getOperationsByType(@PathVariable String type){
        return  operationRepository.getOperationByType(type);
    }
    @GetMapping(value = "getAllOprations")
    public Collection<Operation> getAllOperations(){
        return  operationRepository.findAll();
    }

    @PostMapping(value = "addPost")
    public Operation addOperation(@RequestBody Operation operation){

        operation.setDate(new Date());
       return  this.operationRepository.save(operation);
    }
}
