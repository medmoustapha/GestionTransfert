package gestion.gestion.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String libelle;
    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private Collection<Remboursement> remboursements;
    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private  Collection<Versement> versements;

    public Service() {
    }

    public Service(String libelle) {
        this.libelle = libelle;
    }

    public Long getId() {
        return id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

}
