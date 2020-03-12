package gestion.gestion.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Versement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private  Double montant;
    private   Date    date;
    @ManyToOne(fetch = FetchType.EAGER)
   /* @JoinTable(name = "Recevoir_Vendeur",
            joinColumns = {@JoinColumn(name = "idEnv")},
            inverseJoinColumns = {@JoinColumn(name = "id_Vendeur")})*/
    private Vendeur vendeur;
    @ManyToOne(fetch = FetchType.EAGER)
    private Service service;

    public Versement() {
    }




    public Long getId() {
        return id;
    }
    public Double getMontant() {
        return montant;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public Vendeur getVendeur() {
        return vendeur;
    }

    public void setVendeur(Vendeur vendeur) {
        this.vendeur = vendeur;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
